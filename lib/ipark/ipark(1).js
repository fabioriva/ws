var app = require('http').createServer()
, sio = require('socket.io').listen(app)
, utility = require('./Tools')
, Server = require('./Server.js')
, Client = require('./Client.js')
, Ping = require('./Ping.js');


var ws_alarms = require('./Alarm.js');
var ws_device = require('./Device.js');
var ws_el = require('./Elevator.js');
var ws_sh = require('./Shuttle.js');
var ws_io = require('./Io.js');
var ws_map = require('./Map.js');
var ws_messages = require('./Log.js');

sio.set('log', 0)	// socket.io log level
var HTTP = 3005;	// socket.io server port
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

// Device
var DEVICE = 15;
var DEVICE_OFFSET = 16;
var QUEUE = 10 * 2;
var INI_DEVICE = 0
var LEN_DEVICE = ( DEVICE * DEVICE_OFFSET ) + QUEUE;

// Alarms
var AL = 15;
var AL_OFFSET = 4;
var INI_AL = 260;
var LEN_AL = ( AL * AL_OFFSET );

// I/O
var IO_EL = 10 * 4;
var IO_SH = 12 * 8;
var IO_EU = 27 * 3;
var INI_IO = 320;	
var LEN_IO = IO_EL + IO_SH + IO_EU;

// Total length (DB430)
var LEN_DATA = LEN_DEVICE + LEN_AL + LEN_IO;

// Map
var STALL_NUMBER = 256;
var STALL_OFFSET = 8;
var LEN_MAP = STALL_NUMBER * STALL_OFFSET;

var plc = {
	type: '315-2 PN/DP',
	addr: '140.80.35.3',
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
		port: 4005,
		connected: FALSE,
		data_len: 0
		}
};

var db = {
	host: 'sotefinservice.com',
	user: 'webservice',
	password: 'h0savP6L',
	database: 'ws_ipark'
};

var network = new Ping (plc);

network.on('status', function () {
	//console.log('[ From Ping.js ]', plc.type, plc.addr, plc.alive, plc.conn_1.port, plc.conn_1.connected, plc.conn_2.port, plc.conn_2.connected, plc.conn_3.port, plc.conn_3.connected );
	sio.of('/ws/comm').emit('status', plc);
});

/*
 * Client 1
 */
var el1 = new ws_alarms(1, 'I-Park', 'America/Sao_Paulo', 'Elevator 1', 1, 32);
el1.getAlarm(db, 1, 32, function (rows) {	
	for (var i in rows) {
		el1.alarms.alarm[i].description = rows[i].alarm;
	}
});
var el2 = new ws_alarms(2, 'I-Park', 'America/Sao_Paulo', 'Elevator 2', 33, 64);
el2.getAlarm(db, 1, 32, function (rows) {	
	for (var i in rows) {
		el2.alarms.alarm[i].description = rows[i].alarm;
	}
});
var el3 = new ws_alarms(3, 'I-Park', 'America/Sao_Paulo', 'Elevator 3', 65, 96);
el3.getAlarm(db, 1, 32, function (rows) {	
	for (var i in rows) {
		el3.alarms.alarm[i].description = rows[i].alarm;
	}
});
var el4 = new ws_alarms(4, 'I-Park', 'America/Sao_Paulo', 'Elevator 4', 97, 128);
el4.getAlarm(db, 1, 32, function (rows) {	
	for (var i in rows) {
		el4.alarms.alarm[i].description = rows[i].alarm;
	}
});
// var sh = new ws_alarms(2, 'I-Park', 'America/Sao_Paulo', 'Shuttle', 33, 64);
// sh.getAlarm(db, 1, 32, function (rows) {	
	// for (var i in rows) {
		// sh.alarms.alarm[i].description = rows[i].alarm;
	// }
// });
// var eu = new ws_alarms(3, 'I-Park', 'America/Sao_Paulo', 'Cabin', 65, 96);
// eu.getAlarm(db, 1, 32, function (rows) {	
	// for (var i in rows) {
		// eu.alarms.alarm[i].description = rows[i].alarm;
	// }
// });

var wsdata = new Client (plc, plc.conn_1);

