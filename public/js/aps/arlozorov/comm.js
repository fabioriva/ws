/*!
* Note: Elesoft is the author of this file, Elesoft is
* offering you a license to use the file.
* Elesoft reserves all other rights.
*
* jQuery JavaScript Library v1.9.0
* http://jquery.com/
* Copyright 2011, John Resig
*
* Date: Thu May 12 12:11:53
*/

$(document).ready(function () {
	
	var ws = io.connect('//www.sotefinservice.com:3003/ws/comm');
	ws.on('status', function (data) {
		var plc = data.plc
		var title = 'PLC CPU ' + plc.type + ' ' + plc.addr + ' ';
		if (plc.alive) {
			$('#comm').text('ONLINE');
			$('#comm').addClass('label-success');
			$('#comm').removeClass('label-danger');
			$('#comm').attr('title', title + 'is ONLINE');
		}
		else {
			$('#comm').text('OFFLINE');
			$('#comm').removeClass('label-success');
			$('#comm').addClass('label-danger');
			$('#comm').attr('title', title + 'is OFFLINE');
		}				
    });
});
