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
				name: 'Shuttle/Silomat',
				lasers: [
					{ id: 1, status: 0, position: 0, destination: 0 },
					{ id: 2, status: 0, position: 0, destination: 0 },
					{ id: 3, status: 0, position: 0, destination: 0 }
				],
				motors: [										// status: 0=off, 1=fwd, 2=bwd
					{ id: 1, status: 0, speed: 0, current: 0 },	// travelling 
					{ id: 2, status: 0, speed: 0, current: 0 },	// rotation 
					{ id: 3, status: 0, speed: 0, current: 0 },	// silomat travelling
					{ id: 4, status: 0, speed: 0, current: 0 },	// silomat hoisting
					{ id: 5, status: 0, speed: 0, current: 0 },	// silomat front centering
					{ id: 6, status: 0, speed: 0, current: 0 }	// silomat back centering
				],
			}
		]
	}
}
