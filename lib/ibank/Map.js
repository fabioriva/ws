/*
 * Map entity
 */
var utility = require('./Tools')
, moment = require('moment')
, moment_tz = require('moment-timezone');

exports.Map = Map();

//exports.MapSizes = MapSizes();

exports.mapRead = function (byteIni, byteLen, data) {

	var RSVD = 998;
	var LOCK = 999;
	var m = Map();
	var x = 0;
	
	/*for (var l=0; l<m.levels.length; l++) {
    
		for (var s=0; s<m.levels[l].stalls.length; s++) {
		    
			m.levels[l].stalls[s].status = utility.BytesToInt(data[x], data[x+1]);
			var date = utility.getPlcDate(utility.BytesToInt(data[x+2], data[x+3]));
			m.levels[l].stalls[s].date = moment(date).format('YYYY-MM-DD');
			var time = utility.getPlcTime(utility.BytesToLong(data[x+4], data[x+5], data[x+6], data[x+7]));
			m.levels[l].stalls[s].time = moment(time).format('HH:mm:ss');
			
			switch(m.levels[l].stalls[s].status) {
				case 0 :
					m.free += 1;
					break;
				case LOCK :
					m.lock += 1;
					break;
				default :
					m.busy += 1;
					break;
			}
			x += 8;
		}		
	}*/

	for (var l=0; l<m.levels.length; l++) {
    
		for (var s=0; s<m.levels[l].stalls.length; s++) {
			
			x = (( m.levels[l].stalls[s].nr * 8 ) - 8);
	
			m.levels[l].stalls[s].status = utility.BytesToInt(data[x], data[x+1]);
			var date = utility.getPlcDate(utility.BytesToInt(data[x+2], data[x+3]));
			m.levels[l].stalls[s].date = moment(date).format('YYYY-MM-DD');
			var time = utility.getPlcTime(utility.BytesToLong(data[x+4], data[x+5], data[x+6], data[x+7]));
			m.levels[l].stalls[s].time = moment(time).format('HH:mm:ss');
					
			switch(m.levels[l].stalls[s].status) {
				case 0 :
					m.free += 1;
					break;
				case LOCK :
					m.lock += 1;
					break;
				default :
					m.busy += 1;
					break;
			}
			x += 8;
		}		
	}
	return m;
}

exports.mapSize = function (byteIni, byteLen, data) {

	var RSVD = 998;
	var LOCK = 999;
	var m = Map();
	var x = 0;

	for (var l=0; l<m.levels.length; l++) {
    
		for (var s=0; s<m.levels[l].stalls.length; s++) {
		    
			x = (( m.levels[l].stalls[s].nr * 2 ) - 2);
	
			m.levels[l].stalls[s].status = utility.BytesToInt(data[x], data[x+1]);
			//x += 2;
			//console.log(m.levels[l].stalls[s].nr, m.levels[l].stalls[s].status, x);
		}		
	}
	return m;
}

