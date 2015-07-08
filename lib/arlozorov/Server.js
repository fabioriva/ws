var util = require('util')
, net = require('net')
, utility = require('./Tools');

var EventEmitter = require('events').EventEmitter;

var Server = function(plc, conn) {

	// store the reference of `this` to `self`, so that we can use the current context in the setTimeout (or any callback) functions
    // using `this` in the setTimeout functions will refer to those funtions, not the Log class
	var self = this;
	
	var PORT_TCP = conn.port;
	var MSG_LEN = 32;
	var IDLE = 1000;	// msec

	var server = net.createServer( function(socket) {

		var msg = '[Log server] s7 client connected : ' + socket.remoteAddress + ':' + socket.remotePort;
		console.log(msg);
		
		conn.connected = 1;
		
		//setInterval( function () { connStatus(plc, conn, socket); }, IDLE);

		socket.recv_data = [];
		socket.index = 0;
		
		socket.on('close', function() {
			var msg = '[Log server] s7 client disconnected (close event)';
			console.log(msg);
			conn.connected = 0;
			//io.sockets.send(msg);
		});

		socket.on('end', function() {
			var msg = '[Log server] s7 client disconnected (end event)';
			console.log(msg);
			conn.connected = 0;
			//io.sockets.send(msg);
		});
		
		socket.on('error', function(e) {
			var msg = '[Log server] s7 client Error: ' + e;
			console.log(msg);
			//io.sockets.send(msg);
		});
	
		socket.on('data', function(data) {

			for(var i = 0; i < socket.bytesRead; i++) {

				socket.recv_data[socket.index] = data[i];
				socket.index++;	
			}

			if (socket.bytesRead == MSG_LEN) {

				//console.log('Total bytes received: ' + socket.bytesRead);
				//console.log(socket.recv_data);
				//io.sockets.send(socket.recv_data);

				var msg = new Buffer(socket.recv_data);
				if (socket.write(msg)) {
					console.log('Echo message bytes sent: ' + socket.bytesRead);	
				}		

				self.emit('recv', socket.recv_data);
				
				socket.bytesRead = 0;
				socket.recv_data = [];
				socket.index = 0;
			}
		});
		//socket.pipe(socket, {end: false});
	}).listen(PORT_TCP);

};

function connStatus (plc, conn, socket) {

	if (!plc.alive) {
		if(conn.connected == ONLINE) {
			socket.end();
		}
	}
}

// extend the EventEmitter class using Log class
util.inherits(Server, EventEmitter);

// This module is a refrence to the Log class
module.exports = Server;
