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
	
	$scope.l1 = '<span class="fa fa-arrow-up fa-2x"></span>';
	$scope.l2 = '<span class="fa fa-arrow-down fa-2x"></span>';
	$scope.l3 = '<span class="fa fa-circle fa-2x"></span>';
	$scope.l4 = '<span class="fa fa-arrow-left fa-2x"></span>';
	$scope.l5 = '<span class="fa fa-arrow-right fa-2x"></span>';
	
//	socket1.on('refresh:motors-1', function (data) {
		//console.log('Received JSON data :\n' + data);
//		var motors = JSON.parse(data.motors);
//	});
	
	socket1.on('refresh:motors-2', function (data) {
		//console.log('Received JSON data :\n' + data);
		var motors = JSON.parse(data.motors);
		
		$scope.M0 = motors.motor[8];	// Door
		$scope.M1 = motors.motor[9];	// Ceiling 1
		$scope.M2 = motors.motor[10];	// Ceiling 2
		$scope.M3 = motors.motor[11];	// Lock 1
		$scope.M4 = motors.motor[12];	// Lock 2

	});
	
	socket2.on('paint:plcio-io1', function (data) {
		//console.log(data.plcio);
		var io = JSON.parse(data.plcio);
		
		// Ceiling
		$scope.EFA1 = io.cards[0].bytes[3].bits[0];
		$scope.EFB1 = io.cards[0].bytes[3].bits[1];
		$scope.EFA2 = io.cards[0].bytes[3].bits[2];
		$scope.EFB2 = io.cards[0].bytes[3].bits[3];
		$scope.ATV = io.cards[0].bytes[3].bits[4];
		
		$scope.STA1 = io.cards[4].bytes[3].bits[0];
		$scope.STB1 = io.cards[4].bytes[3].bits[1];
		$scope.STA2 = io.cards[4].bytes[3].bits[2];
		$scope.STB2 = io.cards[4].bytes[3].bits[3];		
		$scope.STV = io.cards[4].bytes[3].bits[4];
		
		// Ceiling Locking Pins
		$scope.AMT1 = io.cards[0].bytes[2].bits[0];
		$scope.EOT1 = io.cards[0].bytes[2].bits[1];
		$scope.EZT1 = io.cards[0].bytes[2].bits[2];
		$scope.AMT2 = io.cards[0].bytes[2].bits[3];
		$scope.EOT2 = io.cards[0].bytes[2].bits[4];
		$scope.EZT2 = io.cards[0].bytes[2].bits[5];
		
		$scope.SMTA1 = io.cards[4].bytes[2].bits[0];
		$scope.SMTB1 = io.cards[4].bytes[2].bits[1];
		$scope.SMTA2 = io.cards[4].bytes[2].bits[2];
		$scope.SMTB2 = io.cards[4].bytes[2].bits[3];	
		
		// Door
		$scope.APE = io.cards[2].bytes[1].bits[7];
		$scope.EOE = io.cards[2].bytes[2].bits[0];
		$scope.EZE = io.cards[2].bytes[2].bits[1];
		$scope.FBE = io.cards[2].bytes[2].bits[2];	
		$scope.SZE = io.cards[4].bytes[2].bits[6];
		$scope.SOE = io.cards[4].bytes[2].bits[7];
		
		// Sensors

		// Light Panel
		$scope.L1 = io.cards[3].bytes[3].bits[0];
		$scope.L2 = io.cards[3].bytes[3].bits[1];
		$scope.L3 = io.cards[3].bytes[3].bits[2];
		$scope.L4 = io.cards[3].bytes[3].bits[3];
		$scope.L5 = io.cards[3].bytes[3].bits[4];
	});
	
	socket2.on('refresh:plcio1', function (data) {
		//console.log(data.plcio);
		var io = JSON.parse(data.plcio);
		
		// Ceiling
		$scope.EFA1.status = io.cards[0].bytes[3].bits[0].status;
		$scope.EFB1.status = io.cards[0].bytes[3].bits[1].status;
		$scope.EFA2.status = io.cards[0].bytes[3].bits[2].status;
		$scope.EFB2.status = io.cards[0].bytes[3].bits[3].status;
		$scope.ATV.status = io.cards[0].bytes[3].bits[4].status;
		
		$scope.STA1.status = io.cards[4].bytes[3].bits[0].status;
		$scope.STB1.status = io.cards[4].bytes[3].bits[1].status;
		$scope.STA2.status = io.cards[4].bytes[3].bits[2].status;
		$scope.STB2.status = io.cards[4].bytes[3].bits[3].status;		
		$scope.STV.status = io.cards[4].bytes[3].bits[4].status;
		
		// Ceiling Locking Pins
		$scope.AMT1.status = io.cards[0].bytes[2].bits[0].status;
		$scope.EOT1.status = io.cards[0].bytes[2].bits[1].status;
		$scope.EZT1.status = io.cards[0].bytes[2].bits[2].status;
		$scope.AMT2.status = io.cards[0].bytes[2].bits[3].status;
		$scope.EOT2.status = io.cards[0].bytes[2].bits[4].status;
		$scope.EZT2.status = io.cards[0].bytes[2].bits[5].status;
		
		$scope.SMTA1.status = io.cards[4].bytes[2].bits[0].status;
		$scope.SMTB1.status = io.cards[4].bytes[2].bits[1].status;
		$scope.SMTA2.status = io.cards[4].bytes[2].bits[2].status;
		$scope.SMTB2.status = io.cards[4].bytes[2].bits[3].status;	
		
		// Door
		$scope.APE.status = io.cards[2].bytes[1].bits[7];
		$scope.EOE.status = io.cards[2].bytes[2].bits[0].status;
		$scope.EZE.status = io.cards[2].bytes[2].bits[1].status;	
		$scope.FBE.status = io.cards[2].bytes[2].bits[2].status;
		$scope.SZE.status = io.cards[4].bytes[2].bits[6].status;
		$scope.SOE.status = io.cards[4].bytes[2].bits[7].status;
		
		// Sensors
//		$scope.FBE.status = io.cards[2].bytes[2].bits[2].status;	
//		$scope.FPE.status = io.cards[2].bytes[2].bits[3].status;
		
		// Light Panel
		$scope.L1.status = io.cards[3].bytes[3].bits[0].status;
		$scope.L2.status = io.cards[3].bytes[3].bits[1].status;
		$scope.L3.status = io.cards[3].bytes[3].bits[2].status;
		$scope.L4.status = io.cards[3].bytes[3].bits[3].status;
		$scope.L5.status = io.cards[3].bytes[3].bits[4].status;
	
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
	
	$scope.getPanel = function (status, color) {
		if (status) {
			return color;
		}
	};
	
});