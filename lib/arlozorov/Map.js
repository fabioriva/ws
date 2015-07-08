/*
 * Map entity
 */
var utility = require('./Tools')
, moment = require('moment')
, moment_tz = require('moment-timezone');

exports.Map = Map();

exports.mapRead = function (byteIni, byteLen, data) {

	var RSVD = 65534;
	var LOCK = 65535;
	var m = Map();
	var x = byteIni;

	//for (var l=0; l<m.levels.length; l++) {
	for (var l=6; l>=0; l--) {
    
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
	}
	return m;
}

function Map () {
    
    //this.data = {
	//var data = {
	return {
	    map: 'System Map',
	    spaces: 42,
		free: 0,
		busy: 0,
		lock: 0,
	    levels: [
			// (7) basement -1
			{
				nr: 7,
				label: 'Basement -1',
				min: 37,
				max: 42,
				stalls: [
					{ nr: 37, status: 0, date: '', time: '' },
					{ nr: 38, status: 0, date: '', time: '' },
					{ nr: 39, status: 0, date: '', time: '' },
					{ nr: 40, status: 0, date: '', time: '' },
					{ nr: 41, status: 0, date: '', time: '' },
					{ nr: 42, status: 0, date: '', time: '' }
				],
			},
			// (6) basement -2
			{
				nr: 6,
				label: 'Basement -2',
				min: 31,
				max: 36,
				stalls: [
					{ nr: 31, status: 0, date: '', time: '' },
					{ nr: 32, status: 0, date: '', time: '' },
					{ nr: 33, status: 0, date: '', time: '' },
					{ nr: 34, status: 0, date: '', time: '' },
					{ nr: 35, status: 0, date: '', time: '' },
					{ nr: 36, status: 0, date: '', time: '' }
				],
			},
			// (5) basement -3
			{
				nr: 5,
				label: 'Basement -3',
				min: 25,
				max: 30,
				stalls: [
					{ nr: 25, status: 0, date: '', time: '' },
					{ nr: 26, status: 0, date: '', time: '' },
					{ nr: 27, status: 0, date: '', time: '' },
					{ nr: 28, status: 0, date: '', time: '' },
					{ nr: 29, status: 0, date: '', time: '' },
					{ nr: 30, status: 0, date: '', time: '' }
				],
			},
			// (4) basement -4
			{
				nr: 4,
				label: 'Basement -4',
				min: 19,
				max: 24,
				stalls: [
					{ nr: 19, status: 0, date: '', time: '' },
					{ nr: 20, status: 0, date: '', time: '' },
					{ nr: 21, status: 0, date: '', time: '' },
					{ nr: 22, status: 0, date: '', time: '' },
					{ nr: 23, status: 0, date: '', time: '' },
					{ nr: 24, status: 0, date: '', time: '' }
				],
			},
			// (3) basement -5
			{
				nr: 3,
				label: 'Basement -5',
				min: 13,
				max: 18,
				stalls: [
					{ nr: 13, status: 0, date: '', time: '' },
					{ nr: 14, status: 0, date: '', time: '' },
					{ nr: 15, status: 0, date: '', time: '' },
					{ nr: 16, status: 0, date: '', time: '' },
					{ nr: 17, status: 0, date: '', time: '' },
					{ nr: 18, status: 0, date: '', time: '' }
				],
			},
			// (2) basement -6
			{
				nr: 2,
				label: 'Basement -6',
				min: 7,
				max: 12,
				stalls: [
					{ nr: 7, status: 0, date: '', time: '' },
					{ nr: 8, status: 0, date: '', time: '' },
					{ nr: 9, status: 0, date: '', time: '' },
					{ nr: 10, status: 0, date: '', time: '' },
					{ nr: 11, status: 0, date: '', time: '' },
					{ nr: 12, status: 0, date: '', time: '' }
				],
			},
			// (1) basement -7
			{
				nr: 1,
				label: 'Basement -7',
				min: 1,
				max: 6,
				stalls: [
					{ nr: 1, status: 0, date: '', time: '' },
					{ nr: 2, status: 0, date: '', time: '' },
					{ nr: 3, status: 0, date: '', time: '' },
					{ nr: 4, status: 0, date: '', time: '' },
					{ nr: 5, status: 0, date: '', time: '' },
					{ nr: 6, status: 0, date: '', time: '' }
				],
			}
		]
	};
	//return data;
}
