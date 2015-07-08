/*
 * Elevators entity
 */
var utility = require('./Tools');

exports.Elevators = Elevators();

exports.readElevators = function (byteIni, byteLen, data) {

	var e = Elevators();	
	var x = byteIni;

	for (var i=0; i<e.elevators.length; i++) {

		e.elevators[i].id = utility.BytesToInt(data[x+0], data[x+1]);
		
		for (var l=0; l<e.elevators[i].lasers.length; l++) {
			
			e.elevators[i].lasers[l].status = utility.BytesToInt(data[x+2], data[x+3]);
			e.elevators[i].lasers[l].position = utility.BytesToInt(data[x+4], data[x+5]);
			e.elevators[i].lasers[l].destination = utility.BytesToInt(data[x+6], data[x+7]);
			x += 6;
		}
		
		for (var m=0; m<e.elevators[i].motors.length; m++) {
			
			e.elevators[i].motors[m].status = utility.BytesToInt(data[x+2], data[x+3]);
			e.elevators[i].motors[m].speed = utility.BytesToInt(data[x+4], data[x+5]);
			e.elevators[i].motors[m].current = utility.BytesToInt(data[x+6], data[x+7]);
			x += 6;
		}

		//x += byteLen;
		x += 2;
	}

	return e;
}

function Elevators () {    

	return {
		elevators: [
			{
				id: 1,
				name: 'Elevator 1',
				lasers: [
					{ id: 1, status: 0, position: 0, destination: 0 },
					{ id: 2, status: 0, position: 0, destination: 0 },
				],
				motors: [										// status: 0=off, 1=fwd, 2=bwd
					{ id: 1, status: 0, speed: 0, current: 0 },	// hoisting 
					{ id: 2, status: 0, speed: 0, current: 0 }, // locking 
					{ id: 3, status: 0, speed: 0, current: 0 },	// silomat travelling
					{ id: 4, status: 0, speed: 0, current: 0 },	// silomat hoisting
					{ id: 5, status: 0, speed: 0, current: 0 },	// silomat front centering
					{ id: 6, status: 0, speed: 0, current: 0 }	// silomat back centering
				],
			},
			{
				id: 2,
				name: 'Elevator 2',
				lasers: [
					{ id: 1, status: 0, position: 0, destination: 0 },
					{ id: 2, status: 0, position: 0, destination: 0 },
				],
				motors: [										// status: 0=off, 1=fwd, 2=bwd
					{ id: 1, status: 0, speed: 0, current: 0 },	// hoisting 
					{ id: 2, status: 0, speed: 0, current: 0 }, // locking 
					{ id: 3, status: 0, speed: 0, current: 0 },	// silomat travelling
					{ id: 4, status: 0, speed: 0, current: 0 },	// silomat hoisting
					{ id: 5, status: 0, speed: 0, current: 0 },	// silomat front centering
					{ id: 6, status: 0, speed: 0, current: 0 }	// silomat back centering
				],
			},
			{
				id: 3,
				name: 'Elevator 3',
				lasers: [
					{ id: 1, status: 0, position: 0, destination: 0 },
					{ id: 2, status: 0, position: 0, destination: 0 },
				],
				motors: [										// status: 0=off, 1=fwd, 2=bwd
					{ id: 1, status: 0, speed: 0, current: 0 },	// hoisting 
					{ id: 2, status: 0, speed: 0, current: 0 }, // locking 
					{ id: 3, status: 0, speed: 0, current: 0 },	// silomat travelling
					{ id: 4, status: 0, speed: 0, current: 0 },	// silomat hoisting
					{ id: 5, status: 0, speed: 0, current: 0 },	// silomat front centering
					{ id: 6, status: 0, speed: 0, current: 0 }	// silomat back centering
				],
			}
		]
	}
}
