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
	
	var socket = io.connect('http://www.sotefinservice.com:3004/ws/comm');
	  
	socket.on('status', function (plc) {
		var title = 'PLC CPU ' + plc.type + ' ' + plc.addr + ' ';
		if (plc.alive) {
			$('#comm').text('Online');
			$('#comm').addClass('label-success');
			$('#comm').removeClass('label-danger');
			$('#comm').attr('title', title + 'is ONLINE');
		} else {
			$('#comm').text('Offline');
			$('#comm').addClass('label-danger');
			$('#comm').removeClass('label-siuccess');
			$('#comm').attr('title', title + 'is OFFLINE');
		}
	});

});