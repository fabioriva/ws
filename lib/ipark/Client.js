var net = require('net')
, util = require('util')
, utility = require('./Tools')
, redis = require('redis')
, rclient = redis.createClient();

var EventEmitter = require('events').EventEmitter;

var Client = function (plc, conn, task) {

	var OFFLINE = 0;
	var ONLINE = 1;
	var IDLE = 250;				// msec
	var MAX_DATA_LEN = 32767;	// CPUs 31x-2 PN/DP firmware v3.2
	
	this.enqueueMsg = function (msg) {
		//console.log('from client.js: client id:', msg.id);
		//console.log('from client.js: client s7:', msg.s7);
		if (plc.alive && conn.connected == ONLINE) {
			rclient.rpush(task, JSON.stringify(msg));
		}
	};

    var self = this;
	
	var addr = plc.addr;
	var port = conn.port;
	//var status = par.connected;
	
    var client = new net.Socket({ type: 'tcp4'});
	//client.connect({ host: addr, port: port });
	
	var conn_busy = 0;
	var buffer = new Buffer(MAX_DATA_LEN);
	var bytesPartial = 0;
	var bytesTotal = 0;
	var bytesLen = 0;				// new !
	var index = 0;
	var send_busy = 0;
	var sio_client_id = undefined;	// new !
	var sio_client_rq = undefined;	// new !
	
	setInterval(sendMsg, IDLE);
	
	function sendMsg() {

		if (plc.alive) {
		
			if (conn.connected == ONLINE) {
				
				rclient.llen(task, function (err, len) {
					if (err) throw err;
					if (len > 0) {
						//console.log('from client.js:', task, 'length: ',  len);
						rclient.lpop(task, function (err, key) {
							if (err) throw err;
							//console.log('from client.js: key:', key);
							var o = JSON.parse(key);
							//console.log('from client.js: id:', o.id);
							//console.log('from client.js: s7:', o.s7);
							//var msg = new Buffer(JSON.parse(key));
							sio_client_id = o.id;
							sio_client_rq = o.rq;
							var msg = new Buffer(o.s7);
							send_busy = client.write(msg);
						});
					}
				});
			}
			else {
				if (!conn_busy) {
					client.connect({ host: addr, port: port });
					conn_busy = 1;
				}
			}
			
		} else {
			if (conn.connected == ONLINE) {
				client.end();
				client.destroy();
			}
		}
	}

	client.on('connect', function() {
		console.log('[ From Data.js ] connect event');
		conn.connected = ONLINE;	
		conn_busy = 0;
		send_busy = 0;
		self.emit('connect', plc);
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
		
		if (index == 0) {
			bytesLen = utility.BytesToInt(data[0], data[1]);
			//console.log('Len bytes : ' + bytesLen);
		}
		bytesPartial = (client.bytesRead - bytesTotal);
		//console.log('Partial received bytes : ' + bytesPartial);	
		bytesTotal = client.bytesRead;
		//console.log('Total received bytes : ' + bytesTotal);
		
		if (index == 0) {
			for(var i = 0; i < bytesPartial; i++) {
				buffer[index] = data[i];//data[i+2];
				index++;
			}	
		}
		else {
			for(var i = 0; i < bytesPartial; i++) {
				buffer[index] = data[i];
				index++;
			}
		}
		
		if (client.bytesRead >= bytesLen) {
			
			//console.log('from client.js: expected msg length : ' + bytesLen);
			//console.log('from client.js: received msg length : ' + client.bytesRead);
			var recv_buffer = new Buffer(bytesLen-2);
			for(var i = 0; i < bytesLen-2; i++) {
				recv_buffer[i] = buffer[i+2];
			}
			
			bytesPartial = 0;
			bytesTotal = 0;
			bytesLen = 0;
			client.bytesRead = 0;
			index = 0;
			send_busy = 0;			
			
			var msg = {
				id : sio_client_id,
				rq : sio_client_rq,
				s7 : recv_buffer
			}
			self.emit('recv', msg);
		}
	});    
};

// extend the EventEmitter class using our class
util.inherits(Client, EventEmitter);

// we specify that this module is a refrence to the class
module.exports = Client;