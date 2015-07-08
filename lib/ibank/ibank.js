var app = require('http').createServer()
, sio = require('socket.io').listen(app)
, utility = require('./Tools')
, Server = require('./Server.js')
, Client = require('./Client.js')
, Ping = require('./Ping.js');

var ws_alarms = require('./Alarm.js');
var ws_device = require('./Device.js');
//var ws_el = require('./Elevator.js');
//var ws_sh = require('./Shuttle.js');
var ws_io = require('./Io.js');
var ws_map = require('./Map.js');
var ws_messages = require('./Log.js');

var statistics = require('./Statistics.js');

sio.set('log', 0)	// socket.io log level
var HTTP = 3004;	// socket.io server port
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
var LEN_DATA = 172;	// DB430

var AL_OFFSET = 4;

// Map
var STALL_NUMBER = 114;
var STALL_OFFSET = 8;
var LEN_MAP = STALL_NUMBER * STALL_OFFSET;

var plc = {
	type: '315-2 PN/DP',
	addr: '140.80.4.2',
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
		port: 4004,
		connected: FALSE,
		data_len: 0
		}
};

var db = {
	host: 'sotefinservice.com',
	user: 'webservice',
	password: 'h0savP6L',
	database: 'ws_ibank'
};

var network = new Ping (plc);

network.on('status', function () {
	//console.log('[ From Ping.js ]', plc.type, plc.addr, plc.alive, plc.conn_1.port, plc.conn_1.connected, plc.conn_2.port, plc.conn_2.connected, plc.conn_3.port, plc.conn_3.connected );
	sio.of('/ws/comm').emit('status', plc);
});

/*
 * Client 1
 */

 var t1 = new ws_alarms(1, 'Iron Bank', 'Pacific/Auckland', 'Tower 1', 33, 64);
t1.getAlarm(db, 33, 64, function (rows) {	
	for (var i in rows) {
		t1.alarms.alarm[i].description = rows[i].alarm;
	}
});
var t2 = new ws_alarms(2, 'Iron Bank', 'Pacific/Auckland', 'Tower 2', 33, 64);
t2.getAlarm(db, 33, 64, function (rows) {	
	for (var i in rows) {
		t2.alarms.alarm[i].description = rows[i].alarm;
	}
});
var ga = new ws_alarms(3, 'Iron Bank', 'Pacific/Auckland', 'Virtual Garage A', 1, 32);
ga.getAlarm(db, 1, 32, function (rows) {	
	for (var i in rows) {
		ga.alarms.alarm[i].description = rows[i].alarm;
	}
});
var gb = new ws_alarms(4, 'Iron Bank', 'Pacific/Auckland', 'Virtual Garage B', 1, 32);
gb.getAlarm(db, 1, 32, function (rows) {	
	for (var i in rows) {
		gb.alarms.alarm[i].description = rows[i].alarm;
	}
});
var gc = new ws_alarms(5, 'Iron Bank', 'Pacific/Auckland', 'Virtual Garage C', 1, 32);
gc.getAlarm(db, 1, 32, function (rows) {	
	for (var i in rows) {
		gc.alarms.alarm[i].description = rows[i].alarm;
	}
});

var wsdata = new Client (plc, plc.conn_1, 'ibank:tasks:data');

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
	
	var devices = ws_device.readDevices(0, 0, data.s7)
	sio.of('/devices').emit('refresh:devices', { devices: JSON.stringify(devices) });
	
	var al_t1 = t1.sendAlarms(t1.setAlarms(100, AL_OFFSET, data.s7, t1.alarms));
	var al_t2 = t2.sendAlarms(t2.setAlarms(104, AL_OFFSET, data.s7, t2.alarms));
	var al_ga = ga.sendAlarms(ga.setAlarms(108, AL_OFFSET, data.s7, ga.alarms));
	var al_gb = gb.sendAlarms(gb.setAlarms(112, AL_OFFSET, data.s7, gb.alarms));
	var al_gc = gc.sendAlarms(gc.setAlarms(116, AL_OFFSET, data.s7, gc.alarms));
	var alarms = [al_t1, al_t2, al_ga, al_gb, al_gc];
	sio.of('/ws/alarm').emit('refresh:alarms', { alarms: alarms });
	
	var io_11 = ws_io.readIo(140, 12, data.s7, ws_io.Rack_M1);
	sio.of('/plc/io/1').emit('plc:io:r1:update', { plc_io: JSON.stringify(io_11) });	
	var io_12 = ws_io.readIo(152, 20, data.s7, ws_io.Rack_M2);
	sio.of('/plc/io/1').emit('plc:io:r2:update', { plc_io: JSON.stringify(io_12) });
	
	var io_21 = ws_io.readIo(120, 10, data.s7, ws_io.Rack_T1);
	sio.of('/plc/io/2').emit('plc:io:r1:update', { plc_io: JSON.stringify(io_21) });
	var io_22 = ws_io.readIo(130, 10, data.s7, ws_io.Rack_T2);
	sio.of('/plc/io/2').emit('plc:io:r2:update', { plc_io: JSON.stringify(io_22) });

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

var wsmap = new Client (plc, plc.conn_2, 'ibank:tasks:map');

