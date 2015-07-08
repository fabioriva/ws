var db = {
	host: 'sotefinservice.com',
	user: 'webservice',
	password: 'h0savP6L',
	database: 'ws_kamla'
};

require('./AlarmStatistics.js').alarmStatistics(db, 9, function (data) {
	console.log('data :\n', data);
	process.exit();
});