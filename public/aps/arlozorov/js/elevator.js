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
	
	$scope.l1 = '<span class="fa fa-arrow-up fa-2x"></span>';
	$scope.l2 = '<span class="fa fa-arrow-down fa-2x"></span>';
	$scope.l3 = '<span class="fa fa-circle fa-2x"></span>';
	$scope.l4 = '<span class="fa fa-arrow-left fa-2x"></span>';
	$scope.l5 = '<span class="fa fa-arrow-right fa-2x"></span>';
	
	socket1.on('refresh:motors-1', function (data) {
		//console.log('Received JSON data :\n' + data);
		var motors = JSON.parse(data.motors);
		
		$scope.M0 = motors.motor[0];
	});
	
	socket1.on('refresh:motors-2', function (data) {
		//console.log('Received JSON data :\n' + data);
		var motors = JSON.parse(data.motors);
		
		$scope.M1 = motors.motor[0];
		$scope.M2 = motors.motor[1];
		$scope.M3 = motors.motor[2];
		$scope.M4 = motors.motor[3];
	});
	
	socket2.on('paint:plcio-io1', function (data) {
		//console.log(data.plcio);
		var io = JSON.parse(data.plcio);
		
		// Elevator
		$scope.RTA = io.cards[2].bytes[0].bits[5];
		$scope.KBA = io.cards[2].bytes[0].bits[6];
		$scope.SQA = io.cards[2].bytes[0].bits[7];
		$scope.IV1 = io.cards[1].bytes[3].bits[0];
		
		// Locking Pins
		$scope.AMM1 = io.cards[0].bytes[2].bits[6];
		$scope.AMM2 = io.cards[0].bytes[2].bits[6];
		$scope.AMM3 = io.cards[0].bytes[2].bits[7];
		$scope.AMM4 = io.cards[0].bytes[2].bits[7];
		
		$scope.EOM1 = io.cards[1].bytes[1].bits[0];
		$scope.EZM1 = io.cards[1].bytes[1].bits[1];
		$scope.EOM2 = io.cards[1].bytes[1].bits[2];
		$scope.EZM2 = io.cards[1].bytes[1].bits[3];
		$scope.EOM3 = io.cards[1].bytes[1].bits[4];
		$scope.EZM3 = io.cards[1].bytes[1].bits[5];
		$scope.EOM4 = io.cards[1].bytes[1].bits[6];
		$scope.EZM4 = io.cards[1].bytes[1].bits[7];
		
		$scope.SMA1 = io.cards[3].bytes[1].bits[0];
		$scope.SMB1 = io.cards[3].bytes[1].bits[1];
		$scope.SMA2 = io.cards[3].bytes[1].bits[2];
		$scope.SMB2 = io.cards[3].bytes[1].bits[3];
		$scope.SMA3 = io.cards[3].bytes[1].bits[4];
		$scope.SMB3 = io.cards[3].bytes[1].bits[5];
		$scope.SMA4 = io.cards[3].bytes[1].bits[6];
		$scope.SMB4 = io.cards[3].bytes[1].bits[7];		
		
	});
	
	socket2.on('refresh:plcio1', function (data) {
		//console.log(data.plcio);
		var io = JSON.parse(data.plcio);
		
		// Elevator
		$scope.RTA.status = io.cards[2].bytes[0].bits[5].status;
		$scope.KBA.status = io.cards[2].bytes[0].bits[6].status;
		$scope.SQA.status = io.cards[2].bytes[0].bits[7].status;
		$scope.IV1.status = io.cards[1].bytes[3].bits[0].status;
		
		$scope.AMM1.status = io.cards[0].bytes[2].bits[6].status;
		$scope.AMM2.status = io.cards[0].bytes[2].bits[6].status;
		$scope.AMM3.status = io.cards[0].bytes[2].bits[7].status;
		$scope.AMM4.status = io.cards[0].bytes[2].bits[7].status;
		
		$scope.EOM1.status = io.cards[1].bytes[1].bits[0].status;
		$scope.EZM1.status = io.cards[1].bytes[1].bits[1].status;
		$scope.EOM2.status = io.cards[1].bytes[1].bits[2].status;
		$scope.EZM2.status = io.cards[1].bytes[1].bits[3].status;
		$scope.EOM3.status = io.cards[1].bytes[1].bits[4].status;
		$scope.EZM3.status = io.cards[1].bytes[1].bits[5].status;
		$scope.EOM4.status = io.cards[1].bytes[1].bits[6].status;
		$scope.EZM4.status = io.cards[1].bytes[1].bits[7].status;
		
		$scope.SMA1.status = io.cards[3].bytes[1].bits[0].status;
		$scope.SMB1.status = io.cards[3].bytes[1].bits[1].status;
		$scope.SMA2.status = io.cards[3].bytes[1].bits[2].status;
		$scope.SMB2.status = io.cards[3].bytes[1].bits[3].status;
		$scope.SMA3.status = io.cards[3].bytes[1].bits[4].status;
		$scope.SMB3.status = io.cards[3].bytes[1].bits[5].status;
		$scope.SMA4.status = io.cards[3].bytes[1].bits[6].status;
		$scope.SMB4.status = io.cards[3].bytes[1].bits[7].status;
	
	});
	
	socket2.on('paint:plcio-io2', function (data) {
		//console.log(data.plcio);
		var io = JSON.parse(data.plcio);
		// Elevator
		$scope.ASBK = io.cards[3].bytes[0].bits[2];
		$scope.FSBK = io.cards[3].bytes[0].bits[4];
	});
	
	socket2.on('refresh:plcio-io2', function (data) {
		//console.log(data.plcio);
		var io = JSON.parse(data.plcio);
		// Elevator
		$scope.ASBK.status = io.cards[3].bytes[0].bits[2].status;
		$scope.FSBK.status = io.cards[3].bytes[0].bits[4].status;
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