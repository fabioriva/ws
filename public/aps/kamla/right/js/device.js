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

	var socket = io.connect('http://www.sotefinservice.com:3002/devices');
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
/*
app.factory('socketLog', function($rootScope){

	var socket = io.connect('http://www.sotefinservice.com:3002');
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
*/
app.controller('deviceCtrl', function($scope, socketData/*, socketLog*/) {

	$scope.widget = { title: "This is <b>BOLD</b>!" };
	
	//socketLog.emit('get:log');
	/*
	socketLog.on('refresh:log', function (data) {
		//console.log(data.log);
		for(var i in data.log) {
			var log = JSON.parse(data.log[i]);
			//console.log(log);
			//insertLog(new Log(log.id, log.date, log.time, log.system, log.device, log.mode, log.operation, log.stall, log.card, log.size, log.alarm), "table-log");
			//scrollBottom($('#table-log-container'));
		}
	});
	
	socketLog.on('log', function (data) {
        console.log('From device.js: ' + data.log);
		var log = JSON.parse(data.log);
		insertLog(new Log(log.id, log.date, log.time, log.system, log.device, log.mode, log.operation, log.stall, log.card, log.size, log.alarm), "table-log");
        scrollBottom($('#table-log-container'));
		
		var msg = "Message >> [" + log.date + "][" + log.time + "] " + log.system + " " + log.device + " " + log.mode + " " + log.operation;// + " " + log.stall + " " + log.card + " " + log.size + " " + log.alarm;
		console.log(msg);
		$('#log').text(msg);
		
		// Table + scope array
		//$scope.logs.push(new Log(log.id, log.date, log.time, log.device, log.mode, log.msg, log.stall, log.card, log.size, log.alarm));		
    });
	*/
			
	//$scope.system = new Object();
	
	socketData.on('paint:devices', function (data) {
		console.log('Received JSON data :\n' + data.devices);
		$scope.system = JSON.parse(data.devices);
    });

	socketData.on('refresh:devices', function (data) {

		//console.log('Received JSON data :\n' + data.devices);
		var system = JSON.parse(data.devices);
		/*
		//$scope.lamps = [];
		$scope.devices = [];
		
		for (var d=0; d<system.devices.length; d++) {

			//$scope.system.devices[d].name = system.devices[d].name;
			$scope.system.devices[d].mode = system.devices[d].mode;
			$scope.system.devices[d].card = system.devices[d].card;
			$scope.system.devices[d].stall = system.devices[d].stall;
			$scope.system.devices[d].size = system.devices[d].size;
			$scope.system.devices[d].position = system.devices[d].position;
			$scope.system.devices[d].destination = system.devices[d].destination;

			//$scope.devices.push({device: d, lamps: [{id: 0, staus: false, label: 'label'}]});
			$scope.devices.push({device: d, lamps: []});
			
			for (var l=0; l<system.devices[d].lamps.length; l++) {
				//$scope.system.devices[d].lamps[l].id = system.devices[d].lamps[l].id;
				//$scope.system.devices[d].lamps[l].status = system.devices[d].lamps[l].status;
				//console.log(d + ':' + l + ':' + $scope.system.devices[d].lamps[l].id + ':' + $scope.system.devices[d].lamps[l].status);
				
				$scope.devices[d].lamps.push({id: system.devices[d].lamps[l].id, status: system.devices[d].lamps[l].status, label: system.devices[d].lamps[l].label});
				//console.log($scope.devices[d].lamps[l]);
			}
		}
		*/
		$scope.system = system;
		//$scope.el1_lamps = $scope.system.devices[0].lamps;
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

});
/*
function Log(id, date, time, system, device, mode, operation, stall, card, size, alarm) {
	this.id = id;
	this.date = date;
	this.time = time;
	this.system = system;
	this.device = device;
	this.mode = mode;
	this.operation = operation;
	this.stall = stall;
	this.card = card;
	this.size = size;
	this.alarm = alarm;
}

function insertLog(log, table) {
	var t = document.getElementById(table);
	var r = t.insertRow(-1);
	var c0 = r.insertCell(0);
	var c1 = r.insertCell(1);
	var c2 = r.insertCell(2);
	var c3 = r.insertCell(3);
	var c4 = r.insertCell(4);
	var c5 = r.insertCell(5);
	var c6 = r.insertCell(6);
	var c7 = r.insertCell(7);
	var c8 = r.insertCell(8);
	var c9 = r.insertCell(9);
	var c10 = r.insertCell(10);
	c0.innerHTML = "[" + log.id + "]";
	c1.innerHTML = log.date;
	c2.innerHTML = log.time;
	c3.innerHTML = log.system;
	c4.innerHTML = log.device;
	c5.innerHTML = log.mode;
	c6.innerHTML = log.operation;
	//c6.innerHTML = "<span style='color: #00FF00'>>> " + log.msg + "</span>";
	c7.innerHTML = log.stall;
	c8.innerHTML = log.card;
	c9.innerHTML = log.size;
	c10.innerHTML = log.alarm;
	
	c0.className = "text-primary table-log-c0";
	c1.className = "table-log-c1";
	c2.className = "table-log-c2";
	c3.className = "table-log-c3";
	c4.className = "table-log-c4";
	c5.className = "table-log-c5";
}
*/
