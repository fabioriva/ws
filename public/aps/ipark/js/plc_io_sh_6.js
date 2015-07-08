var app = angular.module('ioApp', ['pasvaz.bindonce', 'ws.blink']);

app.factory('socket', function($rootScope){

	var socket = io.connect('http://www.sotefinservice.com:3005/plc_io_sh');
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

	socket.on('paint:plcio-io11', function (data) {
		var io = JSON.parse(data.plcio);
		$scope.rack_11 = io;
	});
	
	socket.on('paint:plcio-io12', function (data) {
		var io = JSON.parse(data.plcio);
		$scope.rack_12 = io;
	});
	
	socket.on('refresh:plcio_sh_06', function (data) {

		var io = data.plcio[0];
		for (var c = 0; c < io.length; c++) {
			for (var b = 0; b < io[c].bytes.length; b++) {
				for (var i = 0; i < io[c].bytes[b].bits.length; i++) {			
					//$scope.rack_el1[c].bytes[b].bits[i] = io[c].bytes[b].bits[i];
					ioStatus(io[c].bytes[b].bits[i].cpu, io[c].bytes[b].bits[i].type, io[c].bytes[b].bits[i].byte, io[c].bytes[b].bits[i].bit, io[c].bytes[b].bits[i].status);
				}
			}
        }			
		io = data.plcio[1];
		for (var c = 0; c < io.length; c++) {
			for (var b = 0; b < io[c].bytes.length; b++) {
				for (var i = 0; i < io[c].bytes[b].bits.length; i++) {			
					//$scope.rack_el1[c].bytes[b].bits[i] = io[c].bytes[b].bits[i];
					ioStatus(io[c].bytes[b].bits[i].cpu, io[c].bytes[b].bits[i].type, io[c].bytes[b].bits[i].byte, io[c].bytes[b].bits[i].bit, io[c].bytes[b].bits[i].status);
				}
			}
        }		
	});
});

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

