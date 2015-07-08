var app = require('http').createServer()
, sio = require('socket.io').listen(app)
, utility = require('./Tools')
, Server = require('./Server.js')
, Client = require('./Client.js')
, Ping = require('./Ping.js');

var ws_device = require('./Device.js');
var ws_el = require('./Elevator.js');
var ws_sh = require('./Shuttle.js');
var ws_io = require('./I_O.js');
var ws_map = require('./Map.js');
var ws_messages = require('./Log.js');
var ws_alarms = require('./Alarm.js');

var statistics = require('./Statistics.js');

sio.set('log', 0)	// socket.io log level
var HTTP = 3002;	// socket.io server port
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
var MAP = 0x6d;

// IO
var LEN_IO_EL = 18;
var LEN_IO_SH = 8;
var LEN_IO = 150;
// Device
var DEVICE = 3 + 12;
var DEVICE_OFFSET = 16;
var QUEUE = 40;
var LEN_DEVICE = (( DEVICE ) * DEVICE_OFFSET ) + QUEUE;
// Elevator
var EL = 3;
var EL_OFFSET = 50;
var LEN_EL = ( EL * EL_OFFSET );
// Alarm EL
var AL = 3;
var AL_OFFSET = 4;
var LEN_AL = ( AL * AL_OFFSET );
// Shuttle
var SH = 12;
var SH_OFFSET = 44;
var LEN_SH = ( SH * SH_OFFSET );
// Alarm SH
var AL_SH = 12;
var AL_SH_OFFSET = 4;
var LEN_AL_SH = ( AL_SH * AL_SH_OFFSET );
// Data
var LEN_DATA = LEN_IO + LEN_DEVICE + LEN_EL + LEN_AL + LEN_SH + LEN_AL_SH;	// DB430 : 592 + 528(LEN_SH) + 48(LEN_AL_SH) bytes

//console.log(LEN_DATA, LEN_IO, LEN_DEVICE, LEN_EL, LEN_AL);

// Map
var STALL_NUMBER = 912;
var STALL_OFFSET = 8;
var LEN_MAP = STALL_NUMBER * STALL_OFFSET;
var STALL_LEVEL = 152;
var LEN_MAP_LEVEL = STALL_LEVEL * STALL_OFFSET;

var plc = {
	type: '315-2 PN/DP',
	addr: '140.80.25.12',
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
		port: 4002,
		connected: FALSE,
		data_len: 0
		}
};

var db = {
	host: 'sotefinservice.com',
	user: 'webservice',
	password: 'h0savP6L',
	database: 'ws_kamla'
};

var network = new Ping (plc);

network.on('status', function () {
	//console.log('[ From Ping.js ]', plc.type, plc.addr, plc.alive, plc.conn_1.port, plc.conn_1.connected, plc.conn_2.port, plc.conn_2.connected, plc.conn_3.port, plc.conn_3.connected );
	sio.of('/ws/comm').emit('status', plc);
});

/*
 * Client 1
 */
var el1 = new ws_alarms(1, 'Right Side', 'Elevator 1', 1, 32);
el1.getAlarm(1, 32, function (rows) {	
	for (var i in rows) {
		el1.alarms.alarm[i].description = rows[i].alarm;
	}
});
var el2 = new ws_alarms(2, 'Right Side', 'Elevator 2', 1, 32);
el2.getAlarm(1, 32, function (rows) {	
	for (var i in rows) {
		el2.alarms.alarm[i].description = rows[i].alarm;
	}
});
var el3 = new ws_alarms(3, 'Right Side', 'Elevator 3', 1, 32);
el3.getAlarm(1, 32, function (rows) {	
	for (var i in rows) {
		el3.alarms.alarm[i].description = rows[i].alarm;
	}
});