wsdata.on('recv', function(data) {
	
	var devices = ws_device.readDevices(INI_DEVICE, LEN_DEVICE, data)
	sio.of('/devices').emit('refresh:devices', { devices: JSON.stringify(devices) });
	
	var al_el1 = el1.sendAlarms(el1.setAlarms(260, AL_OFFSET, data, el1.alarms));
	var al_el2 = el2.sendAlarms(el2.setAlarms(264, AL_OFFSET, data, el2.alarms));
	var al_el3 = el3.sendAlarms(el3.setAlarms(268, AL_OFFSET, data, el3.alarms));
	var al_el4 = el4.sendAlarms(el4.setAlarms(272, AL_OFFSET, data, el4.alarms));	
	//var al_sh = sh.sendAlarms(sh.setAlarms(276, AL_OFFSET, data, sh.alarms));
	//var al_eu = eu.sendAlarms(eu.setAlarms(308, AL_OFFSET, data, eu.alarms));
	var alarms = [al_el1, al_el2, al_el3, al_el4];//al_sh, al_eu];
	sio.of('/ws/alarm').emit('refresh:alarms', { alarms: alarms });
	
	/* I/O Elevator */
	var io01 = ws_io.readIo(320, 10, data, ws_io.Rack_el_1);
	var io02 = ws_io.readIo(330, 10, data, ws_io.Rack_el_2);
	var io03 = ws_io.readIo(340, 10, data, ws_io.Rack_el_3);
	var io04 = ws_io.readIo(350, 10, data, ws_io.Rack_el_4);
	var racks_el = [io01, io02, io03, io04];
	sio.of('/plc_io').emit('refresh:plcio_el', { plcio: racks_el });
	
	/* I/O Shuttle */
	var io11 = ws_io.readIo(360, 7, data, ws_io.Rack_sh_1);
	var io12 = ws_io.readIo(367, 4, data, ws_io.Rack_sh_2);
	sio.of('/plc_io_sh').emit('refresh:plcio_sh_01', { plcio: [io11, io12] })	
	var io21 = ws_io.readIo(372, 7, data, ws_io.Rack_sh_1);
	var io22 = ws_io.readIo(379, 4, data, ws_io.Rack_sh_2);
	sio.of('/plc_io_sh').emit('refresh:plcio_sh_02', { plcio: [io21, io22] })
	var io31 = ws_io.readIo(384, 7, data, ws_io.Rack_sh_1);
	var io32 = ws_io.readIo(391, 4, data, ws_io.Rack_sh_2);
	sio.of('/plc_io_sh').emit('refresh:plcio_sh_03', { plcio: [io31, io32] })
	var io41 = ws_io.readIo(396, 7, data, ws_io.Rack_sh_1);
	var io42 = ws_io.readIo(403, 4, data, ws_io.Rack_sh_2);
	sio.of('/plc_io_sh').emit('refresh:plcio_sh_04', { plcio: [io41, io42] })
	var io51 = ws_io.readIo(408, 7, data, ws_io.Rack_sh_1);
	var io52 = ws_io.readIo(415, 4, data, ws_io.Rack_sh_2);
	sio.of('/plc_io_sh').emit('refresh:plcio_sh_05', { plcio: [io51, io52] })
	var io61 = ws_io.readIo(420, 7, data, ws_io.Rack_sh_1);
	var io62 = ws_io.readIo(427, 4, data, ws_io.Rack_sh_2);
	sio.of('/plc_io_sh').emit('refresh:plcio_sh_06', { plcio: [io61, io62] })
	var io71 = ws_io.readIo(432, 7, data, ws_io.Rack_sh_1);
	var io72 = ws_io.readIo(439, 4, data, ws_io.Rack_sh_2);
	sio.of('/plc_io_sh').emit('refresh:plcio_sh_07', { plcio: [io71, io72] })
	var io81 = ws_io.readIo(444, 7, data, ws_io.Rack_sh_1);
	var io82 = ws_io.readIo(451, 4, data, ws_io.Rack_sh_2);
	sio.of('/plc_io_sh').emit('refresh:plcio_sh_08', { plcio: [io81, io82] })
	
	//var racks_sh = [io11, io12, io21, io22, io31, io32, io41, io42, io51, io52, io61, io62, io71, io72, io81, io82];
	//sio.of('/plc_io_sh').emit('refresh:plcio_sh', { plcio: racks_sh });

	/* I/O Cabin */
	var io_eu_11 = ws_io.readIo(456, 7, data, ws_io.Rack_eu_1);
	var io_eu_12 = ws_io.readIo(463, 4, data, ws_io.Rack_eu_2);
	var io_eu_13 = ws_io.readIo(467, 10, data, ws_io.Rack_eu_3);
	var io_eu_14 = ws_io.readIo(477, 6, data, ws_io.Rack_eu_4);
	sio.of('/plc_io_eu').emit('refresh:plcio_eu_01', { plcio: [io_eu_11, io_eu_12, io_eu_13, io_eu_14] })
	var io_eu_21 = ws_io.readIo(484, 7, data, ws_io.Rack_eu_1);
	var io_eu_22 = ws_io.readIo(491, 4, data, ws_io.Rack_eu_2);
	var io_eu_23 = ws_io.readIo(495, 10, data, ws_io.Rack_eu_3);
	var io_eu_24 = ws_io.readIo(505, 6, data, ws_io.Rack_eu_4);
	sio.of('/plc_io_eu').emit('refresh:plcio_eu_02', { plcio: [io_eu_21, io_eu_22, io_eu_23, io_eu_24] })
	var io_eu_31 = ws_io.readIo(512, 7, data, ws_io.Rack_eu_1);
	var io_eu_32 = ws_io.readIo(519, 4, data, ws_io.Rack_eu_2);
	var io_eu_33 = ws_io.readIo(523, 10, data, ws_io.Rack_eu_3);
	var io_eu_34 = ws_io.readIo(533, 6, data, ws_io.Rack_eu_4);
	sio.of('/plc_io_eu').emit('refresh:plcio_eu_03', { plcio: [io_eu_31, io_eu_32, io_eu_33, io_eu_34] })
	
	//if (plc.queue.length == 0) {
		var msg = new Buffer(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0));
		wsdata.enqueueMsg(msg);
	//}
});

