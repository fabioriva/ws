// ../routes/arlozorov.js

var mysql = require('mysql')
, moment = require('moment')
, moment_tz = require('moment-timezone');

var aps = {
	id: 4,
	name: 'Iron Bank',
	system: 'Aps',
	location: 'Auckland',
	timezone: 'Pacific/Auckland'
};

module.exports = function (app, auth) {
	// index page
	app.get('/ibank', auth.isAuthenticated([aps.id]), function(req, res) {
		// var uid = req.signedCookies.ws_user.uid;
		// var secret = req.signedCookies.ws_user.secret;
		// console.log(uid, secret);
		res.render('aps/ibank/index', {
			title: 'Iron Bank',
			nav_active: 0,
			ng_app: 'indexApp',
			ng_controller: 'indexCtrl'
		});
	});
	// index page
	app.get('/ibank/index', auth.isAuthenticated([aps.id]), function(req, res) {
		// var uid = req.signedCookies.ws_user.uid;
		// var secret = req.signedCookies.ws_user.secret;
		// console.log(uid, secret);
		res.render('aps/ibank/index', {
			title: 'Iron Bank',
			nav_active: 0,
			ng_app: 'indexApp',
			ng_controller: 'indexCtrl'
		});
	});
	// Overview page
	app.get('/ibank/device', auth.isAuthenticated([aps.id]), function(req, res){
		res.render('aps/ibank/device', {
			title: 'Iron Bank: Overview',
			nav_active: 1,
			ng_app: 'deviceApp',
			ng_controller: 'deviceCtrl'
		});
	});
	// Alarm page
	app.get('/ibank/alarm/:id', auth.isAuthenticated([aps.id]), function(req, res){
		res.render('aps/ibank/alarm', {
			title: 'Iron Bank: Alarms',
			nav_active: 1,
			ng_app: 'alarmApp',
			ng_controller: 'alarmCtrl',
			al_id: req.params.id
		});
	});
	// Elevator page
	app.get('/ibank/elevator', auth.isAuthenticated([aps.id]), function(req, res){
		res.render('aps/ibank/elevator', {
			title: 'Iron Bank: Elevator Platform',
			nav_active: 2,
			ng_app: 'elevatorApp',
			ng_controller: 'elevatorCtrl'
		});
	});
	// Shuttle page
	app.get('/ibank/shuttle', auth.isAuthenticated([aps.id]), function(req, res){
		res.render('aps/ibank/shuttle', {
			title: 'Iron Bank: Shuttle',
			nav_active: 2,
			ng_app: 'shuttleApp',
			ng_controller: 'shuttleCtrl'
		});
	});
	// Map page
	app.get('/ibank/map', auth.isAuthenticated([aps.id]), function(req, res){
		res.render('aps/ibank/map', {
			title: 'Iron Bank: Map',
			nav_active: 6,
			ng_app: 'mapApp',
			ng_controller: 'mapCtrl'
		});
	});
	// Map Size page
	app.get('/ibank/map_size', auth.isAuthenticated([aps.id]), function(req, res){
		res.render('aps/ibank/map_size', {
			title: 'Iron Bank: Map',
			nav_active: 6,
			ng_app: 'mapApp',
			ng_controller: 'mapCtrl'
		});
	});
	// Map statistics page
	app.get('/ibank/map/statistics', auth.isAuthenticated([aps.id]), function(req, res){
		res.render('aps/ibank/map_stat', {
			title: 'Iron Bank: Occupancy',
			nav_active: 6,
			ng_app: 'mapApp',
			ng_controller: 'mapCtrl'
		});
	});
	// Plc I/O page 1
	app.get('/ibank/plc/io/1/:tab', auth.isAuthenticated([aps.id]), function(req, res){
		res.render('aps/ibank/plc_io_1', {
			title: 'Iron Bank: Plc I/O',
			nav_active: 12,
			tab_active: req.params.tab,
			ng_app: 'ioApp',
			ng_controller: 'ioCtrl'
		});
	});
	// Plc I/O page 2
	app.get('/ibank/plc/io/2/:tab', auth.isAuthenticated([aps.id]), function(req, res){
		res.render('aps/ibank/plc_io_2', {
			title: 'Iron Bank: Plc I/O',
			nav_active: 12,
			tab_active: req.params.tab,
			ng_app: 'ioApp',
			ng_controller: 'ioCtrl'
		});
	});
	// History page
	app.get('/ibank/history', auth.isAuthenticated([aps.id]), function(req, res){
		getLog(/*db, */req, res, function(data) {
			res.render('aps/ibank/history', {
				title: 'Iron Bank: Logs',
				nav_active: 15,
				ng_app: 'historyApp',
				//ng_controller: 'historyCtrl',
				rows: data.query,
				total_items: data.total_items,
				total_pages: data.total_pages,
				current_page: data.current_page,
				prev_page: data.prev_page,
				next_page: data.next_page,
				dt1: data.dt1,	// date_from
				dt2: data.dt2,	// time_from
				dt3: data.dt3,	// date_to
				dt4: data.dt4,	// time_to
				opt1: data.opt1,
				opt2: data.opt2
			});
		});
	});
}