var sh01 = new ws_alarms(11, 'Right Side', 'Shuttle 1', 33, 64);
sh01.getAlarm(33, 64, function (rows) {	
	for (var i in rows) {
		sh01.alarms.alarm[i].description = rows[i].alarm;
	}
});
var sh02 = new ws_alarms(12, 'Right Side', 'Shuttle 2', 33, 64);
sh02.getAlarm(33, 64, function (rows) {	
	for (var i in rows) {
		sh02.alarms.alarm[i].description = rows[i].alarm;
	}
});
var sh03 = new ws_alarms(13, 'Right Side', 'Shuttle 3', 33, 64);
sh03.getAlarm(33, 64, function (rows) {	
	for (var i in rows) {
		sh03.alarms.alarm[i].description = rows[i].alarm;
	}
});
var sh04 = new ws_alarms(14, 'Right Side', 'Shuttle 4', 33, 64);
sh04.getAlarm(33, 64, function (rows) {	
	for (var i in rows) {
		sh04.alarms.alarm[i].description = rows[i].alarm;
	}
});
var sh05 = new ws_alarms(15, 'Right Side', 'Shuttle 5', 33, 64);
sh05.getAlarm(33, 64, function (rows) {	
	for (var i in rows) {
		sh05.alarms.alarm[i].description = rows[i].alarm;
	}
});
var sh06 = new ws_alarms(16, 'Right Side', 'Shuttle 6', 33, 64);
sh06.getAlarm(33, 64, function (rows) {	
	for (var i in rows) {
		sh06.alarms.alarm[i].description = rows[i].alarm;
	}
});
var sh07 = new ws_alarms(17, 'Right Side', 'Shuttle 7', 33, 64);
sh07.getAlarm(33, 64, function (rows) {	
	for (var i in rows) {
		sh07.alarms.alarm[i].description = rows[i].alarm;
	}
});
var sh08 = new ws_alarms(18, 'Right Side', 'Shuttle 8', 33, 64);
sh08.getAlarm(33, 64, function (rows) {	
	for (var i in rows) {
		sh08.alarms.alarm[i].description = rows[i].alarm;
	}
});
var sh09 = new ws_alarms(19, 'Right Side', 'Shuttle 9', 33, 64);
sh09.getAlarm(33, 64, function (rows) {	
	for (var i in rows) {
		sh09.alarms.alarm[i].description = rows[i].alarm;
	}
});
var sh10 = new ws_alarms(20, 'Right Side', 'Shuttle 10', 33, 64);
sh10.getAlarm(33, 64, function (rows) {	
	for (var i in rows) {
		sh10.alarms.alarm[i].description = rows[i].alarm;
	}
});
var sh11 = new ws_alarms(21, 'Right Side', 'Shuttle 11', 33, 64);
sh11.getAlarm(33, 64, function (rows) {	
	for (var i in rows) {
		sh11.alarms.alarm[i].description = rows[i].alarm;
	}
});
var sh12 = new ws_alarms(22, 'Right Side', 'Shuttle 12', 33, 64);
sh12.getAlarm(33, 64, function (rows) {	
	for (var i in rows) {
		sh12.alarms.alarm[i].description = rows[i].alarm;
	}
});

var wsdata = new Client (plc, plc.conn_1, 'kamla_right:tasks:data');

wsdata.on('connect', function() {
	//console.log('client connected!');
	//wsdata.enqueueMsg(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0, 0));
	console.log('>>> Client connected to PLC server port', plc.conn_1.port, '>>>');
	var msg = {
		id : 'dummy_sio_id',
		rq : 'data:read',
		s7 : s7Msg(0x72, 'D', 430, 0, LEN_DATA, 0, 0)
	}
	wsdata.enqueueMsg(msg);
});

