/*
 * Map entity
 */
var utility = require('./Tools')
, moment = require('moment')
, moment_tz = require('moment-timezone');

exports.Map = Map();

exports.MapSizes = MapSizes();

exports.mapRead = function (byteIni, byteLen, data) {

	var RSVD = 65534;
	var LOCK = 65535;
	var m = Map();
	var x = 0;

	for (var l=0; l<m.levels.length; l++) {
    
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

exports.mapSize = function (byteIni, byteLen, data) {

	var RSVD = 65534;
	var LOCK = 65535;
	var m = MapSizes();
	var x = byteIni;

	for (var l=0; l<m.levels.length; l++) {
    
		for (var s=0; s<m.levels[l].stalls.length; s++) {
		    
			m.levels[l].stalls[s].status = utility.BytesToInt(data[x], data[x+1]);
			x += 2;
		}		
	}
	return m;
}

function Map () {
    
    //this.data = {
	//var data = {
	return {
	    map: 'System Map',
	    spaces: 256,
		free: 0,
		busy: 0,
		lock: 0,
	    levels: [
			// (1) andar +1
			{
				nr: 1,
				label: 'Andar +1',
				min: 1,
				max: 32,
				stalls: [
					{ nr: 1, status: 0, date: '', time: '' },
					{ nr: 2, status: 0, date: '', time: '' },
					{ nr: 3, status: 0, date: '', time: '' },
					{ nr: 4, status: 0, date: '', time: '' },
					{ nr: 5, status: 0, date: '', time: '' },
					{ nr: 6, status: 0, date: '', time: '' },
					{ nr: 7, status: 0, date: '', time: '' },
					{ nr: 8, status: 0, date: '', time: '' },
					{ nr: 9, status: 0, date: '', time: '' },
					{ nr: 10, status: 0, date: '', time: '' },
					{ nr: 11, status: 0, date: '', time: '' },
					{ nr: 12, status: 0, date: '', time: '' },
					{ nr: 13, status: 0, date: '', time: '' },
					{ nr: 14, status: 0, date: '', time: '' },
					{ nr: 15, status: 0, date: '', time: '' },
					{ nr: 16, status: 0, date: '', time: '' },
					{ nr: 17, status: 0, date: '', time: '' },
					{ nr: 18, status: 0, date: '', time: '' },
					{ nr: 19, status: 0, date: '', time: '' },
					{ nr: 20, status: 0, date: '', time: '' },
					{ nr: 21, status: 0, date: '', time: '' },
					{ nr: 22, status: 0, date: '', time: '' },
					{ nr: 23, status: 0, date: '', time: '' },
					{ nr: 24, status: 0, date: '', time: '' },
					{ nr: 25, status: 0, date: '', time: '' },
					{ nr: 26, status: 0, date: '', time: '' },
					{ nr: 27, status: 0, date: '', time: '' },
					{ nr: 28, status: 0, date: '', time: '' },
					{ nr: 29, status: 0, date: '', time: '' },
					{ nr: 30, status: 0, date: '', time: '' },					
					{ nr: 31, status: 0, date: '', time: '' },
					{ nr: 32, status: 0, date: '', time: '' }
				],
			},
			// (2) andar +2
			{
				nr: 2,
				label: 'Andar +2',
				min: 33,
				max: 64,
				stalls: [
					{ nr: 33, status: 0, date: '', time: '' },
					{ nr: 34, status: 0, date: '', time: '' },
					{ nr: 35, status: 0, date: '', time: '' },
					{ nr: 36, status: 0, date: '', time: '' },
					{ nr: 37, status: 0, date: '', time: '' },
					{ nr: 38, status: 0, date: '', time: '' },
					{ nr: 39, status: 0, date: '', time: '' },
					{ nr: 40, status: 0, date: '', time: '' },
					{ nr: 41, status: 0, date: '', time: '' },
					{ nr: 42, status: 0, date: '', time: '' },
					{ nr: 43, status: 0, date: '', time: '' },
					{ nr: 44, status: 0, date: '', time: '' },
					{ nr: 45, status: 0, date: '', time: '' },
					{ nr: 46, status: 0, date: '', time: '' },
					{ nr: 47, status: 0, date: '', time: '' },
					{ nr: 48, status: 0, date: '', time: '' },
					{ nr: 49, status: 0, date: '', time: '' },
					{ nr: 50, status: 0, date: '', time: '' },
					{ nr: 51, status: 0, date: '', time: '' },
					{ nr: 52, status: 0, date: '', time: '' },
					{ nr: 53, status: 0, date: '', time: '' },
					{ nr: 54, status: 0, date: '', time: '' },
					{ nr: 55, status: 0, date: '', time: '' },
					{ nr: 56, status: 0, date: '', time: '' },
					{ nr: 57, status: 0, date: '', time: '' },
					{ nr: 58, status: 0, date: '', time: '' },
					{ nr: 59, status: 0, date: '', time: '' },
					{ nr: 60, status: 0, date: '', time: '' },
					{ nr: 61, status: 0, date: '', time: '' },
					{ nr: 62, status: 0, date: '', time: '' },					
					{ nr: 63, status: 0, date: '', time: '' },
					{ nr: 64, status: 0, date: '', time: '' }
				],
			},
			// (3) andar +3
			{
				nr: 3,
				label: 'Andar +3',
				min: 65,
				max: 96,
				stalls: [
					{ nr: 65, status: 0, date: '', time: '' },
					{ nr: 66, status: 0, date: '', time: '' },
					{ nr: 67, status: 0, date: '', time: '' },
					{ nr: 68, status: 0, date: '', time: '' },
					{ nr: 69, status: 0, date: '', time: '' },
					{ nr: 70, status: 0, date: '', time: '' },
					{ nr: 71, status: 0, date: '', time: '' },
					{ nr: 72, status: 0, date: '', time: '' },
					{ nr: 73, status: 0, date: '', time: '' },
					{ nr: 74, status: 0, date: '', time: '' },
					{ nr: 75, status: 0, date: '', time: '' },
					{ nr: 76, status: 0, date: '', time: '' },
					{ nr: 77, status: 0, date: '', time: '' },
					{ nr: 78, status: 0, date: '', time: '' },
					{ nr: 79, status: 0, date: '', time: '' },
					{ nr: 80, status: 0, date: '', time: '' },
					{ nr: 81, status: 0, date: '', time: '' },
					{ nr: 82, status: 0, date: '', time: '' },
					{ nr: 83, status: 0, date: '', time: '' },
					{ nr: 84, status: 0, date: '', time: '' },
					{ nr: 85, status: 0, date: '', time: '' },
					{ nr: 86, status: 0, date: '', time: '' },
					{ nr: 87, status: 0, date: '', time: '' },
					{ nr: 88, status: 0, date: '', time: '' },
					{ nr: 89, status: 0, date: '', time: '' },
					{ nr: 90, status: 0, date: '', time: '' },
					{ nr: 91, status: 0, date: '', time: '' },
					{ nr: 92, status: 0, date: '', time: '' },
					{ nr: 93, status: 0, date: '', time: '' },
					{ nr: 94, status: 0, date: '', time: '' },					
					{ nr: 95, status: 0, date: '', time: '' },
					{ nr: 96, status: 0, date: '', time: '' }
				],
			},
			// (4) andar +4
			{
				nr: 4,
				label: 'Andar +4',
				min: 97,
				max: 128,
				stalls: [
					{ nr: 97, status: 0, date: '', time: '' },
					{ nr: 98, status: 0, date: '', time: '' },
					{ nr: 99, status: 0, date: '', time: '' },
					{ nr: 100, status: 0, date: '', time: '' },
					{ nr: 101, status: 0, date: '', time: '' },
					{ nr: 102, status: 0, date: '', time: '' },
					{ nr: 103, status: 0, date: '', time: '' },
					{ nr: 104, status: 0, date: '', time: '' },
					{ nr: 105, status: 0, date: '', time: '' },
					{ nr: 106, status: 0, date: '', time: '' },
					{ nr: 107, status: 0, date: '', time: '' },
					{ nr: 108, status: 0, date: '', time: '' },
					{ nr: 109, status: 0, date: '', time: '' },
					{ nr: 110, status: 0, date: '', time: '' },
					{ nr: 111, status: 0, date: '', time: '' },
					{ nr: 112, status: 0, date: '', time: '' },
					{ nr: 113, status: 0, date: '', time: '' },
					{ nr: 114, status: 0, date: '', time: '' },
					{ nr: 115, status: 0, date: '', time: '' },
					{ nr: 116, status: 0, date: '', time: '' },
					{ nr: 117, status: 0, date: '', time: '' },
					{ nr: 118, status: 0, date: '', time: '' },
					{ nr: 119, status: 0, date: '', time: '' },
					{ nr: 120, status: 0, date: '', time: '' },
					{ nr: 121, status: 0, date: '', time: '' },
					{ nr: 122, status: 0, date: '', time: '' },
					{ nr: 123, status: 0, date: '', time: '' },
					{ nr: 124, status: 0, date: '', time: '' },
					{ nr: 125, status: 0, date: '', time: '' },
					{ nr: 126, status: 0, date: '', time: '' },					
					{ nr: 127, status: 0, date: '', time: '' },
					{ nr: 128, status: 0, date: '', time: '' }
				],
			},
			// (5) andar +5
			{
				nr: 5,
				label: 'Andar +5',
				min: 129,
				max: 160,
				stalls: [
					{ nr: 129, status: 0, date: '', time: '' },
					{ nr: 130, status: 0, date: '', time: '' },
					{ nr: 131, status: 0, date: '', time: '' },
					{ nr: 132, status: 0, date: '', time: '' },
					{ nr: 133, status: 0, date: '', time: '' },
					{ nr: 134, status: 0, date: '', time: '' },
					{ nr: 135, status: 0, date: '', time: '' },
					{ nr: 136, status: 0, date: '', time: '' },
					{ nr: 137, status: 0, date: '', time: '' },
					{ nr: 138, status: 0, date: '', time: '' },
					{ nr: 139, status: 0, date: '', time: '' },
					{ nr: 140, status: 0, date: '', time: '' },
					{ nr: 141, status: 0, date: '', time: '' },
					{ nr: 142, status: 0, date: '', time: '' },
					{ nr: 143, status: 0, date: '', time: '' },
					{ nr: 144, status: 0, date: '', time: '' },
					{ nr: 145, status: 0, date: '', time: '' },
					{ nr: 146, status: 0, date: '', time: '' },
					{ nr: 147, status: 0, date: '', time: '' },
					{ nr: 148, status: 0, date: '', time: '' },
					{ nr: 149, status: 0, date: '', time: '' },
					{ nr: 150, status: 0, date: '', time: '' },
					{ nr: 151, status: 0, date: '', time: '' },
					{ nr: 152, status: 0, date: '', time: '' },
					{ nr: 153, status: 0, date: '', time: '' },
					{ nr: 154, status: 0, date: '', time: '' },
					{ nr: 155, status: 0, date: '', time: '' },
					{ nr: 156, status: 0, date: '', time: '' },
					{ nr: 157, status: 0, date: '', time: '' },
					{ nr: 158, status: 0, date: '', time: '' },					
					{ nr: 159, status: 0, date: '', time: '' },
					{ nr: 160, status: 0, date: '', time: '' }
				],
			},
			// (6) andar +6
			{
				nr: 6,
				label: 'Andar +6',
				min: 161,
				max: 192,
				stalls: [
					{ nr: 161, status: 0, date: '', time: '' },
					{ nr: 162, status: 0, date: '', time: '' },
					{ nr: 163, status: 0, date: '', time: '' },
					{ nr: 164, status: 0, date: '', time: '' },
					{ nr: 165, status: 0, date: '', time: '' },
					{ nr: 166, status: 0, date: '', time: '' },
					{ nr: 167, status: 0, date: '', time: '' },
					{ nr: 168, status: 0, date: '', time: '' },
					{ nr: 169, status: 0, date: '', time: '' },
					{ nr: 170, status: 0, date: '', time: '' },
					{ nr: 171, status: 0, date: '', time: '' },
					{ nr: 172, status: 0, date: '', time: '' },
					{ nr: 173, status: 0, date: '', time: '' },
					{ nr: 174, status: 0, date: '', time: '' },
					{ nr: 175, status: 0, date: '', time: '' },
					{ nr: 176, status: 0, date: '', time: '' },
					{ nr: 177, status: 0, date: '', time: '' },
					{ nr: 178, status: 0, date: '', time: '' },
					{ nr: 179, status: 0, date: '', time: '' },
					{ nr: 180, status: 0, date: '', time: '' },
					{ nr: 181, status: 0, date: '', time: '' },
					{ nr: 182, status: 0, date: '', time: '' },
					{ nr: 183, status: 0, date: '', time: '' },
					{ nr: 184, status: 0, date: '', time: '' },
					{ nr: 185, status: 0, date: '', time: '' },
					{ nr: 186, status: 0, date: '', time: '' },
					{ nr: 187, status: 0, date: '', time: '' },
					{ nr: 188, status: 0, date: '', time: '' },
					{ nr: 189, status: 0, date: '', time: '' },
					{ nr: 190, status: 0, date: '', time: '' },					
					{ nr: 191, status: 0, date: '', time: '' },
					{ nr: 192, status: 0, date: '', time: '' }
				],
			},
			// (7) andar +7
			{
				nr: 7,
				label: 'Andar +7',
				min: 193,
				max: 224,
				stalls: [
					{ nr: 193, status: 0, date: '', time: '' },
					{ nr: 194, status: 0, date: '', time: '' },
					{ nr: 195, status: 0, date: '', time: '' },
					{ nr: 196, status: 0, date: '', time: '' },
					{ nr: 197, status: 0, date: '', time: '' },
					{ nr: 198, status: 0, date: '', time: '' },
					{ nr: 199, status: 0, date: '', time: '' },
					{ nr: 200, status: 0, date: '', time: '' },
					{ nr: 201, status: 0, date: '', time: '' },
					{ nr: 202, status: 0, date: '', time: '' },
					{ nr: 203, status: 0, date: '', time: '' },
					{ nr: 204, status: 0, date: '', time: '' },
					{ nr: 205, status: 0, date: '', time: '' },
					{ nr: 206, status: 0, date: '', time: '' },
					{ nr: 207, status: 0, date: '', time: '' },
					{ nr: 208, status: 0, date: '', time: '' },
					{ nr: 209, status: 0, date: '', time: '' },
					{ nr: 210, status: 0, date: '', time: '' },
					{ nr: 211, status: 0, date: '', time: '' },
					{ nr: 212, status: 0, date: '', time: '' },
					{ nr: 213, status: 0, date: '', time: '' },
					{ nr: 214, status: 0, date: '', time: '' },
					{ nr: 215, status: 0, date: '', time: '' },
					{ nr: 216, status: 0, date: '', time: '' },
					{ nr: 217, status: 0, date: '', time: '' },
					{ nr: 218, status: 0, date: '', time: '' },
					{ nr: 219, status: 0, date: '', time: '' },
					{ nr: 220, status: 0, date: '', time: '' },
					{ nr: 221, status: 0, date: '', time: '' },
					{ nr: 222, status: 0, date: '', time: '' },					
					{ nr: 223, status: 0, date: '', time: '' },
					{ nr: 224, status: 0, date: '', time: '' }
				],
			},
			// (8) andar +8
			{
				nr: 8,
				label: 'Andar +8',
				min: 225,
				max: 256,
				stalls: [
					{ nr: 225, status: 0, date: '', time: '' },
					{ nr: 226, status: 0, date: '', time: '' },
					{ nr: 227, status: 0, date: '', time: '' },
					{ nr: 228, status: 0, date: '', time: '' },
					{ nr: 229, status: 0, date: '', time: '' },
					{ nr: 230, status: 0, date: '', time: '' },
					{ nr: 231, status: 0, date: '', time: '' },
					{ nr: 232, status: 0, date: '', time: '' },
					{ nr: 233, status: 0, date: '', time: '' },
					{ nr: 234, status: 0, date: '', time: '' },
					{ nr: 235, status: 0, date: '', time: '' },
					{ nr: 236, status: 0, date: '', time: '' },
					{ nr: 237, status: 0, date: '', time: '' },
					{ nr: 238, status: 0, date: '', time: '' },
					{ nr: 239, status: 0, date: '', time: '' },
					{ nr: 240, status: 0, date: '', time: '' },
					{ nr: 241, status: 0, date: '', time: '' },
					{ nr: 242, status: 0, date: '', time: '' },
					{ nr: 243, status: 0, date: '', time: '' },
					{ nr: 244, status: 0, date: '', time: '' },
					{ nr: 245, status: 0, date: '', time: '' },
					{ nr: 246, status: 0, date: '', time: '' },
					{ nr: 247, status: 0, date: '', time: '' },
					{ nr: 248, status: 0, date: '', time: '' },
					{ nr: 249, status: 0, date: '', time: '' },
					{ nr: 250, status: 0, date: '', time: '' },
					{ nr: 251, status: 0, date: '', time: '' },
					{ nr: 252, status: 0, date: '', time: '' },
					{ nr: 253, status: 0, date: '', time: '' },
					{ nr: 254, status: 0, date: '', time: '' },					
					{ nr: 255, status: 0, date: '', time: '' },
					{ nr: 256, status: 0, date: '', time: '' }
				],
			}
		]
	};
	//return data;
}

function MapSizes () {
    
    //this.data = {
	//var data = {
	return {
	    map: 'System Map',
	    spaces: 256,
		free: 0,
		busy: 0,
		lock: 0,
	    levels: [
			// (1) andar +1
			{
				nr: 1,
				label: 'Andar +1',
				min: 1,
				max: 32,
				stalls: [
					{ nr: 1, status: 0 },
					{ nr: 2, status: 0 },
					{ nr: 3, status: 0 },
					{ nr: 4, status: 0 },
					{ nr: 5, status: 0 },
					{ nr: 6, status: 0 },
					{ nr: 7, status: 0 },
					{ nr: 8, status: 0 },
					{ nr: 9, status: 0 },
					{ nr: 10, status: 0 },
					{ nr: 11, status: 0 },
					{ nr: 12, status: 0 },
					{ nr: 13, status: 0 },
					{ nr: 14, status: 0 },
					{ nr: 15, status: 0 },
					{ nr: 16, status: 0 },
					{ nr: 17, status: 0 },
					{ nr: 18, status: 0 },
					{ nr: 19, status: 0 },
					{ nr: 20, status: 0 },
					{ nr: 21, status: 0 },
					{ nr: 22, status: 0 },
					{ nr: 23, status: 0 },
					{ nr: 24, status: 0 },
					{ nr: 25, status: 0 },
					{ nr: 26, status: 0 },
					{ nr: 27, status: 0 },
					{ nr: 28, status: 0 },
					{ nr: 29, status: 0 },
					{ nr: 30, status: 0 },					
					{ nr: 31, status: 0 },
					{ nr: 32, status: 0 }
				],
			},
			// (2) andar +2
			{
				nr: 2,
				label: 'Andar +2',
				min: 33,
				max: 64,
				stalls: [
					{ nr: 33, status: 0 },
					{ nr: 34, status: 0 },
					{ nr: 35, status: 0 },
					{ nr: 36, status: 0 },
					{ nr: 37, status: 0 },
					{ nr: 38, status: 0 },
					{ nr: 39, status: 0 },
					{ nr: 40, status: 0 },
					{ nr: 41, status: 0 },
					{ nr: 42, status: 0 },
					{ nr: 43, status: 0 },
					{ nr: 44, status: 0 },
					{ nr: 45, status: 0 },
					{ nr: 46, status: 0 },
					{ nr: 47, status: 0 },
					{ nr: 48, status: 0 },
					{ nr: 49, status: 0 },
					{ nr: 50, status: 0 },
					{ nr: 51, status: 0 },
					{ nr: 52, status: 0 },
					{ nr: 53, status: 0 },
					{ nr: 54, status: 0 },
					{ nr: 55, status: 0 },
					{ nr: 56, status: 0 },
					{ nr: 57, status: 0 },
					{ nr: 58, status: 0 },
					{ nr: 59, status: 0 },
					{ nr: 60, status: 0 },
					{ nr: 61, status: 0 },
					{ nr: 62, status: 0 },					
					{ nr: 63, status: 0 },
					{ nr: 64, status: 0 }
				],
			},
			// (3) andar +3
			{
				nr: 3,
				label: 'Andar +3',
				min: 65,
				max: 96,
				stalls: [
					{ nr: 65, status: 0 },
					{ nr: 66, status: 0 },
					{ nr: 67, status: 0 },
					{ nr: 68, status: 0 },
					{ nr: 69, status: 0 },
					{ nr: 70, status: 0 },
					{ nr: 71, status: 0 },
					{ nr: 72, status: 0 },
					{ nr: 73, status: 0 },
					{ nr: 74, status: 0 },
					{ nr: 75, status: 0 },
					{ nr: 76, status: 0 },
					{ nr: 77, status: 0 },
					{ nr: 78, status: 0 },
					{ nr: 79, status: 0 },
					{ nr: 80, status: 0 },
					{ nr: 81, status: 0 },
					{ nr: 82, status: 0 },
					{ nr: 83, status: 0 },
					{ nr: 84, status: 0 },
					{ nr: 85, status: 0 },
					{ nr: 86, status: 0 },
					{ nr: 87, status: 0 },
					{ nr: 88, status: 0 },
					{ nr: 89, status: 0 },
					{ nr: 90, status: 0 },
					{ nr: 91, status: 0 },
					{ nr: 92, status: 0 },
					{ nr: 93, status: 0 },
					{ nr: 94, status: 0 },					
					{ nr: 95, status: 0 },
					{ nr: 96, status: 0 }
				],
			},
			// (4) andar +4
			{
				nr: 4,
				label: 'Andar +4',
				min: 97,
				max: 128,
				stalls: [
					{ nr: 97, status: 0 },
					{ nr: 98, status: 0 },
					{ nr: 99, status: 0 },
					{ nr: 100, status: 0 },
					{ nr: 101, status: 0 },
					{ nr: 102, status: 0 },
					{ nr: 103, status: 0 },
					{ nr: 104, status: 0 },
					{ nr: 105, status: 0 },
					{ nr: 106, status: 0 },
					{ nr: 107, status: 0 },
					{ nr: 108, status: 0 },
					{ nr: 109, status: 0 },
					{ nr: 110, status: 0 },
					{ nr: 111, status: 0 },
					{ nr: 112, status: 0 },
					{ nr: 113, status: 0 },
					{ nr: 114, status: 0 },
					{ nr: 115, status: 0 },
					{ nr: 116, status: 0 },
					{ nr: 117, status: 0 },
					{ nr: 118, status: 0 },
					{ nr: 119, status: 0 },
					{ nr: 120, status: 0 },
					{ nr: 121, status: 0 },
					{ nr: 122, status: 0 },
					{ nr: 123, status: 0 },
					{ nr: 124, status: 0 },
					{ nr: 125, status: 0 },
					{ nr: 126, status: 0 },					
					{ nr: 127, status: 0 },
					{ nr: 128, status: 0 }
				],
			},
			// (5) andar +5
			{
				nr: 5,
				label: 'Andar +5',
				min: 129,
				max: 160,
				stalls: [
					{ nr: 129, status: 0 },
					{ nr: 130, status: 0 },
					{ nr: 131, status: 0 },
					{ nr: 132, status: 0 },
					{ nr: 133, status: 0 },
					{ nr: 134, status: 0 },
					{ nr: 135, status: 0 },
					{ nr: 136, status: 0 },
					{ nr: 137, status: 0 },
					{ nr: 138, status: 0 },
					{ nr: 139, status: 0 },
					{ nr: 140, status: 0 },
					{ nr: 141, status: 0 },
					{ nr: 142, status: 0 },
					{ nr: 143, status: 0 },
					{ nr: 144, status: 0 },
					{ nr: 145, status: 0 },
					{ nr: 146, status: 0 },
					{ nr: 147, status: 0 },
					{ nr: 148, status: 0 },
					{ nr: 149, status: 0 },
					{ nr: 150, status: 0 },
					{ nr: 151, status: 0 },
					{ nr: 152, status: 0 },
					{ nr: 153, status: 0 },
					{ nr: 154, status: 0 },
					{ nr: 155, status: 0 },
					{ nr: 156, status: 0 },
					{ nr: 157, status: 0 },
					{ nr: 158, status: 0 },					
					{ nr: 159, status: 0 },
					{ nr: 160, status: 0 }
				],
			},
			// (6) andar +6
			{
				nr: 6,
				label: 'Andar +6',
				min: 161,
				max: 192,
				stalls: [
					{ nr: 161, status: 0 },
					{ nr: 162, status: 0 },
					{ nr: 163, status: 0 },
					{ nr: 164, status: 0 },
					{ nr: 165, status: 0 },
					{ nr: 166, status: 0 },
					{ nr: 167, status: 0 },
					{ nr: 168, status: 0 },
					{ nr: 169, status: 0 },
					{ nr: 170, status: 0 },
					{ nr: 171, status: 0 },
					{ nr: 172, status: 0 },
					{ nr: 173, status: 0 },
					{ nr: 174, status: 0 },
					{ nr: 175, status: 0 },
					{ nr: 176, status: 0 },
					{ nr: 177, status: 0 },
					{ nr: 178, status: 0 },
					{ nr: 179, status: 0 },
					{ nr: 180, status: 0 },
					{ nr: 181, status: 0 },
					{ nr: 182, status: 0 },
					{ nr: 183, status: 0 },
					{ nr: 184, status: 0 },
					{ nr: 185, status: 0 },
					{ nr: 186, status: 0 },
					{ nr: 187, status: 0 },
					{ nr: 188, status: 0 },
					{ nr: 189, status: 0 },
					{ nr: 190, status: 0 },					
					{ nr: 191, status: 0 },
					{ nr: 192, status: 0 }
				],
			},
			// (7) andar +7
			{
				nr: 7,
				label: 'Andar +7',
				min: 193,
				max: 224,
				stalls: [
					{ nr: 193, status: 0 },
					{ nr: 194, status: 0 },
					{ nr: 195, status: 0 },
					{ nr: 196, status: 0 },
					{ nr: 197, status: 0 },
					{ nr: 198, status: 0 },
					{ nr: 199, status: 0 },
					{ nr: 200, status: 0 },
					{ nr: 201, status: 0 },
					{ nr: 202, status: 0 },
					{ nr: 203, status: 0 },
					{ nr: 204, status: 0 },
					{ nr: 205, status: 0 },
					{ nr: 206, status: 0 },
					{ nr: 207, status: 0 },
					{ nr: 208, status: 0 },
					{ nr: 209, status: 0 },
					{ nr: 210, status: 0 },
					{ nr: 211, status: 0 },
					{ nr: 212, status: 0 },
					{ nr: 213, status: 0 },
					{ nr: 214, status: 0 },
					{ nr: 215, status: 0 },
					{ nr: 216, status: 0 },
					{ nr: 217, status: 0 },
					{ nr: 218, status: 0 },
					{ nr: 219, status: 0 },
					{ nr: 220, status: 0 },
					{ nr: 221, status: 0 },
					{ nr: 222, status: 0 },					
					{ nr: 223, status: 0 },
					{ nr: 224, status: 0 }
				],
			},
			// (8) andar +8
			{
				nr: 8,
				label: 'Andar +8',
				min: 225,
				max: 256,
				stalls: [
					{ nr: 225, status: 0 },
					{ nr: 226, status: 0 },
					{ nr: 227, status: 0 },
					{ nr: 228, status: 0 },
					{ nr: 229, status: 0 },
					{ nr: 230, status: 0 },
					{ nr: 231, status: 0 },
					{ nr: 232, status: 0 },
					{ nr: 233, status: 0 },
					{ nr: 234, status: 0 },
					{ nr: 235, status: 0 },
					{ nr: 236, status: 0 },
					{ nr: 237, status: 0 },
					{ nr: 238, status: 0 },
					{ nr: 239, status: 0 },
					{ nr: 240, status: 0 },
					{ nr: 241, status: 0 },
					{ nr: 242, status: 0 },
					{ nr: 243, status: 0 },
					{ nr: 244, status: 0 },
					{ nr: 245, status: 0 },
					{ nr: 246, status: 0 },
					{ nr: 247, status: 0 },
					{ nr: 248, status: 0 },
					{ nr: 249, status: 0 },
					{ nr: 250, status: 0 },
					{ nr: 251, status: 0 },
					{ nr: 252, status: 0 },
					{ nr: 253, status: 0 },
					{ nr: 254, status: 0 },					
					{ nr: 255, status: 0 },
					{ nr: 256, status: 0 }
				],
			}
		]
	};
	//return data;
}

