/*
 * History Log
 */
 
var mysql = require('mysql')
, moment = require('moment')
, moment_tz = require('moment-timezone')
, utility = require('./Tools');

 
exports.historyLog = function (db_conn, data, done) {

	var db = mysql.createConnection({
		host: db_conn.host,
		user: db_conn.user,
		password: db_conn.password,
		database: db_conn.database
	});
	var dt = new Date();
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
	post.time = utility.getPlcTime(utility.BytesToLong(data[22], data[23], data[24], data[25]));

	db.query('INSERT INTO t_history SET ?', post, function(err, res) {
	
		if (err) {	  
			console.log(err);
			throw err;
		} 
		historyLogMsg(db, res.insertId, post, function (log) {
		
			//var ws_log = JSON.stringify(new MsgLog(log.id, log.date, log.time, log.system, log.device, log.mode, log.operation, log.stall, log.card, log.size, log.alarm));
			var ws_log = new MsgLog(log.id, log.date, log.time, log.system, log.device, log.mode, log.operation, log.stall, log.card, log.size, log.alarm);			
			var html = '';
			switch (post.operation) {
				case 93:
					html = '<span class="text-danger">' +
						   '[' + log.date + ']' +
						   '[' + log.time + ']' +
						   '[<em class="text-primary">' + log.system + '</em>]' +
						   ' <em>device</em>: ' + log.device +
						   ' <em>operation</em>: ' + log.operation +
						   ' <em>mode</em>: ' + log.mode +
						   ' <em>alarm</em>: ' + log.alarm +
						   '</span>';
					break;
				case 94:
					html = '<span class="text-success">' +
						   '[' + log.date + ']' +
						   '[' + log.time + ']' +
						   '[<em class="text-primary">' + log.system + '</em>]' +
						   ' <em>device</em>: ' + log.device +
						   ' <em>operation</em>: ' + log.operation +
						   ' <em>mode</em>: ' + log.mode +
						   ' <em>alarm</em>: ' + log.alarm +
						   '</span>';
					break;
				case 95: case 96: case 97: case 98: case 99:
					html = '[' + log.date + ']' +
						   '[' + log.time + ']' +
						   '[<em class="text-primary">' + log.system + '</em>]' +
						   ' <em>device</em>: ' + log.device +
						   ' <em>mode</em>: ' + log.mode +
						   ' <em>operation</em>: ' + log.operation +
						   ' <em>stall</em>: ' + log.stall +
						   ' <em>card</em>: ' + log.card +
						   ' <em>size</em>: ' + log.size;
					break;
				default:
					html = '[' + log.date + ']' +
						   '[' + log.time + ']' +
						   '[<em class="text-primary">' + log.system + '</em>]' +
						   ' <em>device</em>: ' + log.device +
						   ' <em>mode</em>: ' + log.mode +
						   ' <em>operation</em>: ' + log.operation +
						   ' <em>stall</em>: ' + log.stall +
						   ' <em>card</em>: ' + log.card +
						   ' <em>size</em>: ' + log.size;
					break;
			}
			
			//console.log(html);				   
			// callback function !
			done(html);
		});
    });
}

function historyLogMsg(db, id, msg, done) {
    var sql = 'SELECT t_history.id, ws_aps.t_system.system, t_device.device, t_mode.mode, t_operation.operation, t_history.stall, t_history.card, t_history.size, t_alarm.alarm, t_history.date, t_history.time\
		FROM t_history, ws_aps.t_system, t_device, t_mode, t_operation, t_alarm\
		WHERE t_history.id = ? AND ws_aps.t_system.id = ? AND t_device.id = ? AND t_mode.id = ? AND t_operation.id = ? AND t_alarm.id = ?\
		ORDER BY t_history.id ASC;';

	var inserts = [id, msg.system, msg.device, msg.mode, msg.operation, msg.alarm];
	sql = mysql.format(sql, inserts);
	db.query(sql, function(err, query) {
		if (err) {
			console.log(err.code);
			console.log(err.fatal);
			throw err;
		}
		
		for (var i in query) {
			query[i].date = moment(query[i].date).format('YYYY-MM-DD');	//dateformat(query[i].date, "dd/mm/yyyy");
		}
		
		// callback function !
		done(query[0]);
	});
}
    
/*
 * Object constructor
 */
function MsgLog (id, date, time, system, device, mode, operation, stall, card, size, alarm) {

    this.id	= id;
    this.date = date;			//dateformat(date, "dd/mm/yyyy");
    this.time = time; 			//dateformat(time, "HH:MM:ss");
	this.system = system;
    this.device	= device;
    this.mode = mode;
    this.operation = operation;
    this.stall = stall;
    this.card = card;
    this.size = size;
    this.alarm = alarm;
}