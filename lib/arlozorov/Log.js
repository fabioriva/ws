/*
 * History Log
 */
 
var mysql = require('mysql')
, moment = require('moment')
, moment_tz = require('moment-timezone')
, utility = require('./Tools')
, redis = require('redis')
, rclient = redis.createClient();

exports.historyLog = function (db_conf, log, done) {

	var db = mysql.createConnection({
		host: db_conf.host,
		user: db_conf.user,
		password: db_conf.password,
		database: db_conf.database
	});
	
	var post = {
		system: log.system,
		device: log.device,
		mode: log.mode,
		operation: log.operation,
		stall: log.stall,
		card: log.card,
		size: log.size,
		alarm: log.alarm,
		date: log.date,
		time: log.time
	};
	
	/*var dt = new Date();
	var post = { system: 0, device: 0, mode: 0, operation: 0, stall: 0, card: 0, size: 0, alarm: 0, date: dt, time: dt };
	
	post.system	= utility.BytesToInt(data[2], data[3]);
	post.device = utility.BytesToInt(data[4], data[5]);
	post.mode = utility.BytesToInt(data[6], data[7]);
	post.operation = utility.BytesToInt(data[8], data[9]);
	post.stall = utility.BytesToInt(data[10], data[11]);
	post.card = utility.BytesToInt(data[12], data[13]);
	post.size = utility.BytesToInt(data[14], data[15]);
	post.alarm = utility.BytesToInt(data[16], data[17]);
	post.date = utility.getPlcDate(utility.BytesToInt(data[20], data[21]));
	post.time = utility.getPlcTime(utility.BytesToLong(data[22], data[23], data[24], data[25]));*/
	
	db.query('INSERT INTO t_history SET ?' , post, function (err, res) {
		if (err) throw err;
		historyMsg (db, res.insertId, post, function (msg) {
//			console.log(msg);
			var html = '<span></span>';
			switch (log.operation) {
				case 93:
					html = '<span class="text-danger">' +
						   '[' + msg.date + ']' +
						   '[' + msg.time + ']' +
						   //'[<em class="text-primary">' + msg.system + '</em>]' +
						   ' <em>device</em>: ' + msg.device +
						   ' <em>mode</em>: ' + msg.mode +
						   ' <em>operation</em>: ' + msg.operation +
						   ' <em>alarm</em>: ' + msg.alarm +
						   '</span>';
					break;
				case 94:
					html = '<span class="text-success">' +
						   '[' + msg.date + ']' +
						   '[' + msg.time + ']' +
						   //'[<em class="text-primary">' + msg.system + '</em>]' +
						   ' <em>device</em>: ' + msg.device +
						   ' <em>mode</em>: ' + msg.mode +
						   ' <em>operation</em>: ' + msg.operation +
						   ' <em>alarm</em>: ' + msg.alarm +
						   '</span>';
					break;
				default:
					html = '[' + msg.date + ']' +
						   '[' + msg.time + ']' +
						   //'[<em class="text-primary">' + msg.system + '</em>]' +
						   ' <em>device</em>: ' + msg.device +
						   ' <em>mode</em>: ' + msg.mode +
						   ' <em>operation</em>: ' + msg.operation +
						   ' <em>stall</em>: ' + msg.stall +
						   ' <em>card</em>: ' + msg.card +
						   ' <em>size</em>: ' + msg.size;
					break;
			}
			var msg = {
				log: log,
				html: html
			};		
			// callback function !
			done(msg);
		});
    });
}

function historyMsg(db, id, msg, done) {
	
    var sql = 'SELECT t_history.id, ws_aps.t_system.system, t_device.device, t_mode.mode, t_operation.operation, t_history.stall, t_history.card, t_history.size, t_alarm.alarm, t_history.date, t_history.time\
		FROM t_history, ws_aps.t_system, t_device, t_mode, t_operation, t_alarm\
		WHERE t_history.id = ? AND ws_aps.t_system.id = ? AND t_device.id = ? AND t_mode.id = ? AND t_operation.id = ? AND t_alarm.id = ?\
		ORDER BY t_history.id ASC;';

	var inserts = [id, msg.system, msg.device, msg.mode, msg.operation, msg.alarm];
	sql = mysql.format(sql, inserts);
	db.query(sql, function(err, query) {
		if (err) throw err;
		query[0].date = moment( query[0].date ).format('YYYY-MM-DD');
		//query[0].time = moment( query[0].time ).format('HH:mm:ss')
		db.end();		// close db connection gracefully
		done(query[0]);	// callback function !
	});
}
