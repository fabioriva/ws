var app = require('http').createServer()
, sio = require('socket.io').listen(app)
, utility = require('./Tools')
, Server = require('./Server.js')
, Client = require('./Client.js')
, Ping = require('./Ping.js');

var ws_device = require('./Device.js');
//var ws_el = require('./Elevator.js');
//var ws_sh = require('./Shuttle.js');
var ws_motors = require('./Motors.js');
var ws_io = require('./I_O.js');
var ws_map = require('./Map.js');

var alarms = require('./Alarm.js');
var logs = require('./Log.js');
var events = require('./Event.js');
var statistics = require('./Statistics.js');

sio.set('log', 0)	// socket.io log level
var HTTP = 3003;	// socket.io server port
app.listen(process.env.PORT || HTTP);

/*
 * Const
 */

//var OFFLINE = 0;
//var ONLINE = 1;
var FALSE = 0;
var TRUE = 1;
var READ = 0x72;
var WRIT = 0x77;

// Total Data length
var LEN_DATA = 256;	// DB430

// Map
var STALL_NUMBER = 42;
var STALL_OFFSET = 8;
var LEN_MAP = STALL_NUMBER * STALL_OFFSET;

var plc = {
	type: '315-2 PN/DP',
	addr: '140.80.32.12',
	alive: FALSE,
	conn_1: {	// data service
		port: 2012,
		connected: FALSE,
		data_len: LEN_DATA
		},
	conn_2: {	// map service
		port: 2013,
		connected: FALSE,
		data_len: LEN_MAP
		},
	conn_3: {	// log service
		port: 4003,
		connected: FALSE,
		data_len: 0
		}
};

var db = {
	host: 'sotefinservice.com',
	user: 'webservice',
	password: 'h0savP6L',
	database: 'ws_arlozorov'
};

var network = new Ping (plc);

network.on('status', function (data) {
	//console.log(data);
	var obj = {
		ping: data,
		plc: plc
	};
	sio.of('/ws/comm').emit('status', obj);
});

/*
 * Client 1
 */
 /*
var el = new ws_alarms(1, 'Arlozorov', 'Asia/Jerusalem', 'Elevator', 1, 32);
el.getAlarm(db, 1, 32, function (rows) {
	for (var i in rows) {
		el.alarms.alarm[i].description = rows[i].alarm;
	}
});
var sh = new ws_alarms(2, 'Arlozorov', 'Asia/Jerusalem', 'Shuttle', 33, 64);
sh.getAlarm(db, 1, 32, function (rows) {
	for (var i in rows) {
		sh.alarms.alarm[i].description = rows[i].alarm;
	}
});
var eu = new ws_alarms(3, 'Arlozorov', 'Asia/Jerusalem', 'Outer', 65, 96);
eu.getAlarm(db, 1, 32, function (rows) {
	for (var i in rows) {
		eu.alarms.alarm[i].description = rows[i].alarm;
	}
});
*/
var wsdata = new Client (plc, plc.conn_1, 'arlozorov:tasks:data');

wsdata.on('connect', function(plc) {

	console.log('>>> Client connected to PLC server port', plc.conn_1.port, '>>>');
	var msg = {
		id : 'dummy_sio_id',
		rq : 'data:read',
		s7 : s7Msg(0x72, 'D', 430, 0, LEN_DATA, 0, 0)
	}
	wsdata.enqueueMsg(msg);
});