/*
 * Client 2
 */

var wsmap = new Client (plc, plc.conn_2);

wsmap.on('recv', function(data) {
	
	var map = ws_map.readMap(0, LEN_MAP, data);
	sio.of('/map').emit('refresh:map', { map: JSON.stringify(map) });	
	
	var statistics = [map.spaces, map.free, map.busy, map.lock];
	sio.of('/map/statistics').emit('refresh:map_stat', { map: JSON.stringify(statistics) });
	
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
	
		wsdata.enqueueMsg(new Buffer(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0)));
	});
	
 var sio_alarm_stat = sio
	.of('/alarm/statistics')
	.on('connection', function (socket) {
	
		// query 1
		/*require('./AlarmStatistics.js').alarmStatistics(db, 8, function (data) {
			console.log('data :\n', data);
			sio.of('/alarm/statistics').emit('refresh:query_01', { query: JSON.stringify(data) });
		});*/
		// query 2
		/*require('./AlarmStatistics.js').alarmStatistics(db, 9, function (data) {
			console.log('data :\n', data);
			sio.of('/alarm/statistics').emit('refresh:query_02', { query: JSON.stringify(data) });
		});*/

		// var data = [120, 60, 30, 30];
		// sio.of('/alarm/statistics').emit('refresh:alarm_stat', { data: JSON.stringify(data) });
	});
 
var sio_devices = sio
	.of('/devices')
	.on('connection', function (socket) {
	
		socket.emit('paint:devices', {
			devices: JSON.stringify(ws_device.Devices)
		});
		
		wsdata.enqueueMsg(new Buffer(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0)));
		//var a = new Array(0x02, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03);
		//wsdata.enQueue(new Buffer(a));
		//wsdata.enQueue(new Buffer(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0)));
	});
	
var sio_elevator = sio
	.of('/elevator')
	.on('connection', function (socket) {
		
		wsdata.enqueueMsg(new Buffer(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0)));
	});
	
var sio_shuttle = sio
	.of('/shuttle')
	.on('connection', function (socket) {
		
		wsdata.enqueueMsg(new Buffer(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0)));
	});
	
var sio_map = sio
	.of('/map')
	.on('connection', function (socket) {
	
		socket.emit('paint:map', {
			map: JSON.stringify(ws_map.Map)
		});
		socket.on('update:map', function () {
			var msg = new Buffer(s7Msg(READ, 'D', 440, 2, LEN_MAP, 0));
			wsmap.enqueueMsg(msg);
		});
		socket.on('edit:map', function (data) {
			var o = JSON.parse(data.data);
			
			console.log('Edit stall ' + o.nr + ' with reference ' + o.value);
			//var b = e.nr * 2;			
			//var msg = new Buffer(s7Msg(WRIT, 'D', 10, b, 2, o.value));
			//wsmap.sendPlc(msg);
			
			var msg = new Buffer(s7Msg2(MAP, 'D', 10, 0, 0, o.nr, o.value));
			wsmap.enqueueMsg(msg);
		});
		
		wsmap.enqueueMsg(new Buffer(s7Msg(READ, 'D', 440, 2, LEN_MAP, 0)));
	});
	
var sio_map_stat = sio
	.of('/map/statistics')
	.on('connection', function (socket) {
	
		socket.on('update:map_stat', function () {
			var msg = new Buffer(s7Msg(READ, 'D', 440, 2, LEN_MAP, 0));
			//wsmap.sendPlc(msg);
			wsmap.enqueueMsg(msg);
		});
		
		wsmap.enqueueMsg(new Buffer(s7Msg(READ, 'D', 440, 2, LEN_MAP, 0)));	
	});
 
