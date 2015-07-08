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

	var socket = io.connect('http://www.sotefinservice.com:3005/ws/alarm');
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
		
		$scope.active = false;
		
		var alarms = data.alarms;
		switch (alarms.length) {
			case 3:
//				console.log('Cabin alarms :\n', JSON.stringify(data.alarms));
				$scope.al_21 = alarms[0];
				$scope.al_22 = alarms[1];
				$scope.al_23 = alarms[2];
				// if ($scope.al_21.active || $scope.al_22.active || $scope.al_23.active) {
					// $scope.active = true;
				// }
				break;
			case 4:
//				console.log('Elevator alarms :\n', JSON.stringify(data.alarms));
				$scope.al_1 = alarms[0];
				$scope.al_2 = alarms[1];
				$scope.al_3 = alarms[2];
				$scope.al_4 = alarms[3];
				break;
			case 8:
//				console.log('Shuttle alarms :\n', JSON.stringify(data.alarms));
				$scope.al_11 = alarms[0];
				$scope.al_12 = alarms[1];
				$scope.al_13 = alarms[2];
				$scope.al_14 = alarms[3];
				$scope.al_15 = alarms[4];
				$scope.al_16 = alarms[5];
				$scope.al_17 = alarms[6];
				$scope.al_18 = alarms[7];
				break;
		}
		/*
		if ($scope.al_1.active || $scope.al_2.active || $scope.al_3.active) {
			$scope.active = true;
		} else {
			$scope.active = false;
		}
		*/
	});
	
});