wsdata.on('recv', function(data) {

	sio.of('/ws/comm').emit('status2012', data.s7);

	var io1 = ws_io.readIo(00, 20, data.s7, ws_io.Rack_1);
	sio.of('/plc_io').emit('refresh:plcio1', { plcio: JSON.stringify(io1) });

	var io2 = ws_io.readIo(20, 6, data.s7, ws_io.Rack_2);
	sio.of('/plc_io').emit('refresh:plcio2', { plcio: JSON.stringify(io2) });

	//var racks = [io1, io2];
	//sio.of('/plc_io').emit('refresh:plcio', { plcio: JSON.stringify(racks) });

	var devices = ws_device.readDevices(26, 60, data.s7)
	sio.of('/devices').emit('refresh:devices', { devices: JSON.stringify(devices) });

	//var al_el = el.sendAlarms(el.setAlarms(42, 4, data.s7, el.alarms));
	//var al_sh = sh.sendAlarms(sh.setAlarms(62, 4, data.s7, sh.alarms));
	//var al_eu = eu.sendAlarms(eu.setAlarms(82, 4, data.s7, eu.alarms));
	//var alarms = [al_el, al_sh, al_eu];
	//sio.of('/ws/alarm').emit('refresh:alarms', { alarms: alarms });

	//var shuttles = ws_sh.readShuttles(106, 176, data.s7);
	//sio.of('/shuttle').emit('refresh:shuttles', { shuttles: JSON.stringify(shuttles) });

	var motors1 = ws_motors.readMotors1(106, 178, data.s7);
	sio.of('/motors').emit('refresh:motors-1', { motors: JSON.stringify(motors1) });

	var motors2 = ws_motors.readMotors2(178, 256, data.s7);
	sio.of('/motors').emit('refresh:motors-2', { motors: JSON.stringify(motors2) });

	var msg = {
		id : 'dummy_sio_id',
		rq : 'data:read',
		s7 : s7Msg(0x72, 'D', 430, 0, LEN_DATA, 0, 0)
	}
	wsdata.enqueueMsg(msg);
});

/*
 * Client 2
 */

var wsmap = new Client (plc, plc.conn_2, 'arlozorov:tasks:map');

wsmap.on('connect', function(plc) {

	console.log('>>> Client connected to PLC server port', plc.conn_2.port, '>>>');
});

wsmap.on('recv', function(data) {

	sio.of('/ws/comm').emit('status2013', data.s7);

	/*
	var map = ws_map.mapRead(0, LEN_MAP, data.s7);
	sio.of('/map').emit('refresh:map', { map: JSON.stringify(map) });

	var statistics = [map.spaces, map.free, map.busy, map.lock];
	sio.of('/map/statistics').emit('refresh:map_stat', { map: JSON.stringify(statistics) });
	*/
	switch (data.rq) {
		case 'map:read':
		case 'map:read:edit':
			var map = ws_map.mapRead(0, LEN_MAP, data.s7);
			//sio.of('/map').to(data.id).emit('refresh:map', { map: JSON.stringify(map) }); v1.0
			sio.of('/map').socket(data.id).emit(data.rq, { map: JSON.stringify(map) });
			break;
		case 'map:size':
		case 'map:size:edit':
			var map = ws_map.mapSize(0, 0, data.s7);
			//sio.of('/map').to(data.id).emit('refresh:map', { map: JSON.stringify(map) }); v1.0
			sio.of('/map').socket(data.id).emit(data.rq, { map: JSON.stringify(map) });
			break;
		// case 'map:statistics':
			// var map = ws_map.mapRead(0, LEN_MAP, data.s7);
			// var stat = [map.spaces, map.free, map.busy, map.lock];
			// sio.of('/map/statistics').socket(data.id).emit(data.rq, { map: JSON.stringify(stat) });
			// break;
		case 'statistics:map':
		var time = process.hrtime();

			statistics.mapOccupancy(data.s7, function(statistics_){
				var diff = process.hrtime(time);
				console.log('benchmark took %d nanoseconds', diff[0] * 1e9 + diff[1]);
				sio.of('/statistics').socket(data.id).emit(data.rq, { map: JSON.stringify(statistics_) });
			});
			break;
	}

});

/*
 * Log server
 */

var wslog = new Server (plc, plc.conn_3);