function getLog(/*db, */req, res, done) {

	var db = mysql.createConnection({
		host: 'sotefinservice.com',
		user: 'webservice',
		password: 'h0savP6L',
		database: 'ws_ibank'
	});
	var dt1 = moment(req.query.dt1, 'YYYY-MM-DD').isValid() ? moment(req.query.dt1).format('YYYY-MM-DD') : moment().tz(aps.timezone).format('YYYY-MM-DD');
	var dt2 = req.query.dt2 || moment({hour: 0, minute: 0, seconds: 0}).format('HH:mm:ss');
	var dt3 = moment(req.query.dt3, 'YYYY-MM-DD').isValid() ? moment(req.query.dt3).format('YYYY-MM-DD') : moment().tz(aps.timezone).format('YYYY-MM-DD');
	var dt4 = req.query.dt4 || moment({hour: 23, minute: 59, seconds: 59}).format('HH:mm:ss');
	var opt1 = req.query.filter1 || 'all';
	var opt2 = req.query.filter2 || 'all';
	
	getLogCount(db, dt1, dt3, dt2, dt4, opt1, opt2, function(count) {
		var current_page = parseInt(req.query.page) || 1;
		var items_per_page = 50;
		var start_index = ( current_page - 1 ) * items_per_page;
		var total_items = count;
		var total_pages = Math.ceil(total_items / items_per_page);
		var prev_page = current_page > 1 ? current_page - 1 : 1;
		var next_page = current_page < total_pages ? current_page + 1 : total_pages;
		
		var sql = 'SELECT t_history.id, ws_aps.t_system.system, t_device.device, t_mode.mode, t_operation.operation, t_history.stall, t_history.card, t_history.size, t_history.alarm, t_alarm.alarm, t_history.date, t_history.time\
				FROM t_history, ws_aps.t_system, t_device, t_mode, t_operation, t_alarm\
				WHERE t_history.system = ? AND ws_aps.t_system.id = t_history.system AND t_device.id = t_history.device AND t_mode.id = t_history.mode AND t_operation.id = t_history.operation AND t_alarm.id = t_history.alarm\
				AND ((t_history.date >= ? AND t_history.time >= ?) OR t_history.date > ?) AND ((t_history.date <= ? AND t_history.time <= ?) OR t_history.date < ? )';
//				ORDER BY id DESC\
//				LIMIT ?, ?';
		
		setQuery(sql, opt1, opt2, function(sql) {
			
			sql += ' ORDER BY id DESC LIMIT ?, ?';
			var inserts = [aps.id, dt1, dt2, dt1, dt3, dt4, dt3, start_index, items_per_page];
			sql = mysql.format(sql, inserts);
			var options = { sql: sql, nestTables: '_' };	// overlapping column names
			
			db.query(options, function(err, query) {
				if (err) {
					console.log(err.code);
					console.log(err.fatal);
					throw err;
				}
				for (var i in query) {
					//console.log(JSON.stringify(query[i]));
					query[i].date = moment(query[i].t_history_date).tz(aps.timezone).format('YYYY-MM-DD');
				}
				// close db connection gracefully
				db.end();
				// callback function !
				done({ query: query, total_items: total_items, total_pages: total_pages, current_page: current_page, prev_page: prev_page, next_page: next_page, dt1: dt1, dt2: dt2, dt3: dt3, dt4: dt4, opt1: opt1, opt2: opt2 });
			});
		});
	});	
}

function getLogCount(db, dt_from, dt_to, time_from, time_to, opt1, opt2, done) {
	
	var sql = 'SELECT COUNT(*) AS history_count FROM t_history\
			WHERE t_history.system = ? AND ((t_history.date >= ? AND t_history.time >= ?) OR t_history.date > ?) AND ((t_history.date <= ? AND t_history.time <= ?) OR t_history.date < ? )';
	
	setQuery(sql, opt1, opt2, function(sql) {
		
		var inserts = [aps.id, dt_from, time_from, dt_from, dt_to, time_to, dt_to];
		sql = mysql.format(sql, inserts);
		db.query(sql, function(err, query) {
			if (err) {
				console.log(err.code);
				console.log(err.fatal);
				throw err;
			}
			// callback function !
			done( query[0].history_count );
		});
	});
}

function setQuery(sql, opt1, opt2, done) {

	switch (opt1) {
		case 'all' :
			switch (opt2) {
				case 'all' :
					break;
				case 'alarm' :
					sql += ' AND (t_history.alarm != 0)';
					break;
			}
			break;
			
		default :
			switch (opt2) {
				case 'all' :
					sql += ' AND (t_history.device = ' + opt1 + ')';
					break;
				case 'alarm' :
					sql += ' AND (t_history.device = ' + opt1 + ') AND (t_history.alarm != 0)';
					break;
			}
			break;
	}
	done( sql );
}
