/*
 * Statistics
 */
 
var mysql = require('mysql')
, moment = require('moment')
, moment_tz = require('moment-timezone')
, utility = require('./Tools');


exports.mapOccupancy = function (data, done) {
	
	var FREE = 0;
	var RSVD = 65534;
	var LOCK = 65535;
	
	var stat = {
		total: 912,
		free: 0,
		busy: 0,
		lock: 0,
	};
	
	for (var b=0; b<data.length; b+=2) {
		var status = utility.BytesToInt(data[b], data[b+1]);
		switch(status) {
			case FREE :
				stat.free++;
				break;
			case LOCK :
				stat.lock++;
				break;
			default :
				stat.busy++;
				break;
		}
	}
	// callback function !
	done( stat );
}

exports.operationDaily = function (db_conn, system, date, done) {
	
	var d = moment(date, 'YYYY-MM-DD').isValid() ? moment(date).format('YYYY-MM-DD') : moment().tz('Asia/Kolkata').format('YYYY-MM-DD');
	
	var chart_data = {
			title: 'Daily operations : ' + d,
			src:
			{
				cols: [
					{id: 't', label: 'Time of Day', type: 'string'},
					{id: 'e', label: 'Entries', type: 'number'},
					{id: 'u', label: 'Exits', type: 'number'},
				],
				rows: [
					{c: [{v: '00:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},	// h 0
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '02:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '04:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '06:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '08:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '10:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '12:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '14:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '16:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '18:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '20:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '22:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]}		// h 23
				]
			}
		};

	var db = mysql.createConnection({
		host: db_conn.host,
		user: db_conn.user,
		password: db_conn.password,
		database: db_conn.database
	}); 
	var sql = 'SELECT date, HOUR(time) AS hour, operation, count(*) AS operationCount\
		FROM t_history WHERE system = ? AND (operation=95 OR operation=96) AND date = ? GROUP BY HOUR(time), operation';
	var inserts = [system, d];
	sql = mysql.format(sql, inserts);
//	var options = { sql: sql, nestTables: '_' };	// overlapping column names
//	db.query(options, function(err, query) {
	db.query(sql, function(err, query) {
		if (err) {
			console.log(err.code);
			console.log(err.fatal);
			throw err;
		}
		for (var i in query) {
			
			switch (query[i].operation) {
				case 95:
					chart_data.src.rows[query[i].hour].c[1].v = query[i].operationCount;
					break;
				case 96:
					chart_data.src.rows[query[i].hour].c[2].v = query[i].operationCount;
					break;
			}
			
		}
		// close db connection gracefully
		db.end();
		// callback function !
		done( chart_data );
	});
}

exports.operationWeekly = function (db_conn, date, done) {

	var d2 = moment(date, 'YYYY-MM-DD').isValid() ? moment(date).format('YYYY-MM-DD') : moment().tz('Asia/Kolkata').format('YYYY-MM-DD');
	var d1 = moment(d2).subtract(1, 'weeks').tz('Asia/Kolkata').format('YYYY-MM-DD');
	
	var chart_data = {
			title: 'Weekly operations : from ' + d1 + ' to ' + d2,
			src:
			{
				cols: [
					{id: 'd', label: 'Day of Week', type: 'string'},
					{id: 'e', label: 'Entries', type: 'number'},
					{id: 'u', label: 'Exits', type: 'number'},
				],
				rows: [
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},	// d 1
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]}		// d 7
				]
			}
		};
	
	var d3 = d1;
	for (var i=0; i<7; i++) {
		
		chart_data.src.rows[i].c[0].v = d3;
		d3 = moment(d3).add(1, 'days').tz('Asia/Kolkata').format('YYYY-MM-DD');
	}
	
	var db = mysql.createConnection({
		host: db_conn.host,
		user: db_conn.user,
		password: db_conn.password,
		database: db_conn.database
	}); 
	var sql = 'SELECT date, operation, count(*) AS operationCount FROM t_history WHERE (operation=95 OR operation=96) AND (date >= ? AND date <= ?) GROUP BY date, operation';
	var inserts = [d1, d2];
	sql = mysql.format(sql, inserts);
//	var options = { sql: sql, nestTables: '_' };	// overlapping column names
//	db.query(options, function(err, query) {
	db.query(sql, function(err, query) {
		if (err) {
			console.log(err.code);
			console.log(err.fatal);
			throw err;
		}
		for (var i in query) {
			for (var ii=0; ii<7; ii++) {
				
				if (chart_data.src.rows[ii].c[0].v == moment(query[i].date).format('YYYY-MM-DD')) {
					switch (query[i].operation) {
						case 95:
							chart_data.src.rows[ii].c[1].v = query[i].operationCount;
							break;
						case 96:
							chart_data.src.rows[ii].c[2].v = query[i].operationCount;
							break;
					}
				}
			}
		}
		// close db connection gracefully
		db.end();
		// callback function !
		done( chart_data );
	});
}

