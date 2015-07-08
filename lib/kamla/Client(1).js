var net = require('net')
, util = require('util')
, utility = require('./Tools');

var EventEmitter = require('events').EventEmitter;

var Client = function (plc, conn) {

	var OFFLINE = 0;
	var ONLINE = 1;
	var IDLE = 500;	// msec
	var queue = [];

	this.enqueueMsg = function (msg) {
		queue.push(msg);
		//console.log(queue, queue.length);
	};

    var self = this;
	
	var addr = plc.addr;
	var port = conn.port;
	//var status = par.connected;
	
    var client = new net.Socket({ type: 'tcp4'});
	//client.connect({ host: addr, port: port });
	
	var conn_busy = 0;
	var buffer = new Buffer(conn.data_len);	// max recv data len
	var bytesPartial = 0;
	var bytesTotal = 0;
	var index = 0;
	var send_busy = 0;
	
	setInterval(sendMsg, IDLE);
	
	function sendMsg() {

		if (plc.alive) {
		
			if(conn.connected == ONLINE) {
				if ( queue.length>0 && !send_busy ) {
					var msg = queue.shift();
					send_busy = client.write(msg);
				}
			}
			else {
				if(!conn_busy) {
					client.connect({ host: addr, port: port });
					conn_busy = 1;
				}
			}
			
		} else {

			if(conn.connected == ONLINE) {
				client.end();
				client.destroy();
			}
			//conn.connected = OFFLINE;
			//conn_busy = 0;
			//send_busy = 0;
			//client.destroy();
		}
	}

	client.on('connect', function() {
		console.log('[ From Data.js ] connect event');
		conn.connected = ONLINE;	
		conn_busy = 0;
		send_busy = 0;
		//self.emit('connect', plc);
	});
	
	client.on('close', function() {
		//console.log('%j', arguments);
		console.log('[ From Data.js ] close event');
		conn.connected = OFFLINE;
		conn_busy = 0;
		send_busy = 0;
		client.destroy();
	});
	
	client.on('end', function() {
		console.log('[ From Data.js ] end event');
		conn.connected = OFFLINE;
		conn_busy = 0;
		send_busy = 0;
		client.destroy();
	});
	
	client.on('error', function(err) {
		console.log('[ From Data.js ] error event ' + err);
		// net module callback to end function
	});
	
	client.on('data', function(data) {
		//console.log('[From Data.js] data event');
		bytesPartial = (client.bytesRead - bytesTotal);
		//console.log('Partial received bytes : ' + bytesPartial);	
		bytesTotal = client.bytesRead;
		//console.log('Total received bytes : ' + bytesTotal);
		
		for(var i = 0; i < bytesPartial; i++) {
			buffer[index] = data[i];
			index++;
		}
		
		if (client.bytesRead >= conn.data_len) {
			//console.log('recv length : ' + client.bytesRead);
			
			bytesPartial = 0;
			bytesTotal = 0;
			client.bytesRead = 0;
			index = 0;
			send_busy = 0;
			
			self.emit('recv', buffer);
		}
	});    
};

// extend the EventEmitter class using our class
util.inherits(Client, EventEmitter);

// we specify that this module is a refrence to the class
module.exports = Client;