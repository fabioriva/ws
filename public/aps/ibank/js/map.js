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
	
	var socket = io.connect('http://www.sotefinservice.com:3004/map');
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
	
	socket.emit('map:read', { level: 0 });

	socket.on('map:paint', function (data) {
		console.log('from map:paint : Received JSON data :\n' + data.map);
		var map = JSON.parse(data.map);
		$scope.map = map;
	});
	
	socket.on('map:read', function (data) {
		//console.log('from map:read : Received JSON data :\n' + data.map);
		var map = JSON.parse(data.map);
		$scope.map = map;
		// for (var l=0; l<map.levels.length; l++) {
			// for (var s=0; s<map.levels[l].stalls.length; s++) {
				// $scope.map.levels[l].stalls[s].status = map.levels[l].stalls[s].status;
				// $scope.map.levels[l].stalls[s].date = map.levels[l].stalls[s].date;
				// $scope.map.levels[l].stalls[s].time = map.levels[l].stalls[s].time;
			// }
		// }
	});
	
	socket.on('map:read:edit', function (data) {
		//console.log('from map:read : Received JSON data :\n' + data.map);
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
			case 0:
				return 's s-free';
//			case 65533:
//				return 's s-papa';
			case 998:
				return 's s-rsvd';
			case 999:
				return 's s-lock';
			default:
				return 's s-busy';
		}	
	};	
	
	$scope.stallHtml = function(nr, status, Offset) {
		//var checkbox = document.getElementById("showStall");
		//if(checkbox.checked) {
		if($scope.view1) {
			return nr + Offset;
		};
		if($scope.view2) {
			if(status == 0) {
				return '0';
//			} else if (status == 65533) {
//				return 'Busy';
			} else if (status == 998) {
				return 'Rsvd';
			} else if (status == 999) {
				return 'Lock';
			} else {
				return status;
			}
		};
	};
	
	$scope.stallTitle = function(nr, status, date, time) {
		if (status == 0) {
			return 'Stall number ' + nr + ' is available';
//		} else if (status == 65533) {
//			return 'Stall number ' + nr + ' is reserved';
		} else if (status == 998) {
			return 'Stall number ' + nr + ' is reserved';
		} else if (status == 999) {
			return 'Stall number ' + nr + ' is locked';
		} else {
			return 'Stall number ' + nr + ' is busy with card ' + status + '\nsince ' + date + ' ' + time;
		}
	};
	
	$scope.stallEdit = function(nr) {
		$('#map-edit-stall').val(nr);
		$('#edit-map-modal').modal('show');
	};
	
	$scope.stallCard = function() {
		var stall = $('#map-edit-stall').val();
		var card = $('#map-edit-card').val();
		if($.isNumeric( card )) {
			var data = { nr: stall, value: card };
			socket.emit('map:read:edit', { data: JSON.stringify(data) });
			$('#edit-map-modal').modal('hide');
		} else {
			//$('#edit-map-modal').modal('hide');
			//alert('Insert a valid card number (1 - 9999)');
		}
	};
	
	$scope.stallLock = function() {
		var stall = $('#map-edit-stall').val();
		var card = 999;
		var data = { nr: stall, value: card };
		socket.emit('map:read:edit', { data: JSON.stringify(data) });
		$('#edit-map-modal').modal('hide');
	};
	
	$scope.stallClear = function() {
		var stall = $('#map-edit-stall').val();
		var card = 0;
		var data = { nr: stall, value: card };
		socket.emit('map:read:edit', { data: JSON.stringify(data) });
		$('#edit-map-modal').modal('hide');
	};

});
