google.load('visualization', '1', {packages: ['corechart']});
/*
google.setOnLoadCallback(function() {
	angular.bootstrap(document.body, ['map']);
});
*/
var app = angular.module('mapApp', ['ws.blink']);

app.directive('chart', function() { 

	return {
		restrict: 'EA',
//		replace: true,
//		transclude: true,
//		scope: {
//			data: '=chartData'
//		},
//		template: '<div ng-transclude></div>',
		link: function(scope, element, attrs) {
			scope.$watch('data', function(data) {
				if(data instanceof Array && data.length == 4) {										
					var options = {
						title: 'Occupancy',
						colors: ['#00FF00', '#FF0000', '#FF00FF'],
						height: 350,
						width: 700,
						is3D: true
					};
					var data = google.visualization.arrayToDataTable([
						['Status', 'Spaces'],
						//['Total', data[0]],
						['Free', data[1]],
						['Busy', data[2]],
						['Locked', data[3]]
					]);
					var chart = new google.visualization.PieChart(element[0]);
					chart.draw(data, options);
				}
			});
		}
	}
});

app.factory('socket', function($rootScope){
	
	var socket = io.connect('http://www.sotefinservice.com:3005/map/statistics');
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

	socket.emit('map:statistics');
	
	socket.on('map:statistics', function (data) {
		
		console.log('from map:statistics : Received JSON data :\n' + data.map);
		var map = JSON.parse(data.map);
		$scope.data = map;
	});
});
