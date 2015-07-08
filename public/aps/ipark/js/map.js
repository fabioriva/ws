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
		//activeTab('tab-l-1');
	});
	
	socket.on('map:read', function (data) {
		console.log('from map:read : Received JSON data :\n' + data.map);
		var map = JSON.parse(data.map);
		$scope.map = map;
	});
	/*
	socket.on('refresh:map_B2', function (data) {
		//console.log('Received JSON data :\n' + data.map_B2);
		var map_B2 = JSON.parse(data.map_B2);
		$scope.colors = [];
		//for (var l=0; l<map.levels.length; l++) {   
			var l = 0;
			for (var s=0; s<map_B2.stalls.length; s++) {
	
				$scope.map.levels[l].stalls[s].status = map_B2.stalls[s].status;
				$scope.map.levels[l].stalls[s].date = map_B2.stalls[s].date;
				$scope.map.levels[l].stalls[s].time = map_B2.stalls[s].time;
				//console.log('Stall ' + $scope.map.levels[l].stalls[s].nr + ' >>> ' + $scope.map.levels[l].stalls[s].status + ':' + $scope.map.levels[l].stalls[s].date + ':' + $scope.map.levels[l].stalls[s].time);
				
				if(map_B2.stalls[s].status == 0) {
					$scope.colors.push("s-free");
				} else if (map_B2.stalls[s].status == 65533) {
					$scope.colors.push("s-papa");
				} else if (map_B2.stalls[s].status == 65534) {
					$scope.colors.push("s-rsvd");
				} else if (map_B2.stalls[s].status == 65535) {
					$scope.colors.push("s-lock");
				}
				else {
					$scope.colors.push("s-busy");
				}
			}
		//}
		//$scope.map = map;
		activeTab('tab-l-1');
	});
	*/
	
	$scope.view = 1;			// ng-model
	$scope.view1 = true;		// ng-checked
	$scope.view2 = false;		// ng-checked
	
	$scope.changeView = function(view) {
		$scope.view = view;
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
			case 65533:
				return 's s-papa';
			case 65534:
				return 's s-rsvd';
			case 65535:
				return 's s-lock';
			default:
				return 's s-busy';
		}	
	};
	
	$scope.stallHtml = function(nr, status, Offset) {

		/*if($scope.view1) {
			return nr + Offset;
		} else {
			if(status == 0) {
				return '0';
			} else if (status == 65533) {
				return 'Busy';
			} else if (status == 65534) {
				return 'Rsvd';
			} else if (status == 65535) {
				return 'Lock';
			} else {
				return status;
			}
		}*/
		
		switch($scope.view) {
			case 1:
				return nr + Offset;
				break;
			case 2:
				switch(status) {
					case 0:
						return 0;
						break;
					case 65533:
						return 'busy';
						break;
					case 65534:
						return 'rsvd';
						break;
					case 65535:
						return 'lock';
						break;
					default:
						return status;
				}
				break;
		}
	};
	
	$scope.stallTitle = function(nr, status, date, time) {
		if (status == 0) {
			return 'Stall number ' + nr + ' is available';
		} else if (status == 65533) {
			return 'Stall number ' + nr + ' is reserved';
		} else if (status == 65534) {
			return 'Stall number ' + nr + ' is reserved';
		} else if (status == 65535) {
			return 'Stall number ' + nr + ' is locked';
		} else {
			return 'Stall number ' + nr + ' is busy\nsince ' + date + ' ' + time;
		}
	};
	/* Edit Map functions */
	$scope.stallEdit = function(nr) {
		$('#map-edit-stall').val(nr);
		$('#edit-map-modal').modal('show');
	};
	
	$scope.stallCard = function() {
		var stall = $('#map-edit-stall').val();
		var card = $('#map-edit-card').val();
		if($.isNumeric( card )) {
			var data = { nr: stall, value: card };
			socket.emit('edit:map', { data: JSON.stringify(data) });
			$('#edit-map-modal').modal('hide');
		} else {
			//$('#edit-map-modal').modal('hide');
			//alert('Insert a valid card number (1 - 9999)');
		}
	};
	
	$scope.stallLock = function() {
		var stall = $('#map-edit-stall').val();
		var card = -1;
		var data = { nr: stall, value: card };
		socket.emit('edit:map', { data: JSON.stringify(data) });
		$('#edit-map-modal').modal('hide');
	};
	
	$scope.stallClear = function() {
		var stall = $('#map-edit-stall').val();
		var card = 0;
		var data = { nr: stall, value: card };
		socket.emit('edit:map', { data: JSON.stringify(data) });
		$('#edit-map-modal').modal('hide');
	};

});

