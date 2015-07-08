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
	
	scrollBottom('.ws-log');
	
	var ws_3003 = io.connect('//www.sotefinservice.com:3003/ws/event');
	ws_3003.on('event', function (data) {

		if (data.log.event == 0) {
			$('.ws-log').empty();
		} else {
			setLog(data.html);
		}			
    });
	
});

function setLog (data) {
	var msg = $('<p style="margin: 0px 5px; padding: 0px;">' + data.log + '</p>');
	msg.hide();
	$('.ws-log').prepend(msg);
	msg.show('slow');
}

var app = angular.module('deviceApp', ['ngSanitize', 'ws.blink']);

app.directive('htmlTitle', function($sanitize) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            attrs.$observe( 'htmlTitle', function ( title ) {
              var html = $sanitize( title );
              element.attr( 'title', html );
              element.html( html );
            });
        }
    }
});


app.factory('socketData', function($rootScope){

	var socket = io.connect('//www.sotefinservice.com:3003/devices');
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

app.factory('socketAlarm', function($rootScope){

	var socket = io.connect('//www.sotefinservice.com:3003/ws/alarm');
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

app.controller('deviceCtrl', function($scope, socketData, socketAlarm) {

	/*socketAlarm.on('refresh:alarms', function (data) {
		//console.log('Alarms', JSON.stringify(data.alarms));
		var alarms = data.alarms;		
		if (alarms.length == 3) {
			$scope.al_1 = alarms[0];
			$scope.al_2 = alarms[1];
			$scope.al_3 = alarms[2];
		}		
		
		$scope.active = false;
		if ($scope.al_1.active || $scope.al_2.active || $scope.al_3.active) {
			$scope.active = true;
		} else {
			$scope.active = false;
		}
	});
	
	$scope.alarmLink = function () {
		if ($scope.al_1.active) return "/arlozorov/alarm/1";
		if ($scope.al_2.active) return "/arlozorov/alarm/2";
		if ($scope.al_3.active) return "/arlozorov/alarm/3";
	};*/
			
	socketData.on('paint:devices', function (data) {
		//console.log('(1) Received JSON data :\n' + data.devices);
		$scope.system = JSON.parse(data.devices);
    });

	socketData.on('refresh:devices', function (data) {
		//console.log('(2) Received JSON data :\n' + data.devices);
		var system = JSON.parse(data.devices);
		$scope.system = system;
	});
	
	$scope.lampStatus = function (id, status) {
		if (status) {
			return 'l l-' + id + '-true';
		} else {
			return 'l l-' + id + '-false';
		}
	};

});
