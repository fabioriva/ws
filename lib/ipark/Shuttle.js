/*
 * Shuttles entity
 */
var utility = require('./Tools');

exports.Shuttles = Shuttles();

exports.readShuttles = function (byteIni, byteLen, data) {

	var e = Shuttles();	
	var x = byteIni;

	for (var i=0; i<e.shuttles.length; i++) {

		e.shuttles[i].id = utility.BytesToInt(data[x+0], data[x+1]);
		
		for (var l=0; l<e.shuttles[i].lasers.length; l++) {
			
			e.shuttles[i].lasers[l].status = utility.BytesToInt(data[x+2], data[x+3]);
			e.shuttles[i].lasers[l].position = utility.BytesToInt(data[x+4], data[x+5]);
			e.shuttles[i].lasers[l].destination = utility.BytesToInt(data[x+6], data[x+7]);
			x += 6;
		}
		
		for (var m=0; m<e.shuttles[i].motors.length; m++) {
			
			e.shuttles[i].motors[m].status = utility.BytesToInt(data[x+2], data[x+3]);
			e.shuttles[i].motors[m].speed = utility.BytesToInt(data[x+4], data[x+5]);
			e.shuttles[i].motors[m].current = utility.BytesToInt(data[x+6], data[x+7]);
			x += 6;
		}

		//x += byteLen;
		x += 2;
	}

	return e;
}