exports.operationMonthly = function (db_conn, date, done) {
	
	var d = moment(date, 'YYYY-MM-DD').isValid() ? moment(date).format('YYYY-MM-DD') : moment().tz('Asia/Kolkata').format('YYYY-MM-DD');
	var y = moment(d).year();
	var m = moment(d).month();
	
	var chart_data = {
			title: 'Monthly operations : ' + d,
			src:
			{
				cols: [
					{id: 'd', label: 'Day of Month', type: 'string'},
					{id: 'e', label: 'Entries', type: 'number'},
					{id: 'u', label: 'Exits', type: 'number'},
				],
				rows: [
					{c: [{v: '00:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},	// h 0
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '02:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '04:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '06:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '08:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '10:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '12:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '14:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '16:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '18:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '20:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: '22:00', f: null}, {v: 0, f: null}, {v: 0, f: null}]},
					{c: [{v: null, f: null}, {v: 0, f: null}, {v: 0, f: null}]}		// h 23
				]
			}
		};
	
	var db = mysql.createConnection({
		host: db_conn.host,
		user: db_conn.user,
		password: db_conn.password,
		database: db_conn.database
	});
	var sql = 'SELECT date, operation, count(*) AS operationCount FROM t_history WHERE (operation=95 OR operation=96) AND YEAR(date) = ? AND MONTH(date) = ? GROUP BY date, operation';
	var inserts = [y, m];
	sql = mysql.format(sql, inserts);
//	var options = { sql: sql, nestTables: '_' };	// overlapping column names
//	db.query(options, function(err, query) {
	db.query(sql, function(err, query) {
		if (err) {
			console.log(err.code);
			console.log(err.fatal);
			throw err;
		}
		for (var i in query) {
			query[i].date = moment(query[i].date).tz('Asia/Kolkata').format('DD');
		}
		// close db connection gracefully
		db.end();
		// callback function !
		done( query );
	});
}

exports.alarmWeekly = function (db_conn, date, done) {

	var d2 = moment(date, 'YYYY-MM-DD').isValid() ? moment(date).format('YYYY-MM-DD') : moment().tz('Asia/Kolkata').format('YYYY-MM-DD');
	var d1 = moment(d2).subtract(1, 'weeks').tz('Asia/Kolkata').format('YYYY-MM-DD');
	
	var chart_data = {
			title: 'Weekly alarm events : from ' + d1 + ' to ' + d2,
			src:
			{
				cols: [
					{id: 'id', label: 'Alarm Id', type: 'string'},
					{id: 'al', label: 'Number of Events', type: 'number', format: ''},
					{type: 'string', role: 'tooltip'},
				],
				rows: [
				]
			}
		};
	
	var db = mysql.createConnection({
		host: db_conn.host,
		user: db_conn.user,
		password: db_conn.password,
		database: db_conn.database
	}); 
	var sql = 'SELECT t_alarm.alarm, t_history.alarm AS alarmId, count(*) AS alarmCount FROM t_history, t_alarm\
		WHERE t_history.alarm = t_alarm.id AND t_history.alarm != 0 AND (date >= ? AND date <= ?) GROUP BY t_history.alarm;';
	var inserts = [d1, d2];
	sql = mysql.format(sql, inserts);
//	var options = { sql: sql, nestTables: '_' };	// overlapping column names
//	db.query(options, function(err, query) {
	db.query(sql, function(err, query) {
		if (err) {
			console.log(err.code);
			console.log(err.fatal);
			throw err;
		}
		for (var i in query) {
			//console.log(query[i]);
			chart_data.src.rows.push({c: [ {v: 'ID' + query[i].alarmId}, {v: query[i].alarmCount, f: null}, {v: 'ID' + query[i].alarmId + '\n' + query[i].alarm + '\nNumber of Events: ' + query[i].alarmCount} ]} );
		}

		// close db connection gracefully
		db.end();
		// callback function !
		done( chart_data );
	});
}
