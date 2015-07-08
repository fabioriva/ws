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

var app = angular.module('deviceApp', ['ngSanitize', 'blink', 'popover', 'tooltip']);

app.factory('socket1', function($rootScope){

	var socket = io.connect('//www.sotefinservice.com:3003/motors');
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

app.factory('socket2', function($rootScope){

	var socket = io.connect('//www.sotefinservice.com:3003/plc_io');
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

app.controller('deviceCtrl', function($sanitize, $scope, socket1, socket2) {
	
	$scope.stop = '<span class="fa fa-minus"></span>';
	$scope.up = '<span class="fa fa-arrow-up"></span>';
	$scope.down = '<span class="fa fa-arrow-down"></span>';
	$scope.left = '<span class="fa fa-arrow-left"></span>';
	$scope.right = '<span class="fa fa-arrow-right"></span>';
	$scope.circle = '<span class="fa fa-circle"></span>';
	$scope.cog = '<span class="fa fa-cog fa-spin"></span>';
	$scope.cog_rev = '<span class="fa fa-cog fa-spin-reverse"></span>';
	
	socket1.on('refresh:motors-1', function (data) {
		//console.log('Received JSON data :\n' + data);
		var motors = JSON.parse(data.motors);
		
		$scope.M0 = motors.motor[1];	// Travelling
		$scope.M1 = motors.motor[2];	// Rotation
	});
	
	socket1.on('refresh:motors-2', function (data) {
		//console.log('Received JSON data :\n' + data);
		var motors = JSON.parse(data.motors);
		
		$scope.M2 = motors.motor[4];	// Flap
	});
	
	socket2.on('paint:plcio-io2', function (data) {
		//console.log(data.plcio);
		var io = JSON.parse(data.plcio);
		// Flap
		$scope.AMC = io.cards[2].bytes[0].bits[0];
		$scope.ECA = io.cards[2].bytes[0].bits[1];
		$scope.ECB = io.cards[2].bytes[0].bits[2];		
		$scope.SCA = io.cards[4].bytes[0].bits[0];
		$scope.SCB = io.cards[4].bytes[0].bits[1];
	});
	
	socket2.on('refresh:plcio-io2', function (data) {
		//console.log(data.plcio);
		var io = JSON.parse(data.plcio);
		// Flap
		$scope.AMC.status = io.cards[2].bytes[0].bits[0].status;
		$scope.ECA.status = io.cards[2].bytes[0].bits[1].status;
		$scope.ECB.status = io.cards[2].bytes[0].bits[2].status;		
		$scope.SCA.status = io.cards[4].bytes[0].bits[0].status;
		$scope.SCB.status = io.cards[4].bytes[0].bits[1].status;
	});
	
	$scope.getStatus = function (direction) {
		switch (direction) {
			case 1:
				return 'warning';
				break;
			case 2:
				return 'warning';
				break;		
			default:
				return '';			
		}
	};
	
	$scope.getDirection = function (direction, ico_0, ico_1, ico_2) {
		switch (direction) {
			case 1:
				return ico_1;
				break;
			case 2:
				return ico_2;
				break;		
			default:
				return ico_0;			
		}
	};
	
	$scope.getIo = function (status) {
		if (status) {
			return "text-success fa fa-circle";
		} else {
			return "text-danger fa fa-circle";
		}
	};
});