var sio_plc_io = sio
	.of('/plc_io')
	.on('connection', function (socket) {
	
		socket.emit('paint:plcio-io01', {
			plcio: JSON.stringify(ws_io.Rack_el_1)
		});	
		socket.emit('paint:plcio-io02', {
			plcio: JSON.stringify(ws_io.Rack_el_2)
		});	
		socket.emit('paint:plcio-io03', {
			plcio: JSON.stringify(ws_io.Rack_el_3)
		});
		socket.emit('paint:plcio-io04', {
			plcio: JSON.stringify(ws_io.Rack_el_4)
		});
		
		wsdata.enqueueMsg(new Buffer(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0)));	
	});
	
var sio_plc_io_sh = sio
	.of('/plc_io_sh')
	.on('connection', function (socket) {
		
		socket.emit('paint:plcio-io11', {
			plcio: JSON.stringify(ws_io.Rack_sh_1)
		});
		socket.emit('paint:plcio-io12', {
			plcio: JSON.stringify(ws_io.Rack_sh_2)
		});
				
		wsdata.enqueueMsg(new Buffer(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0)));	
	});
	
var sio_plc_io_eu = sio
	.of('/plc_io_eu')
	.on('connection', function (socket) {
		
		socket.emit('paint:plcio-io-eu-1', {
			plcio: JSON.stringify(ws_io.Rack_eu_1)
		});
		socket.emit('paint:plcio-io-eu-2', {
			plcio: JSON.stringify(ws_io.Rack_eu_2)
		});
		socket.emit('paint:plcio-io-eu-3', {
			plcio: JSON.stringify(ws_io.Rack_eu_3)
		});
		socket.emit('paint:plcio-io-eu-4', {
			plcio: JSON.stringify(ws_io.Rack_eu_4)
		});
		
		wsdata.enqueueMsg(new Buffer(s7Msg(READ, 'D', 430, 0, LEN_DATA, 0)));	
	});
	

sio.sockets.on('connection', function (socket) {

    console.log('socket.io : client id ' + socket.id + ' connected on port ' + (process.env.PORT || HTTP));
});

/*
 * S7 message 
 */
function s7Msg(Mode, Type, Db, byteIni, byteLen, Buffer) {

	var msg = new Array(16);   
	var db  = [0, 0], ini = [0, 0], len = [0, 0], buf  = [0, 0];
	
	Db = utility.IntToBytes(Db, db);
	byteIni = utility.IntToBytes(byteIni, ini);
	byteLen = utility.IntToBytes(byteLen, len);
	Buffer = utility.IntToBytes(Buffer, buf);

	switch (Type) {
	
		case 'D': 
			msg[0]  = 0x02;			// STX
			msg[1]  = 0x10;			// Msg len
			msg[2]  = Mode;			// Mode
			msg[3]  = 0x84;			// Type E:0x81, A:0x82, M:0x83, D:0x84
			msg[4]  = db[1];		// Db nr
			msg[5]  = db[0];		// Db nr
			msg[6]  = ini[1];		// Byte init
			msg[7]  = ini[0];		// Byte init
			msg[8]  = len[1];		// Byte len
			msg[9]  = len[0];		// Byte len
			msg[10] = 0x00;			// Buffer
			msg[11] = 0x00;			// Buffer
			msg[12] = buf[1];		// Buffer
			msg[13] = buf[0];		// Buffer
			msg[14] = 0x00;			// 
			msg[15] = 0x03;			// ETX

	}	
	return msg;	
}

function s7Msg2(Mode, Type, Db, byteIni, byteLen, Buffer1, Buffer2) {

	var msg = new Array(16);   
	var db  = [0, 0], ini = [0, 0], len = [0, 0], buf1  = [0, 0], buf2  = [0, 0];
	
	Db = utility.IntToBytes(Db, db);
	byteIni = utility.IntToBytes(byteIni, ini);
	byteLen = utility.IntToBytes(byteLen, len);
	Buffer1 = utility.IntToBytes(Buffer1, buf1);
	Buffer2 = utility.IntToBytes(Buffer1, buf2);
	
	switch (Type) {
	
		case 'D': 
			msg[0]  = 0x02;			// STX
			msg[1]  = 0x10;			// Msg len
			msg[2]  = Mode;			// Mode
			msg[3]  = 0x84;			// Type E:0x81, A:0x82, M:0x83, D:0x84
			msg[4]  = db[1];		// Db nr
			msg[5]  = db[0];		// Db nr
			msg[6]  = ini[1];		// Byte init
			msg[7]  = ini[0];		// Byte init
			msg[8]  = len[1];		// Byte len
			msg[9]  = len[0];		// Byte len
			msg[10] = buf1[1];		// Buffer
			msg[11] = buf1[0];		// Buffer
			msg[12] = buf2[1];		// Buffer
			msg[13] = buf2[0];		// Buffer
			msg[14] = 0x00;			// 
			msg[15] = 0x03;			// ETX

	}	
	return msg;	
}