wsdata.on('recv', function(data) {
	//console.log( '[ Webservice Data ] recv event');
	//console.log('from kamla.js: wsdata recv event:\n', data.id);
	//console.log('from kamla.js: wsdata recv event:\n', data.rq);
	//console.log('from kamla.js: wsdata recv event:\n', data.s7);
	
	var devices = ws_device.readDevices(150, LEN_DEVICE, data.s7)
	sio.of('/devices').emit('refresh:devices', { devices: JSON.stringify(devices) });
	
	var elevators = ws_el.readElevators(430, LEN_EL, data.s7);
	sio.of('/elevator').emit('refresh:elevators', { elevators: JSON.stringify(elevators) });
	
	var al_el1 = el1.sendAlarms(el1.setAlarms(580, AL_OFFSET, data.s7, el1.alarms));
	//sio.of('/ws/alarm').emit('refresh:alarms', { alarms: el1.sendAlarms(al_el1) });
	var al_el2 = el2.sendAlarms(el2.setAlarms(584, AL_OFFSET, data.s7, el2.alarms));
	//sio.of('/ws/alarm').emit('refresh:alarms', { alarms: el2.sendAlarms(al_el2) });
	var al_el3 = el2.sendAlarms(el3.setAlarms(588, AL_OFFSET, data.s7, el3.alarms));
	//sio.of('/ws/alarm').emit('refresh:alarms', { alarms: el3.sendAlarms(al_el3) });
	var al_el = [al_el1, al_el2, al_el3];
	sio.of('/ws/alarm').emit('refresh:alarms', { alarms: al_el });
	
	var shuttles = ws_sh.readShuttles(592, LEN_SH, data.s7);
	sio.of('/shuttle').emit('refresh:shuttles', { shuttles: JSON.stringify(shuttles) });
	
	var al_sh01 = sh01.sendAlarms(sh01.setAlarms(1120, AL_SH_OFFSET, data.s7, sh01.alarms));
	var al_sh02 = sh02.sendAlarms(sh02.setAlarms(1124, AL_SH_OFFSET, data.s7, sh02.alarms));
	var al_sh03 = sh03.sendAlarms(sh03.setAlarms(1128, AL_SH_OFFSET, data.s7, sh03.alarms));
	var al_sh04 = sh04.sendAlarms(sh04.setAlarms(1132, AL_SH_OFFSET, data.s7, sh04.alarms));
	var al_sh05 = sh05.sendAlarms(sh05.setAlarms(1136, AL_SH_OFFSET, data.s7, sh05.alarms));
	var al_sh06 = sh06.sendAlarms(sh06.setAlarms(1140, AL_SH_OFFSET, data.s7, sh06.alarms));
	var al_sh07 = sh07.sendAlarms(sh07.setAlarms(1144, AL_SH_OFFSET, data.s7, sh07.alarms));
	var al_sh08 = sh08.sendAlarms(sh08.setAlarms(1148, AL_SH_OFFSET, data.s7, sh08.alarms));
	var al_sh09 = sh09.sendAlarms(sh09.setAlarms(1152, AL_SH_OFFSET, data.s7, sh09.alarms));
	var al_sh10 = sh10.sendAlarms(sh10.setAlarms(1156, AL_SH_OFFSET, data.s7, sh10.alarms));
	var al_sh11 = sh11.sendAlarms(sh11.setAlarms(1160, AL_SH_OFFSET, data.s7, sh11.alarms));
	var al_sh12 = sh12.sendAlarms(sh12.setAlarms(1164, AL_SH_OFFSET, data.s7, sh12.alarms));
	var al_sh = [al_sh01, al_sh02, al_sh03, al_sh04, al_sh05, al_sh06, al_sh07, al_sh08, al_sh09, al_sh10, al_sh11, al_sh12];
	sio.of('/ws/alarm').emit('refresh:alarms', { alarms: al_sh });
	
	/*
	var al1 = al_el1.readAlarms(580, AL_OFFSET, 1, data);
	sio.of('/ws/alarm').emit('refresh:alarms', { alarms: al1 });//JSON.stringify(alarms) });
	var al2 = al_el2.readAlarms(584, AL_OFFSET, 2, data);
	sio.of('/ws/alarm').emit('refresh:alarms', { alarms: al2 });
	var al3 = al_el3.readAlarms(588, AL_OFFSET, 3, data);
	sio.of('/ws/alarm').emit('refresh:alarms', { alarms: al3 });
	*/
	var io_el1 = ws_io.readIo(00, LEN_IO_EL, data.s7, ws_io.Rack_EL1);
	var io_el2 = ws_io.readIo(18, LEN_IO_EL, data.s7, ws_io.Rack_EL2);
	var io_el3 = ws_io.readIo(36, LEN_IO_EL, data.s7, ws_io.Rack_EL3);
	var racks_el = [io_el1, io_el2, io_el3];
	sio.of('/plc_io/el').emit('refresh:plcio-el', { plcio: racks_el });
	
	var io_sh01 = ws_io.readIo(54, LEN_IO_SH, data.s7, ws_io.Rack_SH01);
	var io_sh02 = ws_io.readIo(62, LEN_IO_SH, data.s7, ws_io.Rack_SH02);
	var io_sh03 = ws_io.readIo(70, LEN_IO_SH, data.s7, ws_io.Rack_SH03);
	var io_sh04 = ws_io.readIo(78, LEN_IO_SH, data.s7, ws_io.Rack_SH04);
	var io_sh05 = ws_io.readIo(86, LEN_IO_SH, data.s7, ws_io.Rack_SH05);
	var io_sh06 = ws_io.readIo(94, LEN_IO_SH, data.s7, ws_io.Rack_SH06);
	var io_sh07 = ws_io.readIo(102, LEN_IO_SH, data.s7, ws_io.Rack_SH07);
	var io_sh08 = ws_io.readIo(110, LEN_IO_SH, data.s7, ws_io.Rack_SH08);
	var io_sh09 = ws_io.readIo(118, LEN_IO_SH, data.s7, ws_io.Rack_SH09);
	var io_sh10 = ws_io.readIo(126, LEN_IO_SH, data.s7, ws_io.Rack_SH10);
	var io_sh11 = ws_io.readIo(134, LEN_IO_SH, data.s7, ws_io.Rack_SH11);
	var io_sh12 = ws_io.readIo(142, LEN_IO_SH, data.s7, ws_io.Rack_SH12);
	var racks_sh = [io_sh01, io_sh02, io_sh03, io_sh04, io_sh05, io_sh06, io_sh07, io_sh08, io_sh09, io_sh10, io_sh11, io_sh12];
	sio.of('/plc_io/sh').emit('refresh:plcio-sh', { plcio: racks_sh });
	
	//if (plc.queue.length == 0) {
		//var msg = s7Msg(READ, 'D', 430, 0, LEN_DATA, 0, 0);
		//wsdata.enqueueMsg(msg);
	//}
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

var wsmap = new Client (plc, plc.conn_2, 'kamla_right:tasks:map');

wsmap.on('connect', function() {
	console.log('>>> Client connected to PLC server port', plc.conn_2.port, '>>>');
});

wsmap.on('recv', function(data) {
	//console.log( '[ Webservice Map ] recv event');
	
	switch (data.rq) {
		case 'map:read':
		case 'map:read:edit':
			var map = ws_map.mapRead(0, LEN_MAP, data.s7);
			//sio.of('/map').to(data.id).emit(data.rq, { map: JSON.stringify(map) }); v1.0	
			sio.of('/map').socket(data.id).emit(data.rq, { map: JSON.stringify(map) });
			break;
		case 'map:size':
		case 'map:size:edit':
			var map = ws_map.mapSize(0, 0, data.s7);
			//sio.of('/map').to(data.id).emit(data.rq, { map: JSON.stringify(map) }); v1.0	
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
	/*
	var map = ws_map.readMap(0, LEN_MAP, data.s7);
	sio.of('/map').emit('refresh:map', { map: JSON.stringify(map) });	
	//sio.of('/map').emit('refresh:map_B2', { map_B2: JSON.stringify(map.levels[0]) });
	
	var statistics = [map.spaces, map.free, map.busy, map.lock];
	sio.of('/map/statistics').emit('refresh:map_stat', { map: JSON.stringify(statistics) });
	*/
});

/*
 * Log server
 */
 
var wslog = new Server (plc, plc.conn_3);

wslog.on('recv', function(data) {
	//console.log( '[ Webservice Log ] recv event');
	var stx = utility.BytesToInt(data[0], data[1]);
	switch (stx) {
		case 0x264 :
			ws_messages.historyLog(data, function (log) {
				//console.log('From historyLog : ', log);
				sio.of('/ws/log').emit('log', { log: log });
			});
			break;
				
		case 0x26d :
			//var log = diagnosticLog(data);
			break;	    
	}
	var op = utility.BytesToInt(data[8], data[9]);
	switch (op) {
		case 95 :
		case 96 :
			//wsmap.enqueueMsg(s7Msg(READ, 'D', 440, 2, LEN_MAP, 0, 0));
			/*statistics.operationDaily(db, null, function(data) {
				sio.of('/statistics').emit('statistics:daily', {
					chart_data: data
				});
			});*/
			break;
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
	
 var sio_alarm = sio
	.of('/ws/alarm')
	.on('connection', function (socket) {
	
		//wsdata.enqueueMsg(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0, 0));
	});
 
var sio_devices = sio
	.of('/devices')
	.on('connection', function (socket) {
	
		socket.emit('paint:devices', {
			devices: JSON.stringify(ws_device.Devices)
		});
		
		//wsdata.enqueueMsg(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0, 0));
	});
	
var sio_elevator = sio
	.of('/elevator')
	.on('connection', function (socket) {
		
		//wsdata.enqueueMsg(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0, 0));
	});
	
var sio_shuttle = sio
	.of('/shuttle')
	.on('connection', function (socket) {
		
		//wsdata.enqueueMsg(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0, 0));
	});
	
var sio_map = sio
	.of('/map')
	.on('connection', function (socket) {
	
		socket.emit('map:paint', {
			map: JSON.stringify(ws_map.Map)
		});
		
		socket.on('map:read', function () {
			var msg = {
				id : socket.id,
				rq : 'map:read',
				s7 : s7Msg(0x72, 'D', 440, 2, LEN_MAP, 0, 0)
			}
			wsmap.enqueueMsg(msg);
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
				s7 : s7Msg(0x72, 'D', 80, 2, 1824, 0, 0)
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
		
		/*socket.emit('paint:map', {
			map: JSON.stringify(ws_map.Map)
		});
		socket.on('update:map', function () {
			var msg = s7Msg(READ, 'D', 440, 2, LEN_MAP, 0, 0);
			wsmap.enqueueMsg(msg);
		});
		socket.on('edit:map', function (data) {
			var o = JSON.parse(data.data);
			//console.log('Edit stall ' + o.nr + ' with reference ' + o.value);
			var msg = s7Msg(MAP, 'D', 10, 0, 0, o.nr, o.value);
			wsmap.enqueueMsg(msg);
		});*/
		
		//wsmap.enqueueMsg(s7Msg(READ, 'D', 440, 2, LEN_MAP, 0, 0));
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
		//socket.on('update:map_stat', function () {
			//var msg = s7Msg(READ, 'D', 440, 2, LEN_MAP, 0, 0);
			//wsmap.sendPlc(msg);
			//wsmap.enqueueMsg(msg);
		//});
		
		//wsmap.enqueueMsg(s7Msg(READ, 'D', 440, 2, LEN_MAP, 0, 0));	
	});
 
var sio_plc_io_el = sio
	.of('/plc_io/el')
	.on('connection', function (socket) {
	
		socket.emit('paint:plcio-el1', {
			plcio: JSON.stringify(ws_io.Rack_EL1)
		});	
		socket.emit('paint:plcio-el2', {
			plcio: JSON.stringify(ws_io.Rack_EL2)
		});	
		socket.emit('paint:plcio-el3', {
			plcio: JSON.stringify(ws_io.Rack_EL3)
		});
		
		//wsdata.enqueueMsg(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0, 0));	
	});
	
var sio_plc_io_sh = sio
	.of('/plc_io/sh')
	.on('connection', function (socket) {
	
		socket.emit('paint:plcio-sh01', {
			plcio: JSON.stringify(ws_io.Rack_SH01)
		});
		socket.emit('paint:plcio-sh02', {
			plcio: JSON.stringify(ws_io.Rack_SH02)
		});
		socket.emit('paint:plcio-sh03', {
			plcio: JSON.stringify(ws_io.Rack_SH03)
		});
		socket.emit('paint:plcio-sh04', {
			plcio: JSON.stringify(ws_io.Rack_SH04)
		});
		socket.emit('paint:plcio-sh05', {
			plcio: JSON.stringify(ws_io.Rack_SH05)
		});
		socket.emit('paint:plcio-sh06', {
			plcio: JSON.stringify(ws_io.Rack_SH06)
		});
		socket.emit('paint:plcio-sh07', {
			plcio: JSON.stringify(ws_io.Rack_SH07)
		});
		socket.emit('paint:plcio-sh08', {
			plcio: JSON.stringify(ws_io.Rack_SH08)
		});
		socket.emit('paint:plcio-sh09', {
			plcio: JSON.stringify(ws_io.Rack_SH09)
		});
		socket.emit('paint:plcio-sh10', {
			plcio: JSON.stringify(ws_io.Rack_SH10)
		});
		socket.emit('paint:plcio-sh11', {
			plcio: JSON.stringify(ws_io.Rack_SH11)
		});
		socket.emit('paint:plcio-sh12', {
			plcio: JSON.stringify(ws_io.Rack_SH12)
		});
		
		//wsdata.enqueueMsg(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0, 0));
	});

var sio_statistics = sio
	.of('/statistics')
	.on('connection', function (socket) {

		socket.on('statistics:map', function () {
			var msg = {
				id : socket.id,
				rq : 'statistics:map',
				s7 : s7Msg(0x72, 'D', 10, 2, 1824, 0, 0)
			}
			wsmap.enqueueMsg(msg);
		});	
		
		statistics.operationDaily(db, 2, null, function(data) {
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

/*
 * S7 message 
 */
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
