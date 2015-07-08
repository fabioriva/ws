var app = angular.module('ioApp', ['pasvaz.bindonce', 'ws.blink']);

app.factory('socket', function($rootScope){

	var socket = io.connect('http://www.sotefinservice.com:3004/plc/io/1');
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

app.controller('ioCtrl', function($scope, socket) {
	
	socket.on('plc:io:r1:paint', function (data) {
		//console.log('Received JSON data :\n' + data.plc_io);
		var io = JSON.parse(data.plc_io);
		$scope.rack_01 = io;
	});
	
	socket.on('plc:io:r1:update', function (data) {
		//console.log('Received JSON data :\n' + data.plc_io);
		var io = JSON.parse(data.plc_io);
		ioRead(io);				
	});
	
	socket.on('plc:io:r2:paint', function (data) {
		//console.log('Received JSON data :\n' + data.plc_io);
		var io = JSON.parse(data.plc_io);
		$scope.rack_02 = io;
	});
	
	socket.on('plc:io:r2:update', function (data) {
		//console.log('Received JSON data :\n' + data.plc_io);
		var io = JSON.parse(data.plc_io);
		ioRead(io);			
	});
});

function ioRead(io) {
	for (var c = 0; c < io.length; c++) {
		for (var b = 0; b < io[c].bytes.length; b++) {
			for (var i = 0; i < io[c].bytes[b].bits.length; i++) {			
				ioStatus(io[c].bytes[b].bits[i].cpu, io[c].bytes[b].bits[i].type, io[c].bytes[b].bits[i].byte, io[c].bytes[b].bits[i].bit, io[c].bytes[b].bits[i].status);
			}
		}
	}
}

function ioStatus(s7cpu, s7type, s7byte, s7bit, status) {
    var id = s7cpu + s7type + s7byte + s7bit;
    if (status) {
		$('#l-st-' + id).addClass('bit-true');
		$('#l-st-' + id).removeClass('bit-false');
		$('#l-st-' + id).text('1');
    }
    else {
		$('#l-st-' + id).addClass('bit-false');
		$('#l-st-' + id).removeClass('bit-true');
		$('#l-st-' + id).text('0');
    }
}


