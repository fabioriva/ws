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

	socket.on('paint:plcio-io21', function (data) {
		var io = JSON.parse(data.plcio);
		$scope.rack_21 = io;
	});
	
	socket.on('paint:plcio-io22', function (data) {
		var io = JSON.parse(data.plcio);
		$scope.rack_22 = io;
	});
	
	socket.on('paint:plcio-io31', function (data) {
		var io = JSON.parse(data.plcio);
		$scope.rack_31 = io;
	});
	
	socket.on('paint:plcio-io32', function (data) {
		var io = JSON.parse(data.plcio);
		$scope.rack_32 = io;
	});
	socket.on('paint:plcio-io41', function (data) {
		var io = JSON.parse(data.plcio);
		$scope.rack_41 = io;
	});
	
	socket.on('paint:plcio-io42', function (data) {
		var io = JSON.parse(data.plcio);
		$scope.rack_42 = io;
	});
	
	socket.on('paint:plcio-io51', function (data) {
		var io = JSON.parse(data.plcio);
		$scope.rack_51 = io;
	});
	
	socket.on('paint:plcio-io52', function (data) {
		var io = JSON.parse(data.plcio);
		$scope.rack_52 = io;
	});

	socket.on('paint:plcio-io61', function (data) {
		var io = JSON.parse(data.plcio);
		$scope.rack_61 = io;
	});
	
	socket.on('paint:plcio-io62', function (data) {
		var io = JSON.parse(data.plcio);
		$scope.rack_62 = io;
	});
	
	socket.on('paint:plcio-io71', function (data) {
		var io = JSON.parse(data.plcio);
		$scope.rack_71 = io;
	});
	
	socket.on('paint:plcio-io72', function (data) {
		var io = JSON.parse(data.plcio);
		$scope.rack_72 = io;
	});
	socket.on('paint:plcio-io81', function (data) {
		var io = JSON.parse(data.plcio);
		$scope.rack_81 = io;
	});
	
	socket.on('paint:plcio-io82', function (data) {
		var io = JSON.parse(data.plcio);
		$scope.rack_82 = io;
	});
	
	socket.on('refresh:plcio_sh', function (data) {

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
		io = data.plcio[2];
		for (var c = 0; c < io.length; c++) {
			for (var b = 0; b < io[c].bytes.length; b++) {
				for (var i = 0; i < io[c].bytes[b].bits.length; i++) {			
					//$scope.rack_el1[c].bytes[b].bits[i] = io[c].bytes[b].bits[i];
					ioStatus(io[c].bytes[b].bits[i].cpu, io[c].bytes[b].bits[i].type, io[c].bytes[b].bits[i].byte, io[c].bytes[b].bits[i].bit, io[c].bytes[b].bits[i].status);
				}
			}
        }			
		io = data.plcio[3];
		for (var c = 0; c < io.length; c++) {
			for (var b = 0; b < io[c].bytes.length; b++) {
				for (var i = 0; i < io[c].bytes[b].bits.length; i++) {			
					//$scope.rack_el1[c].bytes[b].bits[i] = io[c].bytes[b].bits[i];
					ioStatus(io[c].bytes[b].bits[i].cpu, io[c].bytes[b].bits[i].type, io[c].bytes[b].bits[i].byte, io[c].bytes[b].bits[i].bit, io[c].bytes[b].bits[i].status);
				}
			}
        }
		io = data.plcio[4];
		for (var c = 0; c < io.length; c++) {
			for (var b = 0; b < io[c].bytes.length; b++) {
				for (var i = 0; i < io[c].bytes[b].bits.length; i++) {			
					//$scope.rack_el1[c].bytes[b].bits[i] = io[c].bytes[b].bits[i];
					ioStatus(io[c].bytes[b].bits[i].cpu, io[c].bytes[b].bits[i].type, io[c].bytes[b].bits[i].byte, io[c].bytes[b].bits[i].bit, io[c].bytes[b].bits[i].status);
				}
			}
        }
		io = data.plcio[5];
		for (var c = 0; c < io.length; c++) {
			for (var b = 0; b < io[c].bytes.length; b++) {
				for (var i = 0; i < io[c].bytes[b].bits.length; i++) {			
					//$scope.rack_el1[c].bytes[b].bits[i] = io[c].bytes[b].bits[i];
					ioStatus(io[c].bytes[b].bits[i].cpu, io[c].bytes[b].bits[i].type, io[c].bytes[b].bits[i].byte, io[c].bytes[b].bits[i].bit, io[c].bytes[b].bits[i].status);
				}
			}
        }
		io = data.plcio[6];
		for (var c = 0; c < io.length; c++) {
			for (var b = 0; b < io[c].bytes.length; b++) {
				for (var i = 0; i < io[c].bytes[b].bits.length; i++) {			
					//$scope.rack_el1[c].bytes[b].bits[i] = io[c].bytes[b].bits[i];
					ioStatus(io[c].bytes[b].bits[i].cpu, io[c].bytes[b].bits[i].type, io[c].bytes[b].bits[i].byte, io[c].bytes[b].bits[i].bit, io[c].bytes[b].bits[i].status);
				}
			}
        }
		io = data.plcio[7];
		for (var c = 0; c < io.length; c++) {
			for (var b = 0; b < io[c].bytes.length; b++) {
				for (var i = 0; i < io[c].bytes[b].bits.length; i++) {			
					//$scope.rack_el1[c].bytes[b].bits[i] = io[c].bytes[b].bits[i];
					ioStatus(io[c].bytes[b].bits[i].cpu, io[c].bytes[b].bits[i].type, io[c].bytes[b].bits[i].byte, io[c].bytes[b].bits[i].bit, io[c].bytes[b].bits[i].status);
				}
			}
        }
		io = data.plcio[8];
		for (var c = 0; c < io.length; c++) {
			for (var b = 0; b < io[c].bytes.length; b++) {
				for (var i = 0; i < io[c].bytes[b].bits.length; i++) {			
					//$scope.rack_el1[c].bytes[b].bits[i] = io[c].bytes[b].bits[i];
					ioStatus(io[c].bytes[b].bits[i].cpu, io[c].bytes[b].bits[i].type, io[c].bytes[b].bits[i].byte, io[c].bytes[b].bits[i].bit, io[c].bytes[b].bits[i].status);
				}
			}
        }
		io = data.plcio[9];
		for (var c = 0; c < io.length; c++) {
			for (var b = 0; b < io[c].bytes.length; b++) {
				for (var i = 0; i < io[c].bytes[b].bits.length; i++) {			
					//$scope.rack_el1[c].bytes[b].bits[i] = io[c].bytes[b].bits[i];
					ioStatus(io[c].bytes[b].bits[i].cpu, io[c].bytes[b].bits[i].type, io[c].bytes[b].bits[i].byte, io[c].bytes[b].bits[i].bit, io[c].bytes[b].bits[i].status);
				}
			}
        }
		io = data.plcio[10];
		for (var c = 0; c < io.length; c++) {
			for (var b = 0; b < io[c].bytes.length; b++) {
				for (var i = 0; i < io[c].bytes[b].bits.length; i++) {			
					//$scope.rack_el1[c].bytes[b].bits[i] = io[c].bytes[b].bits[i];
					ioStatus(io[c].bytes[b].bits[i].cpu, io[c].bytes[b].bits[i].type, io[c].bytes[b].bits[i].byte, io[c].bytes[b].bits[i].bit, io[c].bytes[b].bits[i].status);
				}
			}
        }
		io = data.plcio[11];
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
        //$('#l-st-' + id).css('background-color', '#00FF00');
       	//$('#l-st-' + id).attr('title', 'Status ON');
		$('#l-st-' + id).addClass('bit-true');
		$('#l-st-' + id).removeClass('bit-false');
		$('#l-st-' + id).text('1');
    }
    else {
        //$('#l-st-' + id).css('background-color', '#C0C0C0');
        //$('#l-st-' + id).attr('title', 'Status OFF');
		$('#l-st-' + id).addClass('bit-false');
		$('#l-st-' + id).removeClass('bit-true');
		$('#l-st-' + id).text('0');
    }
}

