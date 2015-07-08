$(document).ready(function () {
	activeTab('tab-io', 0);
});

var app = angular.module('ioApp', ['blink', 'tooltip']);

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

	var socket = io.connect('//www.sotefinservice.com:3003/plc_io');
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

	socket.on('paint:plcio-io1', function (data) {
		//console.log(data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.rack_el1 = io;
	});
	
	socket.on('paint:plcio-io2', function (data) {
		//console.log(data.plcio);
		var io = JSON.parse(data.plcio);
		$scope.rack_el2 = io;
	});
	
	socket.on('refresh:plcio1', function (data) {
		//console.log(data.plcio);
		var io = JSON.parse(data.plcio);
		for (var c = 0; c < io.cards.length; c++) {
			for (var b = 0; b < io.cards[c].bytes.length; b++) {
				for (var i = 0; i < io.cards[c].bytes[b].bits.length; i++) {			
					ioStatus(io.cards[c].bytes[b].bits[i].cpu, io.cards[c].bytes[b].bits[i].type, io.cards[c].bytes[b].bits[i].byte, io.cards[c].bytes[b].bits[i].bit, io.cards[c].bytes[b].bits[i].status);
				}
			}
        }
	});
	
	socket.on('refresh:plcio2', function (data) {
		//console.log(data.plcio);
		var io = JSON.parse(data.plcio);
		for (var c = 0; c < io.cards.length; c++) {
			for (var b = 0; b < io.cards[c].bytes.length; b++) {
				for (var i = 0; i < io.cards[c].bytes[b].bits.length; i++) {			
					ioStatus(io.cards[c].bytes[b].bits[i].cpu, io.cards[c].bytes[b].bits[i].type, io.cards[c].bytes[b].bits[i].byte, io.cards[c].bytes[b].bits[i].bit, io.cards[c].bytes[b].bits[i].status);
				}
			}
        }
	});
	
	$scope.bitStatus = function (status) {
		if (status) {
			return 'bit-st bit-true';
		} else {
			return 'bit-st bit-false';
		}
	};
	
});

function ioStatus(s7cpu, s7type, s7byte, s7bit, status) {
    var id = s7cpu + s7type + s7byte + s7bit;
    if (status) {
		$('#l-st-' + id).addClass('bit-true');
		$('#l-st-' + id).removeClass('bit-false');
		$('#l-st-' + id).text('1');
		
		// $('#bit-status-' + id).addClass('bit-true');
		// $('#bit-status-' + id).removeClass('bit-false');
		// $('#bit-status-' + id).text('1');
    }
    else {
		$('#l-st-' + id).addClass('bit-false');
		$('#l-st-' + id).removeClass('bit-true');
		$('#l-st-' + id).text('0');
		
		// $('#bit-status-' + id).addClass('bit-false');
		// $('#bit-status-' + id).removeClass('bit-true');
		// $('#bit-status-' + id).text('0');
    }
}

