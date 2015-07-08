/*
 * Class Alarm.js
 */

var mysql = require('mysql')
	, moment = require('moment')
	, moment_tz = require('moment-timezone')
	, nodemailer = require('nodemailer')
	, utility = require('./Tools')
	, redis = require('redis')
	, rclient = redis.createClient();

exports.setAlarm = function (db_conf, log, done) {

	var key = 'arlozorov:alarm:' + log.device + ':' + log.alarm;
	var score = moment().unix();
	rclient.select(3);
	rclient.zadd('arlozorov:alarms:active:' +  log.device, score, key);

	getInfo(db_conf, log.alarm, function (alarm) {

		var date = moment( log.date ).format('YYYY-MM-DD');
		var time = moment( log.time ).format('HH:mm:ss:SSS');
		// var elapsed = moment.duration( log.elapsed ).asMilliseconds();
		var html = '[<span class="text-info">' + date + '</span>]' +
							 '[<span class="text-info">' + time + '</span>]' +
							 '&nbsp;<span class="fa fa-arrow-right"></span>' +
							 '&nbsp;[<span class="text-danger">ID' + log.alarm + '</span>]' +
							 '&nbsp;<span class="text-danger">' + alarm + '</span>';// +
							//  '<span class="fa fa-arrow-right pull-right"></span>';
		var msg = {
			log: log,
			html: html
		};
		rclient.rpush('arlozorov:alarms:' + log.device, JSON.stringify(msg));
		rclient.ltrim('arlozorov:alarms:' + log.device, -25, -1);
		done(msg);
		// var key = 'arlozorov:alarm:' + log.device + ':' + log.alarm;
		// var score = moment().unix();
		// rclient.select(3);
		// rclient.zadd('arlozorov:alarms:' +  log.device, score, key);
		// rclient.hmset(key, 'device', log.device, 'id', log.alarm, 'date', date, 'time', time, 'html', html);
		// getHash(key, function (hash) {
		// 	done(hash);	// callback function !
		// });
	});
}

exports.resetAlarm = function (db_conf, log, done) {

	var key = 'arlozorov:alarm:' + log.device + ':' + log.alarm;
	// var score = moment().unix();
	rclient.select(3);
	rclient.zrem('arlozorov:alarms:active:' + log.device, key);

	getInfo(db_conf, log.alarm, function (alarm) {

		var date = moment( log.date ).format('YYYY-MM-DD');
		var time = moment( log.time ).format('HH:mm:ss:SSS');
//		var elapsed = moment.duration( log.elapsed ).asMilliseconds();
		var html = '[<span class="text-info">' + date + '</span>]' +
						 	 '[<span class="text-info">' + time + '</span>]' +
							 '&nbsp;<span class="fa fa-arrow-left"></span>' +
							 '&nbsp;[<span class="text-success">ID' + log.alarm + '</span>]' +
							 '&nbsp;<span class="text-success">' + alarm + '</span>';// +
								//  '<span class="fa fa-arrow-left pull-right"></span>';
		var msg = {
			log: log,
			html: html
		};
		rclient.rpush('arlozorov:alarms:' + log.device, JSON.stringify(msg));
		rclient.ltrim('arlozorov:alarms:' + log.device, -25, -1);
		done(msg);
		// var key = 'arlozorov:alarm:' + log.device + ':' + log.alarm;
		// var score = moment().unix();
		// rclient.select(3);
		// rclient.zrem('arlozorov:alarms:' + log.device, key);
		// getHash(key, function (hash) {
		// 	rclient.del(key);
		// 	done(hash);	// callback function !
		// });
	});
}
/*
exports.resetAlarm = function (log) {

	var hash = 'arlozorov:alarm:' + log.device + ':' + log.alarm;

	rclient.select(3);
	rclient.zrem('arlozorov:alarms:' + log.device, hash);
	rclient.del(hash);
//	done();
}
*/
exports.getAlarm = function (device, done) {
	rclient.select(3);
	rclient.lrange('arlozorov:alarms:' + device, 0, -1, function (err, data) {
		if (err) throw err;
		done(data);
	});
}
// exports.getAlarm = function (device, done) {
//
// 	var array = [];
// 	rclient.select(3);
// 	rclient.zrange('arlozorov:alarms:' + device, 0, -1, function (err, members) {
// 		if (err) throw err;
// 		members.forEach(function (member) {
// 			getHash (member, function (hash) {
// 				array.push(hash);
// 				if (array.length == members.length) {
// 					done(array);
// 				}
// 			});
// 		});
// 	});
// }

exports.countAlarm = function (device, done) {
	rclient.select(3);
	rclient.zcard('arlozorov:alarms:active:' + device, function (err, count) {
		if (err) throw err;
		done(count);
	});
}

function getInfo (db_conf, alarm_id, done) {
	var db = mysql.createConnection({
		host: db_conf.host,
		user: db_conf.user,
		password: db_conf.password,
		database: db_conf.database
	});
	var sql = 'SELECT t_alarm.alarm FROM t_alarm WHERE t_alarm.id = ?';
	var inserts = [alarm_id];
	sql = mysql.format(sql, inserts);
	db.query(sql, function(err, rows) {
		if (err) throw err;
		db.end();	// close db connection gracefully
		done(rows[0].alarm);
	});
}

function getHash (key, done) {
	//console.log('(1)', key);
	rclient.hgetall(key, function (err, obj) {
		if (err) throw err;
  	// console.log('(2a)', obj);
		done(obj);
	});

	// rclient.hmget(key, 'device', 'html', function (err, fields) {
	// 	if (err) throw err;
	// 	var a = {
	// 		log: { device: fields[0] },
	// 		html: fields[1]
	// 	};
	// 	//console.log('(2b)', a);
	// 	done(a);
	// });
}

/*
var alarms = [
	{ id: 1,  msg: 'alarm 01' },
	{ id: 2,  msg: 'alarm 02' },
	{ id: 3,  msg: 'alarm 03' },
	{ id: 4,  msg: 'alarm 04' },
	{ id: 5,  msg: 'alarm 05' },
	{ id: 6,  msg: 'alarm 06' },
	{ id: 7,  msg: 'alarm 07' },
	{ id: 8,  msg: 'alarm 08' },
	{ id: 9,  msg: 'alarm 09' },
	{ id: 10, msg: 'alarm 10' },
	{ id: 11, msg: 'alarm 11' },
	{ id: 12, msg: 'alarm 12' },
	{ id: 13, msg: 'alarm 13' },
	{ id: 14, msg: 'alarm 14' },
	{ id: 15, msg: 'alarm 15' },
	{ id: 16, msg: 'alarm 16' },
	{ id: 17, msg: 'alarm 17' },
	{ id: 18, msg: 'alarm 18' },
	{ id: 19, msg: 'alarm 19' },
	{ id: 20, msg: 'alarm 20' },
	{ id: 21, msg: 'alarm 21' },
	{ id: 22, msg: 'alarm 22' },
	{ id: 23, msg: 'alarm 23' },
	{ id: 24, msg: 'alarm 24' },
	{ id: 25, msg: 'alarm 25' },
	{ id: 26, msg: 'alarm 26' },
	{ id: 27, msg: 'alarm 27' },
	{ id: 28, msg: 'alarm 28' },
	{ id: 29, msg: 'alarm 29' },
	{ id: 30, msg: 'alarm 30' },
	{ id: 31, msg: 'alarm 31' },
	{ id: 32, msg: 'alarm 32' }
];
*/
