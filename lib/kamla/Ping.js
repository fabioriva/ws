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
		session.pingHost (target, function (error, target) {
			if (error) {
				//console.log (target + ': ' + error.toString());
				plc.alive = OFFLINE;
			}
			else {
				plc.alive = ONLINE;
			}
			self.emit('status');
		});
	}
};

// extend the EventEmitter class using our class
util.inherits(Ping, EventEmitter);

// we specify that this module is a refrence to the class
module.exports = Ping;