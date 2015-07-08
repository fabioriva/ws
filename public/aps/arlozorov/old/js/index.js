google.load('visualization', '1', {packages: ['corechart']});

//google.setOnLoadCallback(function() {
//	angular.bootstrap(document.body, ['index']);
//});

var app = angular.module('indexApp', ['ws.blink']);

app.directive('chart1', function() { 

	return {
		restrict: 'EA',
		link: function(scope, element, attrs) {
			scope.$watch('dat_01', function(data) {
				if (data != undefined) {		

					var options = {
						title: data.title,
						//colors: ['#00FF00'],
						height: 480,
						width: 1024,
						hAxis: {
							title: 'Time of Day',
							//format: 'HH:mm', //'h:mm a',
							//gridlines: {count: 24}
						},
						vAxis: {
							title: 'Number of Operations'
						}
						//bar: {groupWidth: "80%"}
					};
					var data_ = new google.visualization.DataTable(data.src);
					var chart = new google.visualization.ColumnChart(element[0]);
					chart.draw(data_, options);
				}
			});
		}
	}
});

app.directive('chart2', function() { 

	return {
		restrict: 'EA',
		link: function(scope, element, attrs) {
			scope.$watch('dat_02', function(data) {
				if (data != undefined) {		
					
					var options = {
						title: data.title,
						//colors: ['#00FF00'],
						height: 480,
						width: 1024,
						hAxis: {
							title: 'Day of the Week',
							//format: 'HH:mm', //'h:mm a',
							//gridlines: {count: 24}
						},
						vAxis: {
							title: 'Number of Operations'
						}
					};
					var data_ = new google.visualization.DataTable(data.src);
					var chart = new google.visualization.ColumnChart(element[0]);
					chart.draw(data_, options);
				}
			});
		}
	}
});

app.directive('chart3', function() { 

	return {
		restrict: 'EA',
		link: function(scope, element, attrs) {
			scope.$watch('data', function(data) {
				if (data != undefined) {								
					var options = {
						title: 'Occupancy\nTotal spaces : ' + data.total,
						colors: ['#00FF00', '#FF0000', '#FF00FF'],
						height: 350,
						width: 600,
						is3D: true
					};
					var data = google.visualization.arrayToDataTable([
						['Status', 'Spaces'],
						['Free: ' + data.free, data.free],
						['Busy: ' + data.busy, data.busy],
						['Lock: ' + data.lock, data.lock]
					]);
					var chart = new google.visualization.PieChart(element[0]);
					chart.draw(data, options);
				}
			});
		}
	}
});

app.directive('chart4', function() { 

	return {
		restrict: 'EA',
		link: function(scope, element, attrs) {
			scope.$watch('dat_04', function(data) {
				if (data != undefined) {	
					
					var options = {
						title: data.title,
						colors: ['#FF0000'],
						height: 480,
						width: 1024,
						hAxis: {
							title: 'Alarm Id',
							//format: 'HH:mm', //'h:mm a',
							//gridlines: {count: 24}
						},
						vAxis: {
							title: 'Number of Alarms',
							subtitle: 'Based on most recent and previous census data'
						}
						//is3D: false
					};
					var data_ = new google.visualization.DataTable(data.src);
					var chart = new google.visualization.ColumnChart(element[0]);
					chart.draw(data_, options);
				}
			});
		}
	}
});


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
		console.log('from statistics:map : Received JSON data :\n' + data.map);
		var map = JSON.parse(data.map);
		$scope.data = map;
	});
	
	socket.on('statistics:daily', function (data) {
		$scope.dat_01 = data.chart_data;
	});
	
	socket.on('statistics:weekly', function (data) {
		$scope.dat_02 = data.chart_data;
	});
	
	socket.on('statistics:alarm:weekly', function (data) {
		$scope.dat_04 = data.chart_data;
	});
	
});
