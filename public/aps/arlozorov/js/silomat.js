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
		
		$scope.M0 = motors.motor[3];	// Travelling
	});
	
	socket1.on('refresh:motors-2', function (data) {
		//console.log('Received JSON data :\n' + data);
		var motors = JSON.parse(data.motors);
		
		$scope.M1 = motors.motor[5];	// Hoisting
		$scope.M2 = motors.motor[6];	// Front centering
		$scope.M3 = motors.motor[7];	// Back centering
	});
	
	socket2.on('paint:plcio-io1', function (data) {
		//console.log(data.plcio);
		var io = JSON.parse(data.plcio);
		// Silomat Input
		$scope.RMV = io.cards[1].bytes[2].bits[0];
		$scope.RMH = io.cards[1].bytes[2].bits[1];		
		$scope.RES = io.cards[1].bytes[2].bits[2];
		$scope.REH = io.cards[1].bytes[2].bits[3];
		$scope.RCV = io.cards[1].bytes[2].bits[4];
		$scope.REAV = io.cards[1].bytes[2].bits[5];		
		$scope.REAH = io.cards[1].bytes[2].bits[6];
		$scope.RCH = io.cards[1].bytes[2].bits[7];
		$scope.MTC = io.cards[1].bytes[3].bits[1];
		
		// Silomat Output
		$scope.T10 = io.cards[3].bytes[2].bits[0];
		$scope.T2 = io.cards[3].bytes[2].bits[1];
		$scope.TRA = io.cards[3].bytes[2].bits[2];
		$scope.TRB = io.cards[3].bytes[2].bits[3];
		$scope.KCS = io.cards[3].bytes[2].bits[4];
		$scope.KCV = io.cards[3].bytes[2].bits[5];
		$scope.KCH = io.cards[3].bytes[2].bits[6];
		$scope.TCR = io.cards[3].bytes[2].bits[7];
	
	});
	
	socket2.on('refresh:plcio-io1', function (data) {
		//console.log(data.plcio);
		var io = JSON.parse(data.plcio);
		// Silomat Input
		$scope.RMV.status = io.cards[1].bytes[2].bits[0].status;
		$scope.RMH.status = io.cards[1].bytes[2].bits[1].status;		
		$scope.RES.status = io.cards[1].bytes[2].bits[2].status;
		$scope.REH.status = io.cards[1].bytes[2].bits[3].status;
		$scope.RCV.status = io.cards[1].bytes[2].bits[4].status;
		$scope.REAV.status = io.cards[1].bytes[2].bits[5].status;
		$scope.REAH.status = io.cards[1].bytes[2].bits[6].status;
		$scope.RCH.status = io.cards[1].bytes[2].bits[7].status;
		// Silomat Output
		$scope.T10.status = io.cards[3].bytes[2].bits[0].status;
		$scope.T2.status = io.cards[3].bytes[2].bits[1].status;
		$scope.TRA.status = io.cards[3].bytes[2].bits[2].status;
		$scope.TRB.status = io.cards[3].bytes[2].bits[3].status;
		$scope.KCS.status = io.cards[3].bytes[2].bits[4].status;
		$scope.KCV.status = io.cards[3].bytes[2].bits[5].status;
		$scope.KCH.status = io.cards[3].bytes[2].bits[6].status;
		$scope.TCR.status = io.cards[3].bytes[2].bits[7].status;
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


