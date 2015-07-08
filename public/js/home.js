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

	scrollBottom('.panel-body');

	var ws_3001 = io.connect('//www.sotefinservice.com:3001/ws/log');
	ws_3001.on('log', function (data) {
		setLog(1, data);
    });
	var ws_3002 = io.connect('//www.sotefinservice.com:3002/ws/log');
	ws_3002.on('log', function (data) {
		setLog(2, data);
    });
	var ws_3003 = io.connect('//www.sotefinservice.com:3003/ws/log');
	ws_3003.on('log', function (data) {
		setLog(3, data);
    });
	var ws_3004 = io.connect('//www.sotefinservice.com:3004/ws/log');
	ws_3004.on('log', function (data) {
		setLog(4, data);
    });
	var ws_3005 = io.connect('//www.sotefinservice.com:3005/ws/log');
	ws_3005.on('log', function (data) {
		setLog(5, data);
    });
});

function setLog (id, data) {
	var flag = setFlag(id);
	var msg = $('<p>' + flag + ' ' + data.log + '</p>');
	msg.hide();
	$('.panel-body').prepend(msg);
	msg.show('slow');
}

function setFlag (flag) {
	switch (flag) {
		case 1:
			return '<img src="../images/flags/16/India.png" alt="India" height="16" width="16">';
			break;
		case 2:
			return '<img src="../images/flags/16/India.png" alt="India" height="16" width="16">';
			break;
		case 3:
			return '<img src="../images/flags/16/Israel.png" alt="Israel" height="16" width="16">';
			break;
		case 4:
			return '<img src="../images/flags/16/New Zealand.png" alt="New Zealand" height="16" width="16">';
			break;
		case 5:
			return '<img src="../images/flags/16/Brazil.png" alt="Brazil" height="16" width="16">';
			break;
	}
}
