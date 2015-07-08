/*
 * Event Log
 */

var moment = require('moment')
, moment_tz = require('moment-timezone')
, redis = require('redis')
, client = redis.createClient();

exports.eventLog = function (log, done) {
  
  client.select(3);
	var date = moment( log.date ).format('YYYY-MM-DD');
	var time = moment( log.time ).format('HH:mm:ss:SSS');
	var elapsed = moment.duration( log.elapsed ).asMilliseconds();

	if (log.event == 1) {
//		console.log('del', log.event);
		client.ltrim('arlozorov:events:' + log.device, -1, 0);
	}
//	console.log('check', log.event);
	var event = events[log.event-1].msg
	var html = 	'[<span class="text-info">' + date + '</span>]' + '[<span class="text-info">' + time + '</span>]';
	switch (log.operation) {
		case 80:	// event log
			html += '&nbsp;&raquo;&nbsp' + '<span>' + event + '</span>' + '<span class="pull-right"><em class="text-info">' + elapsed + ' msec</em></span>';
			break;
		case 81:	// event log on
			html += '&nbsp;&raquo;&nbsp' + '<span class="text-danger">' + event + '</span>' + '<span class="pull-right"><em class="text-info">' + elapsed + ' msec</em></span>';
			break;
		case 82:	// event log off
			html += '&nbsp;&raquo;&nbsp' + '<span class="text-success">' + event + '</span>' + '<span class="pull-right"><em class="text-info">' + elapsed + ' msec</em></span>';
			break;
		case 83:	// event alarm on
			html += '&nbsp;&raquo;&nbsp' + '<span class="text-danger">' + event + '</span>' + '<span class="pull-right"><em class="text-info">' + elapsed + ' msec</em></span>';
			break;
		case 84:	// event alarm off
			html += '&nbsp;&raquo;&nbsp' + '<span class="text-success">' + event + '</span>' + '<span class="pull-right"><em class="text-info">' + elapsed + ' msec</em></span>';
			break;
	}
	var msg = {
		log: log,
		html: html
	};
	client.rpush('arlozorov:events:' + log.device, JSON.stringify(msg));
	done(msg);
}

exports.getLog = function (device, done) {
  client.select(3);
	client.lrange('arlozorov:events:' + device, 0, -1, function (err, data) {
		if (err) throw err;
		done(data);
	});
}

var events = [
	{ id: 1,  msg: '' },
	{ id: 2,  msg: 'Start elevator cycle' },
	{ id: 3,  msg: 'Start levelling, position reached' },
	{ id: 4,  msg: 'Start elevator locking' },
	{ id: 5,  msg: 'Bottom level position reached (EFB)' },
	{ id: 6,  msg: 'Top level position reached (EXPV)' },
	{ id: 7,  msg: 'Level position reached (EXV)' },
	{ id: 8,  msg: 'Hoisting On (SQA)' },
	{ id: 9,  msg: 'Brake On (SBK1)' },
	{ id: 10, msg: 'Brake On (SBK2)' },
	{ id: 11, msg: 'Hoisting feedback is ON' },
	{ id: 12, msg: 'Hoisting brake feedback is ON' },
	{ id: 13, msg: 'Locking pin 1 opened limitswitch is On (EOM1)' },
	{ id: 14, msg: 'Locking pin 1 closed limitswitch is On (EZM1)' },
	{ id: 15, msg: 'Locking pin 1 closing' },
	{ id: 16, msg: 'Locking pin 1 opening' },
	{ id: 17, msg: 'Locking pin 2 opened limitswitch is On (EOM2)' },
	{ id: 18, msg: 'Locking pin 2 closed limitswitch is On (EZM2)' },
	{ id: 19, msg: 'Locking pin 2 closing' },
	{ id: 20, msg: 'Locking pin 2 opening' },
	{ id: 21, msg: 'Locking pin 3 opened limitswitch is On (EOM3)' },
	{ id: 22, msg: 'Locking pin 3 closed limitswitch is On (EZM3)' },
	{ id: 23, msg: 'Locking pin 3 closing' },
	{ id: 24, msg: 'Locking pin 3 opening' },
	{ id: 25, msg: 'Locking pin 4 opened limitswitch is On (EOM4)' },
	{ id: 26, msg: 'Locking pin 4 closed limitswitch is On (EZM4)' },
	{ id: 27, msg: 'Locking pin 4 closing' },
	{ id: 28, msg: 'Locking pin 4 opening' },
	{ id: 29, msg: 'event 29' },
	{ id: 30, msg: 'event 30' },
	{ id: 31, msg: 'event 31' },
	{ id: 32, msg: 'event 32' },
	{ id: 33, msg: 'Cycle completed' },
	{ id: 34, msg: 'Hosting motor thermic is Off (RTA)' },
	{ id: 35, msg: 'Hosting brake thermic is Off (ASBK)' },
	{ id: 36, msg: 'Locking pin 1/2 thermic is Off (AMM1)' },
	{ id: 37, msg: 'Locking pin 3/4 thermic is Off (AMM2)' },
	{ id: 38, msg: 'event 38)' },
	{ id: 39, msg: 'event 39' },
	{ id: 40, msg: 'event 40' },
	{ id: 41, msg: 'event 41' },
	{ id: 42, msg: 'event 42' },
	{ id: 43, msg: 'event 43' },
	{ id: 44, msg: 'event 44' },
	{ id: 45, msg: 'event 45' },
	{ id: 46, msg: 'event 46' },
	{ id: 47, msg: 'event 47' },
	{ id: 48, msg: 'event 48' },
	{ id: 49, msg: 'event 49' },
	{ id: 50, msg: 'event 50' },
	{ id: 51, msg: 'event 51' },
	{ id: 52, msg: 'event 52' },
	{ id: 53, msg: 'event 53' },
	{ id: 54, msg: 'event 54' },
	{ id: 55, msg: 'event 55' },
	{ id: 56, msg: 'event 56' },
	{ id: 57, msg: 'event 57' },
	{ id: 58, msg: 'event 58' },
	{ id: 59, msg: 'event 59' },
	{ id: 60, msg: 'event 60' },
	{ id: 61, msg: 'event 61' },
	{ id: 62, msg: 'event 62' },
	{ id: 63, msg: 'event 63' },
	{ id: 64, msg: 'event 64' }
	// { id: 65, msg: 'event 65' },
	// { id: 66, msg: 'event 66' },
	// { id: 67, msg: 'event 67' },
	// { id: 68, msg: 'event 68' },
	// { id: 69, msg: 'event 69' },
	// { id: 70, msg: 'event 70' },
	// { id: 71, msg: 'event 71' },
	// { id: 72, msg: 'event 72' },
	// { id: 73, msg: 'event 73' },
	// { id: 74, msg: 'event 74' },
	// { id: 75, msg: 'event 75' },
	// { id: 76, msg: 'event 76' },
	// { id: 77, msg: 'event 77' },
	// { id: 78, msg: 'event 78' },
	// { id: 79, msg: 'event 79' },
	// { id: 80, msg: 'event 80' },
	// { id: 81, msg: 'event 81' },
	// { id: 82, msg: 'event 82' },
	// { id: 83, msg: 'event 83' },
	// { id: 84, msg: 'event 84' }
];
