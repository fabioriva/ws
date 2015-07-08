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
	
	$("#edit-map-modal").modal({
      "backdrop"  : "static",
      "keyboard"  : true,
      "show"      : false
    });
	
	$("#edit-map-modal").on('shown.bs.modal', function () {
		$('#map-edit-card')
			.attr('placeholder', 'Enter card number ( 1 - 9999 )')
			.val('')
			.focus()
			.blur();
	});
});

var app = angular.module('mapApp', ['ws.blink']);

app.factory('socket', function($rootScope){
	
	var socket = io.connect('http://www.sotefinservice.com:3005/map');
	//var socket = io.connect('http://ws.ubuntu:3005/map');
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

app.controller('mapCtrl', function($scope, socket) {
	
	socket.emit('map:size');

	socket.on('map:paint', function (data) {
		console.log('from map:paint : Received JSON data :\n' + data.map);
		var map = JSON.parse(data.map);
		$scope.map = map;
	});
	
	socket.on('map:size', function (data) {
		console.log('from map:size : Received JSON data :\n' + data.map);
		var map = JSON.parse(data.map);
		$scope.map = map;
	});
	
	$scope.view1 = true;
	$scope.view2 = false;
	
	$scope.changeView = function(view) {
		switch(view) {
			case 1:
				$scope.view1 = true;
				$scope.view2 = false;
				break;
			case 2:
				$scope.view1 = false;
				$scope.view2 = true;
				break;
		}
	};
	
	$scope.stallClass = function(status) {
	
		switch (status) {
			case 1:
				return 's s-size';
			case 2:
				return 's s-size';
			case 3:
				return 's s-size';
			case 4:
				return 's s-size';
			default:
				return 's s-size';
		}
	}	
	
	$scope.stallHtml = function(nr, status, Offset) {
		
		if($scope.view1) {
			return nr + Offset;
		} else {
			switch (status) {
				case 1:
					return status;
				case 2:
					return status;
				case 3:
					return status;
				case 4:
					return status;
				default:
					return status;
			}
		}
	};
	
	$scope.stallTitle = function(nr, status, date, time) {
		
		switch (status) {
			case 1:
				return 'Size: type 1';
			case 2:
				return 'Size: type 1';
			case 3:
				return 'Size: type 1';
			case 4:
				return 'Size: type 1';
			default:
				return 'Size: type 1';
		}
	};

});
