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

	$("#EHP").popover({
		html: 'true',
        placement: 'bottom',
		trigger: 'hover',
		title: '<strong>Sensor EHP<strong>',
		content: function () {
			return $('#popover-EHP').html();
		}
    });
	
	$("#FTXV").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor FTXV<strong>',
		content: function () {
			return $('#popover-FTXV').html();
		}
    });
	
	$("#FTXH").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor FTXH<strong>',
		content: function () {
			return $('#popover-FTXH').html();
		}
    });
	
	$("#FEMV-E").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor FEMV<strong>',
		content: function () {
			return $('#popover-FEMV-E').html();
		}
    });
	
	$("#FEMV-R").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor FEMV<strong>',
		content: function () {
			return $('#popover-FEMV-R').html();
		}
    });
	
	$("#FEMH-E").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor FEMH<strong>',
		content: function () {
			return $('#popover-FEMH-E').html();
		}
    });
	
	$("#FEMH-R").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor FEMH<strong>',
		content: function () {
			return $('#popover-FEMH-R').html();
		}
    });
	
	$("#MV").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor MV<strong>',
		content: function () {
			return $('#popover-MV').html();
		}
    });
	
	$("#MH").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor MH<strong>',
		content: function () {
			return $('#popover-MH').html();
		}
    });
	
	$("#ES").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor ES<strong>',
		content: function () {
			return $('#popover-ES').html();
		}
    });
	
	$("#EH").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor EH<strong>',
		content: function () {
			return $('#popover-EH').html();
		}
    });
	
	$("#EBV").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor EBV<strong>',
		content: function () {
			return $('#popover-EBV').html();
		}
    });
	
	$("#EBH").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor EBH<strong>',
		content: function () {
			return $('#popover-EBH').html();
		}
    });
	
	$("#EAL").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor EAL/EAM<strong>',
		content: function () {
			return $('#popover-EAL').html();
		}
    });
	
	$("#EAR").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor EAR/EAM<strong>',
		content: function () {
			return $('#popover-EAR').html();
		}
    });
	
	$("#EPL").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor EPL/EPM<strong>',
		content: function () {
			return $('#popover-EPL').html();
		}
    });
	
	$("#EPR").popover({
		html: 'top',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor EPR/EPM<strong>',
		content: function () {
			return $('#popover-EPR').html();
		}
    });
	
	$("#M1").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Motor M1<strong>',
		content: function () {
			return $('#popover-M1').html();
		}
    });
	
	$("#M2").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Motor M2<strong>',
		content: function () {
			return $('#popover-M2').html();
		}
    });
	
	$("#M3").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Motor M3<strong>',
		content: function () {
			return $('#popover-M3').html();
		}
    })
	
	$("#M4").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Motor M4<strong>',
		content: function () {
			return $('#popover-M4').html();
		}
    })
	
	$("#M5").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Motor M5<strong>',
		content: function () {
			return $('#popover-M5').html();
		}
    })
	
});

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

var app = angular.module('shuttleApp', ['ngSanitize', 'ws.blink']);

app.factory('socket1', function($rootScope){

	var socket = io.connect('http://www.sotefinservice.com:3001/shuttle');
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

	var socket = io.connect('http://www.sotefinservice.com:3001/plc_io/sh');
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

app.controller('shuttleCtrl', function($sanitize, $scope, $sce, socket1, socket2) {

	$scope.icon_rdy = '<span class="glyphicon glyphicon-minus"></span>';
	$scope.icon_bwd = '<span class="glyphicon glyphicon-backward"></span>';
	$scope.icon_fwd = '<span class="glyphicon glyphicon-forward"></span>';
	$scope.icon_down = '<span class="glyphicon glyphicon-arrow-down"></span>';
	$scope.icon_left = '<span class="glyphicon glyphicon-arrow-left"></span>';
	$scope.icon_right = '<span class="glyphicon glyphicon-arrow-right"></span>';
	$scope.icon_up = '<span class="glyphicon glyphicon-arrow-up"></span>';
	
	$scope.sh_show = true;
	$scope.silomat_show = true;
	
	socket1.on('refresh:shuttles', function (data) {
		//console.log('Received JSON data :\n' + data.shuttles);
		$scope.system = JSON.parse(data.shuttles);
		$scope.sh1 = $scope.system.shuttles[0];
		$scope.sh2 = $scope.system.shuttles[1];
		$scope.sh3 = $scope.system.shuttles[2];
		$scope.sh4 = $scope.system.shuttles[3];
		$scope.sh5 = $scope.system.shuttles[4];
		$scope.sh6 = $scope.system.shuttles[5];
		$scope.sh7 = $scope.system.shuttles[6];
		$scope.sh8 = $scope.system.shuttles[7];
		$scope.sh9 = $scope.system.shuttles[8];
		$scope.sh10 = $scope.system.shuttles[9];
		$scope.sh11 = $scope.system.shuttles[10];
		$scope.sh12 = $scope.system.shuttles[11];
		
	});
		
	socket2.on('refresh:plcio-sh', function (data) {
		//console.log('Received JSON data :\n' + JSON.stringify(data.plcio));
		$scope.sh1_card = data.plcio[0];
		$scope.sh2_card = data.plcio[1];
		$scope.sh3_card = data.plcio[2];
		$scope.sh4_card = data.plcio[3];
		$scope.sh5_card = data.plcio[4];
		$scope.sh6_card = data.plcio[5];
		$scope.sh7_card = data.plcio[6];
		$scope.sh8_card = data.plcio[7];
		$scope.sh9_card = data.plcio[8];
		$scope.sh10_card = data.plcio[9];
		$scope.sh11_card = data.plcio[10];
		$scope.sh12_card = data.plcio[11];
		
	});
	
	$scope.motorStatus = function (status) {
		switch (status) {
			case 0:
				return $sanitize($scope.icon_rdy);
			case 1:
				return $sanitize($scope.icon_right);
			case 2:
				return $sanitize($scope.icon_left);
		}
	};
	
	$scope.motorStatusClass = function (status) {
		if (status) {
			return 'warning';
		}
	};
	
	$scope.sensorStatus = function (status) {
		if (status) {
			return 'l-true';
		} else {
			return 'l-false';
		}
	};
	
	$scope.shuttleClass = function (status) {
		if (status) {
			return 'label label-warning';
		} else {
			return 'label label-default';
		}
	};
	
	$scope.shuttleStatus = function (status) {
		if (status) {
			return 'System Ready';
		} else {
			return 'System Not Ready';
		}
	};
	
});
