google.load('visualization', '1', {packages: ['corechart']});

google.setOnLoadCallback(function() {
	angular.bootstrap(document.body, ['map']);
});

var app = angular.module('alarmApp', ['ws.blink']);

app.directive('chart1', function() { 

	return {
		restrict: 'EA',
//		replace: true,
//		transclude: true,
//		scope: {
//			data: '=chartData'
//		},
//		template: '<div ng-transclude></div>',
		link: function(scope, element, attrs) {
			scope.$watch('dat_01', function(data) {
			//scope.$watch( function() {
				//if(data instanceof Array && data.length == 4) {	

					var options = {
						title: data.title,	//'Alarm statistics',
						//colors: ['#00FF00'],
						height: 250,
						width: 800,
						//is3D: false
					};
					var data_ = new google.visualization.DataTable(data.src);
					var chart = new google.visualization.ColumnChart(element[0]);
					chart.draw(data_, options);
				//}
			});
		}
	}
});

app.directive('chart2', function() { 

	return {
		restrict: 'EA',
//		replace: true,
//		transclude: true,
//		scope: {
//			data: '=chartData'
//		},
//		template: '<div ng-transclude></div>',
		link: function(scope, element, attrs) {
			scope.$watch('dat_02', function(data) {
			//scope.$watch( function() {
				//if(data instanceof Array && data.length == 4) {	
					
					var options = {
						title: data.title,	//'Alarm statistics',
						//colors: ['#00FF00'],
						height: 250,
						width: 800,
						//is3D: false
					};
					var data_ = new google.visualization.DataTable(data.src);
					var chart = new google.visualization.ColumnChart(element[0]);
					chart.draw(data_, options);
				//}
			});
		}
	}
});

app.factory('socket', function($rootScope){
	
	var socket = io.connect('http://www.sotefinservice.com:3003/alarm/statistics');
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

app.controller('alarmCtrl', function($scope, socket) {
	
	socket.on('refresh:query_01', function (data) {
		// console.log('Received JSON data :\n' + data.query);
		// console.log('Received JSON data :\n' + JSON.parse(data.query));
		// var q = JSON.parse(data.query)
		// console.log(q[0]);
		// q.forEach(function(row){
			// console.log(row.alarm, row.alarmCount);
		// });
		var a = [];
		var q = JSON.parse(data.query);
		q.forEach(function(row){
			a.push( {c: [{v: row.alarm, f: null}, {v: row.alarmCount, f: null}]} );
		});
		//console.log(a);
		$scope.dat_01 = { title: 'title 1',
					src:
					{
						cols: [
							{id: 'alarm', label: 'Alarm Id', type: 'string'},
							{id: 'alarmCount', label: 'Alarm count', type: 'number'}
						],
						rows: a
					}
				};
	});
	
	socket.on('refresh:query_02', function (data) {
		var a = [];
		var q = JSON.parse(data.query);
		q.forEach(function(row){
			a.push( {c: [{v: row.alarm}, {v: row.alarmCount, f: null}]} );
		});
		$scope.dat_02 = {
			title: 'title 2',
			src: {
				cols: [
					{ id: 'alarm', label: 'Alarm Id', type: 'string' },
					{ id: 'alarmCount', label: 'Alarm count', type: 'number' }
				],
				rows: a
			}
		};
	});
});
