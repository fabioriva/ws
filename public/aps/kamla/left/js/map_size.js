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

});

var app = angular.module('mapApp', ['ws.blink']);

app.factory('socket', function($rootScope){
	
	var socket = io.connect('http://www.sotefinservice.com:3001/map');
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
		console.log('Received JSON data :\n' + data.map);
		var map = JSON.parse(data.map);
		$scope.map = map;
	});
	
	socket.on('map:size', function (data) {
		console.log('from map:size : Received JSON data :\n' + data.map);
		var map = JSON.parse(data.map);
		$scope.map = map;
	});
	
	socket.on('map:size:edit', function (data) {
		console.log('from map:size:edit : Received JSON data :\n' + data.map);
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
				return 's s-size-1';
			case 2:
				return 's s-size-2';
			case 3:
				return 's s-size-3';
			case 4:
				return 's s-size-4';
			case 5:
				return 's s-size-5';
			case 6:
				return 's s-size-6';
			case 7:
				return 's s-size-1';
			case 8:
				return 's s-size-2';
			case 9:
				return 's s-size-3';
			case 10:
				return 's s-size-4';
			case 11:
				return 's s-size-5';
			case 12:
				return 's s-size-6';
			default:
				return 's s-size';
		}
	}
	
	$scope.stallHtml = function(nr, status, Offset) {
		//var checkbox = document.getElementById("showStall");
		//if(checkbox.checked) {
		if($scope.view1) {
			return nr + Offset;
		} else {
			return status;
		}
	};
	
	$scope.stallTitle = function(nr, status, date, time) {
		switch (status) {
			case 1:
				return 'Type 1:\nLow\Short\Normal';
			case 2:
				return 'Type 2:\nLow\Short\Large';
			case 3:
				return 'Type 3:\nLow\Long\Normal';
			case 4:
				return 'Type 4:\nLow\Long\Large';
			case 5:
				return 'Type 5:\nMedium\Short\Normal';
			case 6:
				return 'Type 6:\nMedium\Short\Large';
			case 7:
				return 'Type 7:\nMedium\Long\Normal';
			case 8:
				return 'Type 8:\nMedium\Long\Large';
			case 9:
				return 'Type 9:\nHigh\Short\Normal';
			case 10:
				return 'Type 10:\nHigh\Short\Large';
			case 11:
				return 'Type 11:\nHigh\Long\Normal';
			case 12:
				return 'Type 12:\nHigh\Long\Large';
			default:
				return '';
		}
	};
	
	$scope.stallEdit = function(nr) {
		$('#map-edit-stall').val(nr);
		$('#edit-map-modal').modal('show');
	};
	
	$scope.stallSize = function() {
		var stall = $('#map-edit-stall').val();
		var size = $('#map-edit-size input:radio:checked').val();
		if($.isNumeric( size )) {
			var data = { nr: stall, value: size };
			socket.emit('map:size:edit', { data: JSON.stringify(data) });
			$('#edit-map-modal').modal('hide');
		} else {
			//$('#edit-map-modal').modal('hide');
			//alert('Select a valid size type');
		}
	};

});

