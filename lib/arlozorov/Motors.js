/*
 * Motors entity
 */
var moment = require('moment')
, utility = require('./Tools');

exports.Motors = Motors1();

exports.readMotors1 = function (byteIni, byteLen, data) {

	var motors = Motors1();	
	var x = byteIni;

	for (var m=0; m<motors.motor.length; m++) {
		
		motors.motor[m].direction = utility.BytesToInt(data[x+0], data[x+1]);
		motors.motor[m].elapsed = moment.duration( utility.BytesToLong(data[x+2], data[x+3], data[x+4], data[x+5]) ).asMilliseconds();
		motors.motor[m].speed = utility.BytesToInt(data[x+6], data[x+7]);
		motors.motor[m].current = utility.BytesToInt(data[x+8], data[x+9]);
		motors.motor[m].position = utility.BytesToInt(data[x+10], data[x+11]);
		motors.motor[m].pos_1 = utility.BytesToInt(data[x+12], data[x+13]);
		motors.motor[m].pos_2 = utility.BytesToInt(data[x+14], data[x+15]);
		motors.motor[m].destination = utility.BytesToInt(data[x+16], data[x+17]);
		x += 18;
	}
	//console.log(motors);
	return motors;
}

exports.readMotors2 = function (byteIni, byteLen, data) {

	var motors = Motors2();	
	var x = byteIni;

	for (var m=0; m<motors.motor.length; m++) {
		
		motors.motor[m].direction = utility.BytesToInt(data[x+0], data[x+1]);
		motors.motor[m].elapsed = moment.duration( utility.BytesToLong(data[x+2], data[x+3], data[x+4], data[x+5]) ).asMilliseconds();
		x += 6;
	}
	//console.log(motors);
	return motors;
}

function Motors1 () {    

	return {
		motor: [
			{ direction: 0, elapsed: 0, speed: 0, current: 0, position: 0, pos_1: 0, pos_2: 0, destination: 0 },
			{ direction: 0, elapsed: 0, speed: 0, current: 0, position: 0, pos_1: 0, pos_2: 0, destination: 0 },
			{ direction: 0, elapsed: 0, speed: 0, current: 0, position: 0, pos_1: 0, pos_2: 0, destination: 0 },
			{ direction: 0, elapsed: 0, speed: 0, current: 0, position: 0, pos_1: 0, pos_2: 0, destination: 0 }
		]
	}
}

function Motors2 () {    

	return {
		motor: [
			{ direction: 0, elapsed: 0 },
			{ direction: 0, elapsed: 0 },
			{ direction: 0, elapsed: 0 },
			{ direction: 0, elapsed: 0 },
			{ direction: 0, elapsed: 0 },
			{ direction: 0, elapsed: 0 },
			{ direction: 0, elapsed: 0 },
			{ direction: 0, elapsed: 0 },
			{ direction: 0, elapsed: 0 },
			{ direction: 0, elapsed: 0 },
			{ direction: 0, elapsed: 0 },
			{ direction: 0, elapsed: 0 },
			{ direction: 0, elapsed: 0 }
		]
	}
}
