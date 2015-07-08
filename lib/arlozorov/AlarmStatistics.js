/*
 * Alarm Statistics
 */
 
var mysql = require('mysql')
, moment = require('moment')
, moment_tz = require('moment-timezone')
, utility = require('./Tools');

exports.alarmStatistics = function (db_conn, month, done) {

	var db = mysql.createConnection({
		host: db_conn.host,
		user: db_conn.user,
		password: db_conn.password,
		database: db_conn.database
	});
	var sql = 'SELECT alarm, count(*) AS alarmCount FROM t_history WHERE alarm != 0 AND month(date) = ? GROUP BY alarm;';
	var inserts = [month];
	sql = mysql.format(sql, inserts);
	db.query(sql, function(err, query) {
		if (err) {
			console.log(err.code);
			console.log(err.fatal);
			throw err;
		}		
		// callback function !
		done(query);
	});

}

function AlarmLogs () {
	// return {
		// ;//data[];
	// }
}