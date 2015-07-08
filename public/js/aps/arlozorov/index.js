$(document).ready(function () {
	activeTab('tab-chart', 0);
});

var app = angular.module('indexApp', ['blink', 'chart']);

app.factory('socket', function($rootScope){
	
	var socket = io.connect('//www.sotefinservice.com:3003/statistics');
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

app.controller('indexCtrl', function($scope, socket) {
	
	socket.emit('statistics:map');
	
	socket.on('statistics:map', function (data) {
		var map = JSON.parse(data.map);
		$scope.occupancy = map;
	});
	
	socket.on('statistics:daily', function (data) {
		$scope.daily = data.chart_data;
	});
	
	socket.on('statistics:weekly', function (data) {
		$scope.weekly = data.chart_data;
	});
	
	socket.on('statistics:alarm:weekly', function (data) {
		$scope.alarm = data.chart_data;
	});
	
});
