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
	
	scrollBottom('.message-box');
	
	var ws_3003 = io.connect('//www.sotefinservice.com:3003/ws/comm');
	ws_3003.on('status', function (data) {
		setLog(data.ping);
    });
	ws_3003.on('status2012', function (data) {
		var msg = $('<p>' + data + '</p>');
		$('#message-box-2').prepend(msg);
    });
	ws_3003.on('status4003', function (data) {
		var msg = $('<p>' + data + '</p>');
		$('#message-box-3').prepend(msg);
    });
	ws_3003.on('status2013', function (data) {
		var msg = $('<p>' + data + '</p>');
		$('#message-box-4').prepend(msg);
    });
});

function setLog (data) {
	var msg = $('<p style="margin: 0px 5px; padding: 0px;"><span class="fa fa-terminal"></span>&nbsp;' + data + '</p>');
	msg.hide();
	$('#message-box-1').prepend(msg);
	msg.show('slow');
}

var app = angular.module('commApp', ['blink']);

app.factory('socket', function($rootScope){

	var socket = io.connect('//www.sotefinservice.com:3003/ws/comm');
	return {
		on: function(eventName, callback) {
			socket.on(eventName, function() {
				var args = arguments;
				$rootScope.$apply(function() {
					callback.apply(socket, args);
				});
			});
		},
		emit: function(eventName, data, callback) {
			socket.emit(eventName, data, function() {
				var args = arguments;
				$rootScope.$apply(function() {
					if(callback) {
						callback.apply(socket, args);
					}
				});
			});
		}
	};	
});

app.controller('commCtrl', function($scope, socket) {

	$scope.lampStatus = function (lamp, status) {
		if (status) {
			return 'lamp lamp-' + lamp + ' lamp-' + lamp + '-on';
		} else {
			return 'lamp lamp-' + lamp + ' lamp-' + lamp + '-off';
		}		
	};

});
