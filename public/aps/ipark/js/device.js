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
	
	$("#exit-modal").modal({
      "backdrop"  : "static",
      "keyboard"  : true,
      "show"      : false
    });
	
	$("#exit-modal").on('shown.bs.modal', function () {
		$('#exit-card')
//			.attr('placeholder', 'Enter card number ( 1 - 9999 )')
			.val('')
			.focus()
			.blur();
	});

});

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

	var socket = io.connect('http://www.sotefinservice.com:3005/devices');
	//var socket = io.connect('http://ws.ubuntu:3005/devices');
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

app.controller('deviceCtrl', function($scope, socketData, socketAlarm) {

	/*socketAlarm.on('refresh:alarms', function (data) {
		console.log('Alarms', JSON.stringify(data.alarms));
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
		if ($scope.al_1.active) return "/ipark/alarm/1";
		if ($scope.al_2.active) return "/ipark/alarm/2";
		if ($scope.al_3.active) return "/ipark/alarm/3";
	};*/
			
	socketData.on('devices:paint', function (data) {
		//console.log('(1) Received JSON data :\n' + data.devices);
		$scope.system = JSON.parse(data.devices);
    });

	socketData.on('devices:refresh', function (data) {
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
	
	$scope.infoStatus = function (status) {
		if (status) {
			return true;
		} else {
			return false;
		}
	};
	
	$scope.exitRequest = function() {
		//$('#exit-stall').val(nr);
		$('#exit-modal').modal('show');
	};
	
	$scope.exitCard = function() {
		var stall = 0;	//$('#exit-stall').val();
		var card = $('#exit-card').val();
		if($.isNumeric( card )) {
			var data = { nr: stall, value: card };
			socketData.emit('devices:exit', { data: JSON.stringify(data) });
			$('#exit-modal').modal('hide');
		} else {
			//$('#exit-modal').modal('hide');
			//alert('Insert a valid card number');
		}
	};

});