function Shuttles () {    

	return {
		shuttles: [
			{
				id: 1,
				name: 'Shuttle 1',
				lasers: [
					{ id: 1, status: 0, position: 0, destination: 0 },
					{ id: 2, status: 0, position: 0, destination: 0 },
				],
				motors: [										// status: 0=off, 1=fwd, 2=bwd
					{ id: 1, status: 0, speed: 0, current: 0 },	// travelling 
					{ id: 2, status: 0, speed: 0, current: 0 },	// silomat travelling
					{ id: 3, status: 0, speed: 0, current: 0 },	// silomat hoisting
					{ id: 4, status: 0, speed: 0, current: 0 },	// silomat front centering
					{ id: 5, status: 0, speed: 0, current: 0 }	// silomat back centering
				],
			},
			{
				id: 2,
				name: 'Shuttle 2',
				lasers: [
					{ id: 1, status: 0, position: 0, destination: 0 },
					{ id: 2, status: 0, position: 0, destination: 0 },
				],
				motors: [										// status: 0=off, 1=fwd, 2=bwd
					{ id: 1, status: 0, speed: 0, current: 0 },	// travelling 
					{ id: 2, status: 0, speed: 0, current: 0 },	// silomat travelling
					{ id: 3, status: 0, speed: 0, current: 0 },	// silomat hoisting
					{ id: 4, status: 0, speed: 0, current: 0 },	// silomat front centering
					{ id: 5, status: 0, speed: 0, current: 0 }	// silomat back centering
				],
			},
			{
				id: 3,
				name: 'Shuttle 3',
				lasers: [
					{ id: 1, status: 0, position: 0, destination: 0 },
					{ id: 2, status: 0, position: 0, destination: 0 },
				],
				motors: [										// status: 0=off, 1=fwd, 2=bwd
					{ id: 1, status: 0, speed: 0, current: 0 },	// travelling 
					{ id: 2, status: 0, speed: 0, current: 0 },	// silomat travelling
					{ id: 3, status: 0, speed: 0, current: 0 },	// silomat hoisting
					{ id: 4, status: 0, speed: 0, current: 0 },	// silomat front centering
					{ id: 5, status: 0, speed: 0, current: 0 }	// silomat back centering
				],
			},
			{
				id: 4,
				name: 'Shuttle 4',
				lasers: [
					{ id: 1, status: 0, position: 0, destination: 0 },
					{ id: 2, status: 0, position: 0, destination: 0 },
				],
				motors: [										// status: 0=off, 1=fwd, 2=bwd
					{ id: 1, status: 0, speed: 0, current: 0 },	// travelling 
					{ id: 2, status: 0, speed: 0, current: 0 },	// silomat travelling
					{ id: 3, status: 0, speed: 0, current: 0 },	// silomat hoisting
					{ id: 4, status: 0, speed: 0, current: 0 },	// silomat front centering
					{ id: 5, status: 0, speed: 0, current: 0 }	// silomat back centering
				],
			},
			{
				id: 5,
				name: 'Shuttle 5',
				lasers: [
					{ id: 1, status: 0, position: 0, destination: 0 },
					{ id: 2, status: 0, position: 0, destination: 0 },
				],
				motors: [										// status: 0=off, 1=fwd, 2=bwd
					{ id: 1, status: 0, speed: 0, current: 0 },	// travelling 
					{ id: 2, status: 0, speed: 0, current: 0 },	// silomat travelling
					{ id: 3, status: 0, speed: 0, current: 0 },	// silomat hoisting
					{ id: 4, status: 0, speed: 0, current: 0 },	// silomat front centering
					{ id: 5, status: 0, speed: 0, current: 0 }	// silomat back centering
				],
			},
			{
				id: 6,
				name: 'Shuttle 6',
				lasers: [
					{ id: 1, status: 0, position: 0, destination: 0 },
					{ id: 2, status: 0, position: 0, destination: 0 },
				],
				motors: [										// status: 0=off, 1=fwd, 2=bwd
					{ id: 1, status: 0, speed: 0, current: 0 },	// travelling 
					{ id: 2, status: 0, speed: 0, current: 0 },	// silomat travelling
					{ id: 3, status: 0, speed: 0, current: 0 },	// silomat hoisting
					{ id: 4, status: 0, speed: 0, current: 0 },	// silomat front centering
					{ id: 5, status: 0, speed: 0, current: 0 }	// silomat back centering
				],
			},
			{
				id: 7,
				name: 'Shuttle 7',
				lasers: [
					{ id: 1, status: 0, position: 0, destination: 0 },
					{ id: 2, status: 0, position: 0, destination: 0 },
				],
				motors: [										// status: 0=off, 1=fwd, 2=bwd
					{ id: 1, status: 0, speed: 0, current: 0 },	// travelling 
					{ id: 2, status: 0, speed: 0, current: 0 },	// silomat travelling
					{ id: 3, status: 0, speed: 0, current: 0 },	// silomat hoisting
					{ id: 4, status: 0, speed: 0, current: 0 },	// silomat front centering
					{ id: 5, status: 0, speed: 0, current: 0 }	// silomat back centering
				],
			},
			{
				id: 8,
				name: 'Shuttle 8',
				lasers: [
					{ id: 1, status: 0, position: 0, destination: 0 },
					{ id: 2, status: 0, position: 0, destination: 0 },
				],
				motors: [										// status: 0=off, 1=fwd, 2=bwd
					{ id: 1, status: 0, speed: 0, current: 0 },	// travelling 
					{ id: 2, status: 0, speed: 0, current: 0 },	// silomat travelling
					{ id: 3, status: 0, speed: 0, current: 0 },	// silomat hoisting
					{ id: 4, status: 0, speed: 0, current: 0 },	// silomat front centering
					{ id: 5, status: 0, speed: 0, current: 0 }	// silomat back centering
				],
			},
			{
				id: 9,
				name: 'Shuttle 9',
				lasers: [
					{ id: 1, status: 0, position: 0, destination: 0 },
					{ id: 2, status: 0, position: 0, destination: 0 },
				],
				motors: [										// status: 0=off, 1=fwd, 2=bwd
					{ id: 1, status: 0, speed: 0, current: 0 },	// travelling 
					{ id: 2, status: 0, speed: 0, current: 0 },	// silomat travelling
					{ id: 3, status: 0, speed: 0, current: 0 },	// silomat hoisting
					{ id: 4, status: 0, speed: 0, current: 0 },	// silomat front centering
					{ id: 5, status: 0, speed: 0, current: 0 }	// silomat back centering
				],
			},
			{
				id: 10,
				name: 'Shuttle 10',
				lasers: [
					{ id: 1, status: 0, position: 0, destination: 0 },
					{ id: 2, status: 0, position: 0, destination: 0 },
				],
				motors: [										// status: 0=off, 1=fwd, 2=bwd
					{ id: 1, status: 0, speed: 0, current: 0 },	// travelling 
					{ id: 2, status: 0, speed: 0, current: 0 },	// silomat travelling
					{ id: 3, status: 0, speed: 0, current: 0 },	// silomat hoisting
					{ id: 4, status: 0, speed: 0, current: 0 },	// silomat front centering
					{ id: 5, status: 0, speed: 0, current: 0 }	// silomat back centering
				],
			},
			{
				id: 11,
				name: 'Shuttle 11',
				lasers: [
					{ id: 1, status: 0, position: 0, destination: 0 },
					{ id: 2, status: 0, position: 0, destination: 0 },
				],
				motors: [										// status: 0=off, 1=fwd, 2=bwd
					{ id: 1, status: 0, speed: 0, current: 0 },	// travelling 
					{ id: 2, status: 0, speed: 0, current: 0 },	// silomat travelling
					{ id: 3, status: 0, speed: 0, current: 0 },	// silomat hoisting
					{ id: 4, status: 0, speed: 0, current: 0 },	// silomat front centering
					{ id: 5, status: 0, speed: 0, current: 0 }	// silomat back centering
				],
			},
			{
				id: 12,
				name: 'Shuttle 12',
				lasers: [
					{ id: 1, status: 0, position: 0, destination: 0 },
					{ id: 2, status: 0, position: 0, destination: 0 },
				],
				motors: [										// status: 0=off, 1=fwd, 2=bwd
					{ id: 1, status: 0, speed: 0, current: 0 },	// travelling 
					{ id: 2, status: 0, speed: 0, current: 0 },	// silomat travelling
					{ id: 3, status: 0, speed: 0, current: 0 },	// silomat hoisting
					{ id: 4, status: 0, speed: 0, current: 0 },	// silomat front centering
					{ id: 5, status: 0, speed: 0, current: 0 }	// silomat back centering
				],
			}
		]
	}
}
