/*
 * Class Alarm.js
 */

var mysql = require('mysql')
, moment = require('moment')
, moment_tz = require('moment-timezone')
, nodemailer = require('nodemailer')
, utility = require('./Tools');

function Alarm (id, system, timezone, device, from, to) {

	this.alarms = {
		id: id,
		system: system,
		timezone: timezone,
		device: device,
		active: 0,
		alarm: a (from, to)
	};
}

function a (from, to) {

	var a = [];
	for (var i=from; i<=to; i++) {
		a.push({ id: i, status: 0, flag: 0, date: '', time: '', description: '' });
	}
	return a;
}

function sendMail (from, to, subject, html) {
	
	var smtpTransport = nodemailer.createTransport("SMTP", {
		host: "217.162.15.139",				// hostname ("mail.sotefinservice.com")
		secureConnection: false, 			// insecure plain text
		port: 587, 							// port for insecure SMTP
		auth: {
			user: "notify@sotefinservice.com",
			pass: "87342149"
		}
	});
	
	var mailOptions = {		// setup e-mail data with unicode symbols
		from: from,			// sender address
		to: to,				// list of receivers
		subject: subject,	// Subject line
		html: html			// html body
	}
	
	smtpTransport.sendMail(mailOptions, function(error, response){
		if (error) {
			console.log(error);
		}
		console.log("Message sent: " + response.message);
		smtpTransport.close();
	});
}

Alarm.prototype.getAlarm = function (db_conn, from, to, done) {
	
	var db = mysql.createConnection({
		host: db_conn.host,
		user: db_conn.user,
		password: db_conn.password,
		database: db_conn.database
	});
	var sql = 'SELECT t_alarm.alarm FROM t_alarm WHERE t_alarm.id >= ? AND t_alarm.id <= ?';
	var inserts = [from, to];
	sql = mysql.format(sql, inserts);
	db.query(sql, function(err, rows) {	
	
		if (err) {
			console.log(err.code);
			console.log(err.fatal);
			throw err;
		}
		db.end();	// close db connection gracefully
		done(rows);	// callback function !
	});
}

Alarm.prototype.setAlarms = function (byteIni, byteLen, data, alarms) {
	
	//var alarms = this.alarms;
	var x = byteIni;
	var i = 0;
	
	for (var y=0; y<byteLen; y++) {

		var m = 1;
		for (var b=0; b<8; b++) {
		
			var status = data[x] & m;
			alarms.alarm[i].status = (status ? true : false);
			if (alarms.alarm[i].status == true && alarms.alarm[i].flag == false)
			{
				alarms.alarm[i].date = moment().tz(alarms.timezone).format('YYYY-MM-DD');
				alarms.alarm[i].time = moment().tz(alarms.timezone).format('HH:mm:ss');
				alarms.alarm[i].flag = true;
				alarms.active++;
				var html = '<p>Alarm <strong style="color: red">' + alarms.alarm[i].id + '</strong> event notification details :</p>' +
						   '<ul style="list-style: none">' +
						   '<li><strong>Date</li></strong>' +
						   '<li>' + alarms.alarm[i].date + '</li>' +
						   '<li><strong>Time</li></strong>' +
						   '<li>' + alarms.alarm[i].time + '</li>' +
						   '<li><strong>Device</li></strong>' +
						   '<li>' + alarms.device + '</li>' +
						   '<li><strong>Description</strong></li>' +
						   '<li>' + alarms.alarm[i].description + '</li>' +
						   '</ul>' +
						   '<p>Visit <a href="http://www.sotefinservice.com">Sotefin Web Service</a> for additional infos.</p>';
				
				sendMail(
					'Sotefin Web Service <notify@sotefinservice.com>',
					'notify@sotefinservice.com',
					'Sotefin Web Service: ' + alarms.system,
					html
				);
				
			} else if (alarms.alarm[i].status == false && alarms.alarm[i].flag == true)
			{
				alarms.alarm[i].date = '';
				alarms.alarm[i].time = '';
				alarms.alarm[i].flag = false;
				alarms.active--;
			}
			m *= 2;
			i++;
		}
		x += 1;
	}
	return alarms;
}

Alarm.prototype.sendAlarms = function (alarms) {

	var html = '';
	for (var i=0; i<alarms.alarm.length; i++) {
		if (alarms.alarm[i].status) {
		
			html += '<p>' +
				'<span class="glyphicon glyphicon-warning-sign pull-right"></span>' +
				'[' + alarms.alarm[i].date + ']' +
				'[' + alarms.alarm[i].time + ']' +
				'[<strong class="text-info">' + alarms.device + '</strong>]' +
				'[<strong class="text-danger">AL' + alarms.alarm[i].id + '</strong>] ' + alarms.alarm[i].description +
				'</p>';
		}
	}
	return {id: alarms.id, device: alarms.device, active: alarms.active, msg: html};
}

module.exports = Alarm;
