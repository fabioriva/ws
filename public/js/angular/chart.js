'use strict';

google.load('visualization', '1', {packages: ['corechart']});

angular.module('chart', [])

	// Pie Chart directive
	.directive('pieChart', function() { 

		return {
			restrict: 'E',
			link: function(scope, element, attributes) {
				
				scope.$watch(attributes.data, function(data) {
					if (data) {
						var options = {
							title: 'Total spaces : ' + data.total,
							colors: ['#00FF00', '#FF0000', '#FF00FF'],
							height: 400,
							width: 600,
							// backgroundColor: {
								// stroke: "#000",
								// strokeWidth: 1,
								// fill: "#fff"
							// },
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
	})
	// Bar Chart directive
	.directive('barChart', function() { 
		
		return {
			restrict: 'E',
			link: function (scope, element, attributes) {
				
				scope.$watch(attributes.data, function(data) {
					if (data) {
						var options = {
							title: data.title,
							colors: ['#0000FF', '#FF0000'],
							height: 450,
							width: 1024,
							chartArea: {
								backgroundColor: {
									stroke: '#000',
									strokeWidth: 1
								}
							},
							hAxis: {
								title: data.hAxis.title,
								//format: 'decimal',
								//gridlines: {count: 24}
							},
							vAxis: {
								title: data.vAxis.title,
								format: '###',
								textPosition: 'out'
							}
						};
						var cdata = new google.visualization.DataTable(data.src);
						var chart = new google.visualization.ColumnChart(element[0]);
						chart.draw(cdata, options);
					}
				});
			}
		}
	});
	