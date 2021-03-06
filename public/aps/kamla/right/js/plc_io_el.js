var app = angular.module('ioApp', ['pasvaz.bindonce', 'ws.blink']);

app.directive('plciocard', function(){
/*
	return {
		restrict: 'E',
		//scope: { id:'=plciocardId' },
		//templateUrl: 'plciocardTemplate.html',
		template: '<div class="card" id="r01c02">' +
					'<div class="title">INPUT (Card 2)' +
						'<div ng-repeat="bit in bits">' +
							'<span class="bit-id" id="l-id-{{bit.cpu}}{{bit.type}}{{bit.byte}}{{bit.bit}}"></span>' +
							'<span class="bit-st" id="l-st-{{bit.cpu}}{{bit.type}}{{bit.byte}}{{bit.bit}}" ng-class="{{backgroundColor(bit.st)}}"></span>' +
							'<span class="bit-nr" id="l-nr-{{bit.cpu}}{{bit.type}}{{bit.byte}}{{bit.bit}}"></span>' +
						'</div>' +
					'</div><div class="type">6ES7 321-1BL00-0AA00</div></div>',
		replace: true					
	};
*/
});


app.factory('socket', function($rootScope){

	var socket = io.connect('http://www.sotefinservice.com:3002/plc_io/el');
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
		//socket.emit('join', prompt('What is your name ?'));
		//console.log('client connected'); 
	});
	
	socket.on('announcement', function (id) {
		console.log('announcement client id : ' + id);
	});
	
	socket.on('message', function (id) {
		console.log('message client id : ' + id);
	});

	//$scope.rack = Rack();
	
	/*$scope.backgroundColor = function(status) {

		if(status == 0) {
			return 'bit-false';
		} else {
			return 'bit-true';
		}

	}*/
	/*
	socket.on('plcio', function (data) {
		console.log('Received JSON data :\n' + data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.bits = [];
		for (var i = 0; i < io.length; i++) {
            $scope.bits.push(new Bit(io[i].cpu, io[i].type, io[i].byte, io[i].bit, io[i].st));
        }
	});
	*/
	//$scope.bitStatus = false;
	
	
	socket.on('paint:plcio-el1', function (data) {
		//console.log('Received JSON data :\n' + data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.rack_el1 = io;
	});
	
	socket.on('paint:plcio-el2', function (data) {
		//console.log('Received JSON data :\n' + data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.rack_el2 = io;
	});
	
	socket.on('paint:plcio-el3', function (data) {
		//console.log('Received JSON data :\n' + data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.rack_el3 = io;
	});
	
	socket.on('refresh:plcio-el', function (data) {
	
		//console.log('Received JSON data :\n' + data.plcio);
	
		//$scope.rack = Rack();
		
		//console.log('$scope.rack len : ' + $scope.rack.length);
		//console.log('$scope.rack[0].bytes len : ' + $scope.rack[0].bytes.length);
		//console.log('$scope.rack[0].bytes[0].bits len : ' + $scope.rack[0].bytes[0].bits.length);
		
		//console.log('Received JSON data ( array length ):\n' + data.plcio.length)
		
		//var io = JSON.parse(data.plcio[0]);
		var io = data.plcio[0];
		for (var c = 0; c < io.length; c++) {
			for (var b = 0; b < io[c].bytes.length; b++) {
				for (var i = 0; i < io[c].bytes[b].bits.length; i++) {			
					//$scope.rack_el1[c].bytes[b].bits[i] = io[c].bytes[b].bits[i];
					ioStatus(io[c].bytes[b].bits[i].cpu, io[c].bytes[b].bits[i].type, io[c].bytes[b].bits[i].byte, io[c].bytes[b].bits[i].bit, io[c].bytes[b].bits[i].status);
				}
			}
        }	
		
		//io = JSON.parse(data.plcio[1]);
		io = data.plcio[1];
		for (var c = 0; c < io.length; c++) {
			for (var b = 0; b < io[c].bytes.length; b++) {
				for (var i = 0; i < io[c].bytes[b].bits.length; i++) {			
					//$scope.rack_el1[c].bytes[b].bits[i] = io[c].bytes[b].bits[i];
					ioStatus(io[c].bytes[b].bits[i].cpu, io[c].bytes[b].bits[i].type, io[c].bytes[b].bits[i].byte, io[c].bytes[b].bits[i].bit, io[c].bytes[b].bits[i].status);
				}
			}
        }
		
		//io = JSON.parse(data.plcio[2]);
		io = data.plcio[2];
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
	socket.on('refresh:plcio-el1', function (data) {
	
		//console.log('Received JSON data :\n' + data.plcio);
	
		//$scope.rack = Rack();
		
		//console.log('$scope.rack len : ' + $scope.rack.length);
		//console.log('$scope.rack[0].bytes len : ' + $scope.rack[0].bytes.length);
		//console.log('$scope.rack[0].bytes[0].bits len : ' + $scope.rack[0].bytes[0].bits.length);
		
		//console.log('Received JSON data :\n' + data.plcio)
		var io = JSON.parse(data.plcio);
		
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
	
	socket.on('refresh:plcio-el2', function (data) {
		//console.log('Received JSON data :\n' + data.plcio)
		var io = JSON.parse(data.plcio);
		
		for (var c = 0; c < io.length; c++) {
			for (var b = 0; b < io[c].bytes.length; b++) {
				for (var i = 0; i < io[c].bytes[b].bits.length; i++) {			
					//$scope.rack_el2[c].bytes[b].bits[i] = io[c].bytes[b].bits[i];
					ioStatus(io[c].bytes[b].bits[i].cpu, io[c].bytes[b].bits[i].type, io[c].bytes[b].bits[i].byte, io[c].bytes[b].bits[i].bit, io[c].bytes[b].bits[i].status);
				}
			}
        }
		//$scope.rack_el2 = io;
	});
	
	socket.on('refresh:plcio-el3', function (data) {
		//console.log('Received JSON data :\n' + data.plcio)
		var io = JSON.parse(data.plcio);
		
		for (var c = 0; c < io.length; c++) {
			for (var b = 0; b < io[c].bytes.length; b++) {
				for (var i = 0; i < io[c].bytes[b].bits.length; i++) {			
					//$scope.rack_el2[c].bytes[b].bits[i] = io[c].bytes[b].bits[i];
					ioStatus(io[c].bytes[b].bits[i].cpu, io[c].bytes[b].bits[i].type, io[c].bytes[b].bits[i].byte, io[c].bytes[b].bits[i].bit, io[c].bytes[b].bits[i].status);
				}
			}
        }	
		//$scope.rack_el3 = io;
	});
	*/
	/*
	socket.on('refresh:plcio-el3', function (data) {
		console.log('Received EL3 I/O');
		var io = data.plcio;//JSON.parse(data.plcio);
		$scope.rack_el3 = io;
	});
	*/
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

/*
function Card(nr, bytes) {
	this.nr = nr;
	this.bytes = bytes;
}
function Byte(nr, bits) {
	this.nr = nr;
	this.bits = bits;
}
function Bit(cpu, type, byte, bit, st) {
	this.cpu = cpu;
	this.type = type;
	this.byte = byte;
	this.bit = bit;
	this.status = st;
}
*/

