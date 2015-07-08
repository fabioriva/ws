/*!
* Note: Sotefin SA is the author of this file, Sotefin SA is
* offering you a license to use the file.
* Sotefin SA reserves all other rights.
*
* jQuery JavaScript Library v1.9.0
* http://jquery.com/
* Copyright 2011, John Resig
*
* Date: Thu May 12 12:11:53
*/

$(document).ready(function () {
	
	//$('<span class="glyphicon glyphicon-chevron-down"></span>').appendTo('body');
	scrollBottom('.ws-log');
	/*
	var socket = io('/test');
	socket.on('msg', function (data) {
		console.log(data);
	});
	*/
	var ws_3001 = io.connect('//www.sotefinservice.com:3001/ws/log');
	//var ws_3001 = io.connect('/ws3001/ws/log');
	ws_3001.on('log', function (data) {
		setLog(data);	
    });
	var ws_3002 = io.connect('//www.sotefinservice.com:3002/ws/log');
	//var ws_3002 = io.connect('/ws3002/ws/log');
	ws_3002.on('log', function (data) {
		setLog(data);	
    });
	
	var ws_3003 = io.connect('//www.sotefinservice.com:3003/ws/log');
	ws_3003.on('log', function (data) {
		setLog(data);	
    });
	
	var ws_3004 = io.connect('//www.sotefinservice.com:3004/ws/log');
	ws_3004.on('log', function (data) {
		setLog(data);	
    });
	
	var ws_3005 = io.connect('//www.sotefinservice.com:3005/ws/log');
	ws_3005.on('log', function (data) {
		setLog(data);
    });
});

function setLog (data) {
	var msg = $('<p><span class="glyphicon glyphicon-user glyphicon-white"></span> ' + data.log + '</p>');
	msg.hide();
	$('.ws-log').prepend(msg);
	msg.show('slow');
}
