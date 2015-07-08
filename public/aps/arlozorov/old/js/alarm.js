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

$(document).ready(function () {});

/*!
* Note: Elesoft is the author of this file, Elesoft is
* offering you a license to use the file.
* Elesoft reserves all other rights.
*
* AngularJS Library v1.2.3
* http://angularjs.org/
*
* Date: Thu May 12 12:11:53
*/

var app = angular.module('alarmApp', ['ngSanitize', 'ws.blink']);

app.factory('socket', function($rootScope){

	var socket = io.connect('http://www.sotefinservice.com:3003/ws/alarm');
	//var socket = io.connect('http://ws.ubuntu:3003/ws/alarm');
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

app.controller('alarmCtrl', function($sanitize, $scope, $sce, socket) {

	socket.on('refresh:alarms', function (data) {
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
});
