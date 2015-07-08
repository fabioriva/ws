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
	
	//scrollBottom('.ws-log');
	
	/*var ws_3003 = io.connect('//www.sotefinservice.com:3003/ws/diag');
	ws_3003.on('diag', function (data) {
		setLog(data);	
    });*/
	
	$("#EPZV").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor EPZV<strong>',
		content: function () {
			return $('#popover-EPZV').html();
		}
    });
	
	$("#EPZH").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor EPZH<strong>',
		content: function () {
			return $('#popover-EPZH').html();
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
	
	$("#ECA").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor ECA<strong>',
		content: function () {
			return $('#popover-ECA').html();
		}
    });
	
	$("#ECB").popover({
		html: 'true',
        placement: 'top',
		trigger: 'hover',
		title: '<strong>Sensor ECB<strong>',
		content: function () {
			return $('#popover-ECB').html();
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
	
});

function setLog (data) {
	var msg = $('<p>' + data.log + '</p>');
	msg.hide();
	$('.ws-log').prepend(msg);
	msg.show('slow');
}

var app = angular.module('shuttleApp', ['ngSanitize', 'ws.blink']);

app.factory('socket1', function($rootScope){

	var socket = io.connect('//www.sotefinservice.com:3003/shuttle');
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
		
	});
		
	socket2.on('refresh:plcio', function (data) {
		//console.log('Received JSON data :\n' + JSON.stringify(data.plcio[0]));
		$scope.sh1_card = data.plcio[0];
		//console.log('Received JSON data :\n' + JSON.stringify(data.plcio[1][0]));
		$scope.sh2_card = data.plcio[1];
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
			return 'sensor-on';
		} else {
			return 'sensor-off';
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