wslog.on('recv', function(data) {

	sio.of('/ws/comm').emit('status4003', data);

	var log = {
		stx: utility.BytesToInt(data[0], data[1]),
		system: utility.BytesToInt(data[2], data[3]),
		device: utility.BytesToInt(data[4], data[5]),
		mode: utility.BytesToInt(data[6], data[7]),
		operation: utility.BytesToInt(data[8], data[9]),
		stall: utility.BytesToInt(data[10], data[11]),
		card: utility.BytesToInt(data[12], data[13]),
		size: utility.BytesToInt(data[14], data[15]),
		alarm: utility.BytesToInt(data[16], data[17]),
		event: utility.BytesToInt(data[18], data[19]),
		date: utility.getPlcDate(utility.BytesToInt(data[20], data[21])),
		time: utility.getPlcTime(utility.BytesToLong(data[22], data[23], data[24], data[25])),
		elapsed: utility.BytesToLong(data[26], data[27], data[28], data[29]),
		etx: utility.BytesToInt(data[30], data[31])
	};

	// Log
	if (log.stx == 0x264) {
		logs.historyLog(db, log, function (msg) {
			sio.of('/ws/log').emit('log', msg);
			// Alarm Set
			if (log.operation == 93) {
				alarms.setAlarm(db, log, function (msg) {
					//console.log(msg);
					sio.of('/ws/alarm').emit('event', msg);
				});
				alarms.countAlarm(1, function (count) {
					sio.of('/ws/alarm').emit('count', count);
				});
			}
			// Alarm Reset
			if (log.operation == 94) {
				//alarms.resetAlarm(log);
				alarms.resetAlarm(db, log, function (msg) {
					//console.log(msg);
					sio.of('/ws/alarm').emit('event', msg);
				});
				alarms.countAlarm(1, function (count) {
					sio.of('/ws/alarm').emit('count', count);
				});
			}
			// Update Map
			if (log.operation == 95 || log.operation == 96 || log.operation == 97 || log.operation == 98 || log.operation == 99) {
				var msg = {
					id : 'dummy_sio_id',
					rq : 'map:read',
					s7 : s7Msg(0x72, 'D', 440, 2, LEN_MAP, 0, 0)
				};
				wsmap.enqueueMsg(msg);
			}
		});
	}
	// Diag
	if (log.stx == 0x26d) {
		events.eventLog(log, function (msg) {
			sio.of('/ws/event').emit('event', msg);
		});
	}
});

/*
 *	socket.io namespaces
 */

 var sio_comm = sio
	.of('/ws/comm')
	.on('connection', function (socket) {

	});

 var sio_log = sio
	.of('/ws/log')
	.on('connection', function (socket) {

	});

 var sio_event = sio
	.of('/ws/event')
	.on('connection', function (socket) {

		events.getLog(1, function (data) {
			data.forEach(function (key) {
				var msg = JSON.parse(key);
				sio.of('/ws/event').socket(socket.id).emit('event', msg);
			});
		});
	});

 var sio_alarm = sio
	.of('/ws/alarm')
	.on('connection', function (socket) {

		alarms.getAlarm(1, function (data) {
			data.forEach(function (key) {
				var msg = JSON.parse(key);
				sio.of('/ws/alarm').socket(socket.id).emit('event', msg);
			});
		});

		alarms.countAlarm(1, function (count) {
			sio.of('/ws/alarm').socket(socket.id).emit('count', count);
		});

		// alarms.getAlarm(1, function (data) {
		// 	// console.log('Alarm Count:\n', data.length);
		// 	//sio.of('/ws/alarm').socket(socket.id).emit('count', data.length);
		// 	data.forEach(function (key) {
		// 		// console.log('Key :', key);
		// 		var msg = key;
		// 		sio.of('/ws/alarm').socket(socket.id).emit('event', msg);
		// 	});
		// });
	});

 var sio_alarm_stat = sio
	.of('/alarm/statistics')
	.on('connection', function (socket) {

		// query 1
		require('./AlarmStatistics.js').alarmStatistics(db, 8, function (data) {
			console.log('data :\n', data);
			sio.of('/alarm/statistics').emit('refresh:query_01', { query: JSON.stringify(data) });
		});
		// query 2
		require('./AlarmStatistics.js').alarmStatistics(db, 9, function (data) {
			console.log('data :\n', data);
			sio.of('/alarm/statistics').emit('refresh:query_02', { query: JSON.stringify(data) });
		});

		// var data = [120, 60, 30, 30];
		// sio.of('/alarm/statistics').emit('refresh:alarm_stat', { data: JSON.stringify(data) });
	});

var sio_devices = sio
	.of('/devices')
	.on('connection', function (socket) {

		socket.emit('paint:devices', {
			devices: JSON.stringify(ws_device.Devices)
		});

	});

var sio_motors = sio
	.of('/motors')
	.on('connection', function (socket) {

	});