function Map () {
    
    //this.data = {
	//var data = {
	return {
	    map: 'System Map',
	    spaces: 114,
		free: 0,
		busy: 0,
		lock: 0,
	    levels: [
			// (4) Level +1
			{
				nr: 4,
				label: 'Level +1',
				min: 97,
				max: 128,
				stalls: [
					{ nr: 7, status: 0, date: '', time: '' },
					{ nr: 8, status: 0, date: '', time: '' },
					{ nr: 15, status: 0, date: '', time: '' },
					{ nr: 16, status: 0, date: '', time: '' },
					{ nr: 23, status: 0, date: '', time: '' },
					{ nr: 24, status: 0, date: '', time: '' },
					{ nr: 30, status: 0, date: '', time: '' },
					{ nr: 36, status: 0, date: '', time: '' },
					{ nr: 42, status: 0, date: '', time: '' },
					{ nr: 50, status: 0, date: '', time: '' },
					{ nr: 58, status: 0, date: '', time: '' },
					{ nr: 66, status: 0, date: '', time: '' },
					{ nr: 74, status: 0, date: '', time: '' },
					{ nr: 82, status: 0, date: '', time: '' },
					{ nr: 90, status: 0, date: '', time: '' },
					{ nr: 98, status: 0, date: '', time: '' },
					{ nr: 106, status: 0, date: '', time: '' },
					{ nr: 114, status: 0, date: '', time: '' }
				],
			},
			// (3) Level B0
			{
				nr: 3,
				label: 'Level B0',
				min: 65,
				max: 96,
				stalls: [
					{ nr: 5, status: 0, date: '', time: '' },
					{ nr: 6, status: 0, date: '', time: '' },
					{ nr: 13, status: 0, date: '', time: '' },
					{ nr: 14, status: 0, date: '', time: '' },
					{ nr: 21, status: 0, date: '', time: '' },
					{ nr: 22, status: 0, date: '', time: '' },
					{ nr: 29, status: 0, date: '', time: '' },
					{ nr: 35, status: 0, date: '', time: '' },
					{ nr: 41, status: 0, date: '', time: '' },
					{ nr: 49, status: 0, date: '', time: '' },
					{ nr: 57, status: 0, date: '', time: '' },
					{ nr: 65, status: 0, date: '', time: '' },
					{ nr: 73, status: 0, date: '', time: '' },
					{ nr: 81, status: 0, date: '', time: '' },
					{ nr: 89, status: 0, date: '', time: '' },
					{ nr: 97, status: 0, date: '', time: '' },
					{ nr: 105, status: 0, date: '', time: '' },
					{ nr: 113, status: 0, date: '', time: '' }
				],
			},
			// (2) Level -1
			{
				nr: 2,
				label: 'Level -1',
				min: 1,
				max: 39,
				stalls: [
					{ nr: 3, status: 0, date: '', time: '' },
					{ nr: 4, status: 0, date: '', time: '' },
					{ nr: 11, status: 0, date: '', time: '' },
					{ nr: 12, status: 0, date: '', time: '' },
					{ nr: 19, status: 0, date: '', time: '' },
					{ nr: 20, status: 0, date: '', time: '' },
					{ nr: 27, status: 0, date: '', time: '' },
					{ nr: 28, status: 0, date: '', time: '' },
					{ nr: 33, status: 0, date: '', time: '' },
					{ nr: 34, status: 0, date: '', time: '' },
					{ nr: 39, status: 0, date: '', time: '' },
					{ nr: 40, status: 0, date: '', time: '' },
					{ nr: 46, status: 0, date: '', time: '' },
					{ nr: 47, status: 0, date: '', time: '' },
					{ nr: 48, status: 0, date: '', time: '' },
					{ nr: 54, status: 0, date: '', time: '' },
					{ nr: 55, status: 0, date: '', time: '' },
					{ nr: 56, status: 0, date: '', time: '' },
					{ nr: 62, status: 0, date: '', time: '' },
					{ nr: 63, status: 0, date: '', time: '' },
					{ nr: 64, status: 0, date: '', time: '' },
					{ nr: 70, status: 0, date: '', time: '' },
					{ nr: 71, status: 0, date: '', time: '' },
					{ nr: 72, status: 0, date: '', time: '' },
					{ nr: 78, status: 0, date: '', time: '' },
					{ nr: 79, status: 0, date: '', time: '' },
					{ nr: 80, status: 0, date: '', time: '' },
					{ nr: 86, status: 0, date: '', time: '' },
					{ nr: 87, status: 0, date: '', time: '' },
					{ nr: 88, status: 0, date: '', time: '' },					
					{ nr: 94, status: 0, date: '', time: '' },
					{ nr: 95, status: 0, date: '', time: '' },
					{ nr: 96, status: 0, date: '', time: '' },
					{ nr: 102, status: 0, date: '', time: '' },
					{ nr: 103, status: 0, date: '', time: '' },
					{ nr: 104, status: 0, date: '', time: '' },
					{ nr: 110, status: 0, date: '', time: '' },
					{ nr: 111, status: 0, date: '', time: '' },					
					{ nr: 112, status: 0, date: '', time: '' }
				],
			},
			// (1) Level -2
			{
				nr: 1,
				label: 'Level -2',
				min: 1,
				max: 39,
				stalls: [
					{ nr: 1, status: 0, date: '', time: '' },
					{ nr: 2, status: 0, date: '', time: '' },
					{ nr: 9, status: 0, date: '', time: '' },
					{ nr: 10, status: 0, date: '', time: '' },
					{ nr: 17, status: 0, date: '', time: '' },
					{ nr: 18, status: 0, date: '', time: '' },
					{ nr: 25, status: 0, date: '', time: '' },
					{ nr: 26, status: 0, date: '', time: '' },
					{ nr: 31, status: 0, date: '', time: '' },
					{ nr: 32, status: 0, date: '', time: '' },
					{ nr: 37, status: 0, date: '', time: '' },
					{ nr: 38, status: 0, date: '', time: '' },
					{ nr: 43, status: 0, date: '', time: '' },
					{ nr: 44, status: 0, date: '', time: '' },
					{ nr: 45, status: 0, date: '', time: '' },
					{ nr: 51, status: 0, date: '', time: '' },
					{ nr: 52, status: 0, date: '', time: '' },
					{ nr: 53, status: 0, date: '', time: '' },
					{ nr: 59, status: 0, date: '', time: '' },
					{ nr: 60, status: 0, date: '', time: '' },
					{ nr: 61, status: 0, date: '', time: '' },
					{ nr: 67, status: 0, date: '', time: '' },
					{ nr: 68, status: 0, date: '', time: '' },
					{ nr: 69, status: 0, date: '', time: '' },
					{ nr: 75, status: 0, date: '', time: '' },
					{ nr: 76, status: 0, date: '', time: '' },
					{ nr: 77, status: 0, date: '', time: '' },
					{ nr: 83, status: 0, date: '', time: '' },
					{ nr: 84, status: 0, date: '', time: '' },
					{ nr: 85, status: 0, date: '', time: '' },					
					{ nr: 91, status: 0, date: '', time: '' },
					{ nr: 92, status: 0, date: '', time: '' },
					{ nr: 93, status: 0, date: '', time: '' },
					{ nr: 99, status: 0, date: '', time: '' },
					{ nr: 100, status: 0, date: '', time: '' },
					{ nr: 101, status: 0, date: '', time: '' },
					{ nr: 107, status: 0, date: '', time: '' },
					{ nr: 108, status: 0, date: '', time: '' },					
					{ nr: 109, status: 0, date: '', time: '' }
				],
			}

		]
	};
	//return data;
}