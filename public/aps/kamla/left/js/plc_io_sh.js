var app = angular.module('ioApp', ['pasvaz.bindonce', 'ws.blink']);

app.factory('socket', function($rootScope){

	var socket = io.connect('http://www.sotefinservice.com:3001/plc_io/sh');
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
	
	socket.on('connect', function () {
		console.log('client connected'); 
	});
	
	socket.on('paint:plcio-sh01', function (data) {
		console.log('Received JSON data :\n' + data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.rack_sh01 = io;
	});
	socket.on('paint:plcio-sh02', function (data) {
		console.log('Received JSON data :\n' + data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.rack_sh02 = io;
	});
	socket.on('paint:plcio-sh03', function (data) {
		console.log('Received JSON data :\n' + data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.rack_sh03 = io;
	});
	socket.on('paint:plcio-sh04', function (data) {
		console.log('Received JSON data :\n' + data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.rack_sh04 = io;
	});
	socket.on('paint:plcio-sh05', function (data) {
		console.log('Received JSON data :\n' + data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.rack_sh05 = io;
	});
	socket.on('paint:plcio-sh06', function (data) {
		console.log('Received JSON data :\n' + data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.rack_sh06 = io;
	});
	socket.on('paint:plcio-sh07', function (data) {
		console.log('Received JSON data :\n' + data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.rack_sh07 = io;
	});
	socket.on('paint:plcio-sh08', function (data) {
		console.log('Received JSON data :\n' + data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.rack_sh08 = io;
	});
	socket.on('paint:plcio-sh09', function (data) {
		console.log('Received JSON data :\n' + data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.rack_sh09 = io;
	});
	socket.on('paint:plcio-sh10', function (data) {
		console.log('Received JSON data :\n' + data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.rack_sh10 = io;
	});
	socket.on('paint:plcio-sh11', function (data) {
		console.log('Received JSON data :\n' + data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.rack_sh11 = io;
	});
	socket.on('paint:plcio-sh12', function (data) {
		console.log('Received JSON data :\n' + data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.rack_sh12 = io;
	});
	
	socket.on('refresh:plcio-sh', function (data) {
		
		//console.log('Received JSON data ( array length ):\n' + data.plcio.length)
		
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
		//$scope.rack_el1 = io;
	});
	
	/*
	socket.on('refresh:plcio-sh01', function (data) {	
		console.log('Received JSON data :\n' + data.plcio)
		var io = JSON.parse(data.plcio);		
		ioRead(io);
	});
	socket.on('refresh:plcio-sh02', function (data) {	
		console.log('Received JSON data :\n' + data.plcio)
		var io = JSON.parse(data.plcio);		
		ioRead(io);	
	});
	socket.on('refresh:plcio-sh03', function (data) {	
		console.log('Received JSON data :\n' + data.plcio)
		var io = JSON.parse(data.plcio);		
		ioRead(io);	
	});
	socket.on('refresh:plcio-sh04', function (data) {	
		console.log('Received JSON data :\n' + data.plcio)
		var io = JSON.parse(data.plcio);		
		ioRead(io);	
	});
	socket.on('refresh:plcio-sh05', function (data) {	
		console.log('Received JSON data :\n' + data.plcio)
		var io = JSON.parse(data.plcio);		
		ioRead(io);	
	});
	socket.on('refresh:plcio-sh06', function (data) {	
		console.log('Received JSON data :\n' + data.plcio)
		var io = JSON.parse(data.plcio);		
		ioRead(io);	
	});
	*/
	
});

function activeTab(tab){
	$('.nav-tabs a[href="#' + tab + '"]').tab('show');
};

function ioRead(io) {
	for (var c = 0; c < io.length; c++) {
		for (var b = 0; b < io[c].bytes.length; b++) {
			for (var i = 0; i < io[c].bytes[b].bits.length; i++) {			
				//$scope.rack_el1[c].bytes[b].bits[i] = io[c].bytes[b].bits[i];
				ioStatus(io[c].bytes[b].bits[i].cpu, io[c].bytes[b].bits[i].type, io[c].bytes[b].bits[i].byte, io[c].bytes[b].bits[i].bit, io[c].bytes[b].bits[i].status);
			}
		}
	}
}

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