/*
var sio_elevator = sio
	.of('/elevator')
	.on('connection', function (socket) {

	});

var sio_shuttle = sio
	.of('/shuttle')
	.on('connection', function (socket) {

	});
*/
var sio_map = sio
	.of('/map')
	.on('connection', function (socket) {

		socket.emit('map:paint', {
			map: JSON.stringify(ws_map.Map)
		});
		socket.on('map:read', function (data) {
			switch (data.level) {

				case 1:
					var msg = {
					id : socket.id,
					rq : 'map:read',
					s7 : s7Msg(0x72, 'D', 440, 2, LEN_MAP, 0, 0)
					}
					wsmap.enqueueMsg(msg);
					break;
				default:
					var msg = {
					id : socket.id,
					rq : 'map:read',
					s7 : s7Msg(0x72, 'D', 440, 2, LEN_MAP, 0, 0)
					}
					wsmap.enqueueMsg(msg);
					break;
			}
		});
	});

var sio_plc_io = sio
	.of('/plc_io')
	.on('connection', function (socket) {

		socket.emit('paint:plcio-io1', {
			plcio: JSON.stringify(ws_io.Rack_1)
		});
		socket.emit('paint:plcio-io2', {
			plcio: JSON.stringify(ws_io.Rack_2)
		});


	});

var sio_statistics = sio
	.of('/statistics')
	.on('connection', function (socket) {

		socket.on('statistics:map', function () {
			var msg = {
				id : socket.id,
				rq : 'statistics:map',
				s7 : s7Msg(0x72, 'D', 10, 2, 84, 0, 0)
			}
			wsmap.enqueueMsg(msg);
		});

		statistics.operationDaily(db, null, function(data) {
			socket.emit('statistics:daily', {
				//chart_data: JSON.stringify(data)	// non è JSON compliant
				chart_data: data
			});
		});

		statistics.operationWeekly(db, null, function(data) {
			socket.emit('statistics:weekly', {
				chart_data: data
			});
		});

		statistics.operationMonthly(db, null, function(data) {
			socket.emit('statistics:monthly', {
				chart_data: data
			});
		});

		statistics.alarmWeekly(db, null, function(data) {
			socket.emit('statistics:alarm:weekly', {
				chart_data: data
			});
		});

	});

sio.sockets.on('connection', function (socket) {

    console.log('socket.io : client id ' + socket.id + ' connected on port ' + (process.env.PORT || HTTP));
});

/* S7 message */

function s7Msg(Mode, Type, Db, byteIni, byteLen, Buffer1, Buffer2) {

	var db  = [0, 0], ini = [0, 0], len = [0, 0], buf1  = [0, 0], buf2  = [0, 0];
	Db = utility.IntToBytes(Db, db);
	byteIni = utility.IntToBytes(byteIni, ini);
	byteLen = utility.IntToBytes(byteLen, len);
	Buffer1 = utility.IntToBytes(Buffer1, buf1);
	Buffer2 = utility.IntToBytes(Buffer2, buf2);
	//console.log(buf1, buf2);
	buffer = new Buffer (16);
	switch (Type) {

		case 'D':
			buffer.writeUInt8(0x02, 0);			// STX
			buffer.writeUInt8(0x10, 1);			// Msg len
			buffer.writeUInt8(Mode, 2);			// Mode
			buffer.writeUInt8(0x84, 3);			// Type E:0x81, A:0x82, M:0x83, D:0x84
			buffer.writeUInt8(db[1], 4);		// Db nr
			buffer.writeUInt8(db[0], 5);		// Db nr
			buffer.writeUInt8(ini[1], 6);		// Byte init
			buffer.writeUInt8(ini[0], 7);		// Byte init
			buffer.writeUInt8(len[1], 8);		// Byte len
			buffer.writeUInt8(len[0], 9);		// Byte len
			buffer.writeUInt8(buf1[1], 10);		// Buffer
			buffer.writeUInt8(buf1[0], 11);		// Buffer
			buffer.writeUInt8(buf2[1], 12);		// Buffer
			buffer.writeUInt8(buf2[0], 13);		// Buffer
			buffer.writeUInt8(0x00, 14);		//
			buffer.writeUInt8(0x03, 15);		// ETX

	}
	return buffer;
}
