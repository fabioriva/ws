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
	
	var ws_3003 = io.connect('//www.sotefinservice.com:3003/ws/event');
	
	ws_3003.on('event', function (msg) {

		scrollBottom('.message-box');
		
		if (msg.log.event == 1) {
			$('.message-box').empty();
		} else {
			if (msg.log.device == 1 && $('#log1').prop('checked')) {
				setLog(msg.html);					
			};
			if (msg.log.device == 2 && $('#log2').prop('checked')) {
				setLog(msg.html);					
			};
			if (msg.log.device == 3 && $('#log3').prop('checked')) {
				setLog(msg.html);					
			};
			if (msg.log.device == 4 && $('#log4').prop('checked')) {
				setLog(msg.html);					
			};
		}
    });	
});

function setLog (html) {
	var msg = $('<p class="" style="margin: 0px 5px; padding: 0px;">' + html + '</p>');
	msg.hide();
	$('.message-box').prepend(msg);
	msg.show('slow');
}
