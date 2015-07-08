var ping = require('net-ping')
, util = require('util');

var EventEmitter = require('events').EventEmitter;

var Ping = function (plc) {

	var self = this;
	
	var OFFLINE = 0;
	var ONLINE = 1;
	var IDLE = 1000;	// msec
	
	var session = ping.createSession();
	
	setInterval( function () { netPing(plc.addr); }, IDLE);
	
	function netPing(target) {
		//console.log('gid : ' + process.getgid(), 'uid : ' + process.getuid());
		session.pingHost (target, function (error, target, sent, rcvd) {
			var ms = rcvd - sent;
			if (error) {
				plc.alive = OFFLINE;
				var msg = target + ': ' + error.toString();
				self.emit('status', msg);
			} else {
				plc.alive = ONLINE;
				var msg = 'Reply from ' + plc.addr + ': response time=' + ms;
				self.emit('status', msg);
			}
			
		});
	}
};

// extend the EventEmitter class using our class
util.inherits(Ping, EventEmitter);

// we specify that this module is a refrence to the class
module.exports = Ping;