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
	
	var ws = io.connect('//www.sotefinservice.com:3003/ws/log');
	ws.on('log', function (data) {
		//var log = JSON.parse(data.log);
		var msg = data.log;
		$('#log').html(msg);	
    });
});