wsmap.on('connect', function(plc) {
	
	console.log('>>> Client connected to PLC server port', plc.conn_2.port, '>>>');
});

wsmap.on('recv', function(data) {
	
	//console.log('from ipark.js: wsmap recv event:\n', data.id);
	//console.log('from ipark.js: wsmap recv event:\n', data.rq);
	//console.log('from ipark.js: wsmap recv event:\n', data.s7);
	
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
		case 'map:statistics':
			var map = ws_map.mapRead(0, LEN_MAP, data.s7);
			var stat = [map.spaces, map.free, map.busy, map.lock];
			sio.of('/map/statistics').socket(data.id).emit(data.rq, { map: JSON.stringify(stat) });
			break;	
		case 'statistics:map':
			statistics.mapOccupancy(data.s7, function(statistics_){
				console.log(statistics_);
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

	var stx = utility.BytesToInt(data[0], data[1]);
	switch (stx) {
		case 0x264 :
			ws_messages.historyLog(db, data, function (log) {
				sio.of('/ws/log').emit('log', { log: log });
			});
			break;
				
		case 0x26d :
			//var log = diagnosticLog(data);
			break;	    
	}	
});

/*
 *	socket.io namespaces
 */
 
var sio_comm = sio
	.of('/ws/comm');
//	.on('connection', function (socket) {
		
//	});
 
var sio_log = sio
	.of('/ws/log')
	.on('connection', function (socket) {
	
	});
	
var sio_alarm = sio
	.of('/ws/alarm')
	.on('connection', function (socket) {
	
	});
 
var sio_devices = sio
	.of('/devices')
	.on('connection', function (socket) {
	
		socket.emit('paint:devices', {
			devices: JSON.stringify(ws_device.Devices)
		});

	});
	
// var sio_elevator = sio
	// .of('/elevator')
	// .on('connection', function (socket) {
		
		// wsdata.enqueueMsg(new Buffer(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0)));
	// });
	
// var sio_shuttle = sio
	// .of('/shuttle')
	// .on('connection', function (socket) {
		
		// wsdata.enqueueMsg(new Buffer(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0)));
	// });
	
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
		
		socket.on('map:read:edit', function (data) {
			var o = JSON.parse(data.data);
			console.log('Edit stall ' + o.nr + ' with reference ' + o.value);
			var msg = {
				id : socket.id,
				rq : 'map:read:edit',
				s7 : s7Msg(0x6d, 'D', 440, 2, LEN_MAP, o.nr, o.value)
			}
			wsmap.enqueueMsg(msg);
		});
		
		socket.on('map:size', function (data) {
			var msg = {
				id : socket.id,
				rq : 'map:size',
				s7 : s7Msg(0x72, 'D', 83, 2, 228, 0, 0)
			}
			wsmap.enqueueMsg(msg);
		});
		
		socket.on('map:size:edit', function (data) {
			var o = JSON.parse(data.data);
			console.log('Edit stall ' + o.nr + ' with size ' + o.value);
			var msg = {
				id : socket.id,
				rq : 'map:size:edit',
				s7 : s7Msg(0x73, 'D', 80, 2, 1824, o.nr, o.value)
			}
			wsmap.enqueueMsg(msg);
		});
		
		/*socket.on('map:edit', function (data) {
			var o = JSON.parse(data.data);
			console.log('Edit stall ' + o.nr + ' with reference ' + o.value);
			//var msg = s7Msg(MAP, 'D', 10, 0, 0, o.nr, o.value);
			var msg = {
				id : socket.id,
				rq : 'map:edit',
				s7 : s7Msg(0x6d, 'D', 10, 0, 0, o.nr, o.value)
			}
			wsmap.enqueueMsg(msg);
		});*/
	});
	
var sio_map_stat = sio
	.of('/map/statistics')
	.on('connection', function (socket) {
	
		socket.on('map:statistics', function (data) {
			var msg = {
				id : socket.id,
				rq : 'map:statistics',
				s7 : s7Msg(0x72, 'D', 440, 2, LEN_MAP, 0, 0)
			}
			wsmap.enqueueMsg(msg);
		});	
	});
	
var sio_plc_io_1 = sio
	.of('/plc/io/1')
	.on('connection', function (socket) {
	
		socket.emit('plc:io:r1:paint', {
			plc_io: JSON.stringify(ws_io.Rack_M1)
		});	
		socket.emit('plc:io:r2:paint', {
			plc_io: JSON.stringify(ws_io.Rack_M2)
		});	
	});
	
var sio_plc_io_2 = sio
	.of('/plc/io/2')
	.on('connection', function (socket) {
	
		socket.emit('plc:io:r1:paint', {
			plc_io: JSON.stringify(ws_io.Rack_T1)
		});	
		socket.emit('plc:io:r2:paint', {
			plc_io: JSON.stringify(ws_io.Rack_T2)
		});
	});
	
var sio_statistics = sio
	.of('/statistics')
	.on('connection', function (socket) {
		
		socket.on('statistics:map', function () {
			var msg = {
				id : socket.id,
				rq : 'statistics:map',
				s7 : s7Msg(0x72, 'D', 10, 2, 228, 0, 0)
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
