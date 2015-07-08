/*
 * I/O entity
 */
var utility = require('./Tools');

exports.Rack_el_1 = Rack_IO_EL1();
exports.Rack_el_2 = Rack_IO_EL2();
exports.Rack_el_3 = Rack_IO_EL3();
exports.Rack_el_4 = Rack_IO_EL4();

exports.Rack_sh_11 = Rack_IO_SH11();
exports.Rack_sh_12 = Rack_IO_SH12();
exports.Rack_sh_21 = Rack_IO_SH21();
exports.Rack_sh_22 = Rack_IO_SH22();
exports.Rack_sh_31 = Rack_IO_SH31();
exports.Rack_sh_32 = Rack_IO_SH32();
exports.Rack_sh_41 = Rack_IO_SH41();
exports.Rack_sh_42 = Rack_IO_SH42();
exports.Rack_sh_51 = Rack_IO_SH51();
exports.Rack_sh_52 = Rack_IO_SH52();
exports.Rack_sh_61 = Rack_IO_SH61();
exports.Rack_sh_62 = Rack_IO_SH62();
exports.Rack_sh_71 = Rack_IO_SH71();
exports.Rack_sh_72 = Rack_IO_SH72();
exports.Rack_sh_81 = Rack_IO_SH81();
exports.Rack_sh_82 = Rack_IO_SH82();

exports.Rack_eu_11 = Rack_IO_EU11();
exports.Rack_eu_12 = Rack_IO_EU12();
exports.Rack_eu_13 = Rack_IO_EU13();
exports.Rack_eu_14 = Rack_IO_EU14();

exports.readIo = function (byteIni, byteLen, data, RACK) {

	var r = RACK;
	var x = byteIni;

	for (var c=0; c<r.length; c++) {

		for (var b=0; b<r[c].bytes.length; b++) {	
	
			var m = 1;
			for (var i=0; i<r[c].bytes[b].bits.length; i++) {
		   
				var status = data[x] & m;
				r[c].bytes[b].bits[i].status = (status ? 1 : 0);
				m *= 2;
//				console.log(r[c].bytes[b].bits[i].type + r[c].bytes[b].bits[i].byte + r[c].bytes[b].bits[i].bit + ':' + r[c].bytes[b].bits[i].status);
			}
			x += 1;
		}
	}
	return r;
}

/* IO EL1 */
function Rack_IO_EL1 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB0',
			bits: [
				{ cpu: '1', type: 'E', byte: '0', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard' },
				{ cpu: '1', type: 'E', byte: '0', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '3', status: '0', label: 'D', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '4', status: '0', label: 'OK', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '5', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '6', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '7', status: '0', label: 'S2', text: 'Mobile keyboard' }]
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB1',
			bits: [
				{ cpu: '1', type: 'E', byte: '1', bit: '0', status: '0', label: 'DB32', text: 'Data introduction 1' },
				{ cpu: '1', type: 'E', byte: '1', bit: '1', status: '0', label: 'DBHZ', text: 'Data introduction 2' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '2', status: '0', label: 'K2', text: 'Hoisting motor ON' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '3', status: '0', label: 'BLW', text: 'Blower ON' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '4', status: '0', label: 'SBK', text: 'Hoisting motor brake ON' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '5', status: '0', label: 'EME', text: 'Emergency stop' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '6', status: '0', label: 'S1', text: 'Manual/Automatic mode switch' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB2',
			bits: [
				{ cpu: '1', type: 'E', byte: '2', bit: '0', status: '0', label: 'EOM', text: 'Elevator unlocked' },
				{ cpu: '1', type: 'E', byte: '2', bit: '1', status: '0', label: 'EZM', text: 'Elevator locked' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '2', status: '0', label: 'Q2', text: 'Circuit braker locking pin motor' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '3', status: '0', label: 'PH3', text: 'Phase ckeck' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '4', status: '0', label: 'FTX', text: 'Elevator safety sensor' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '5', status: '0', label: 'IEN', text: 'Inverter ready' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '6', status: '0', label: 'IER', text: 'Inverter error' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '7', status: '0', label: 'EFA', text: 'Higher level position check' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB3',
			bits: [
				{ cpu: '1', type: 'E', byte: '3', bit: '0', status: '0', label: 'FTM1', text: 'Elevator full pallet check' },
				{ cpu: '1', type: 'E', byte: '3', bit: '1', status: '0', label: 'FTM2', text: 'Elevator empty pallet check' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '2', status: '0', label: 'EFB', text: 'Lower level position check' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '4', status: '0', label: 'TCF', text: 'Trolley presence full pallet' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '5', status: '0', label: 'TCE', text: 'Trolley presence empty pallet' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '6', status: '0', label: 'PCF', text: 'Pallet presence full pallet' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '7', status: '0', label: 'PCE', text: 'Pallet presence empty pallet' }]	
			}]
		},
		// Card 5
		{
		nr: '5',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB4',
			bits: [
				{ cpu: '1', type: 'E', byte: '4', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '4', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 6
		{
		nr: '6',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB0',
			bits: [
				{ cpu: '1', type: 'A', byte: '0', bit: '0', status: '0', label: 'K2', text: 'Hoisting motor power line' },
				{ cpu: '1', type: 'A', byte: '0', bit: '1', status: '0', label: 'SK1', text: 'Hoisting motor brake' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '2', status: '0', label: 'SMB', text: 'Locking pin unlock' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '3', status: '0', label: 'SMA', text: 'Locking pin lock' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '4', status: '0', label: 'IV', text: 'Inverter enabled' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '5', status: '0', label: 'K1', text: 'Inverter is ON' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '7', status: '0', label: 'LC', text: 'System ready' }]	
			}]
		},
		// Card 7
		{
		nr: '7',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB1',
			bits: [
				{ cpu: '1', type: 'A', byte: '1', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard' },
				{ cpu: '1', type: 'A', byte: '1', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '3', status: '0', label: 'D', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '4', status: '0', label: 'AD1', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '5', status: '0', label: 'AD2', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '6', status: '0', label: 'AD3', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '7', status: '0', label: 'STR', text: 'Mobile keyboard' }]	
			}]
		},
		// Card 8
		{
		nr: '8',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB2',
			bits: [
				{ cpu: '1', type: 'A', byte: '2', bit: '0', status: '0', label: 'FAN', text: 'Hoisting motor fan' },
				{ cpu: '1', type: 'A', byte: '2', bit: '1', status: '0', label: 'SK2', text: 'Hoisting motor brake' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '2', status: '0', label: 'RA', text: 'Inverter FWD' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '3', status: '0', label: 'RB', text: 'Inverter BWD' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '4', status: '0', label: 'RST', text: 'Inverter Reset' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '5', status: '0', label: 'CPU', text: 'CPU no error' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '6', status: '0', label: 'FTX', text: 'Intertravamento check' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 9
		{
		nr: '9',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB3',
			bits: [
				{ cpu: '1', type: 'A', byte: '3', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '3', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '7', status: '0', label: '', text: '' }]	
			}]
		}
	];
	return data;
}

/* IO EL2 */
function Rack_IO_EL2 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB5',
			bits: [
				{ cpu: '1', type: 'E', byte: '5', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard' },
				{ cpu: '1', type: 'E', byte: '5', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '3', status: '0', label: 'D', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '4', status: '0', label: 'OK', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '5', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '6', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '7', status: '0', label: 'S2', text: 'Mobile keyboard' }]
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB6',
			bits: [
				{ cpu: '1', type: 'E', byte: '6', bit: '0', status: '0', label: 'DB32', text: 'Data introduction 1' },
				{ cpu: '1', type: 'E', byte: '6', bit: '1', status: '0', label: 'DBHZ', text: 'Data introduction 2' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '2', status: '0', label: 'K2', text: 'Hoisting motor ON' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '3', status: '0', label: 'BLW', text: 'Blower ON' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '4', status: '0', label: 'SBK', text: 'Hoisting motor brake ON' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '5', status: '0', label: 'EME', text: 'Emergency stop' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '6', status: '0', label: 'S1', text: 'Manual/Automatic mode switch' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB7',
			bits: [
				{ cpu: '1', type: 'E', byte: '7', bit: '0', status: '0', label: 'EOM', text: 'Elevator unlocked' },
				{ cpu: '1', type: 'E', byte: '7', bit: '1', status: '0', label: 'EZM', text: 'Elevator locked' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '2', status: '0', label: 'Q2', text: 'Circuit braker locking pin motor' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '3', status: '0', label: 'PH3', text: 'Phase ckeck' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '4', status: '0', label: 'FTX', text: 'Elevator safety sensor' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '5', status: '0', label: 'IEN', text: 'Inverter ready' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '6', status: '0', label: 'IER', text: 'Inverter error' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '7', status: '0', label: 'EFA', text: 'Higher level position check' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB8',
			bits: [
				{ cpu: '1', type: 'E', byte: '8', bit: '0', status: '0', label: 'FTM1', text: 'Elevator full pallet check' },
				{ cpu: '1', type: 'E', byte: '8', bit: '1', status: '0', label: 'FTM2', text: 'Elevator empty pallet check' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '2', status: '0', label: 'EFB', text: 'Lower level position check' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '4', status: '0', label: 'TCF', text: 'Trolley presence full pallet' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '5', status: '0', label: 'TCE', text: 'Trolley presence empty pallet' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '6', status: '0', label: 'PCF', text: 'Pallet presence full pallet' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '7', status: '0', label: 'PCE', text: 'Pallet presence empty pallet' }]	
			}]
		},
		// Card 5
		{
		nr: '5',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB9',
			bits: [
				{ cpu: '1', type: 'E', byte: '9', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '9', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 6
		{
		nr: '6',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB4',
			bits: [
				{ cpu: '1', type: 'A', byte: '4', bit: '0', status: '0', label: 'K2', text: 'Hoisting motor power line' },
				{ cpu: '1', type: 'A', byte: '4', bit: '1', status: '0', label: 'SK1', text: 'Hoisting motor brake' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '2', status: '0', label: 'SMB', text: 'Locking pin unlock' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '3', status: '0', label: 'SMA', text: 'Locking pin lock' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '4', status: '0', label: 'IV', text: 'Inverter enabled' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '5', status: '0', label: 'K1', text: 'Inverter is ON' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '7', status: '0', label: 'LC', text: 'System ready' }]	
			}]
		},
		// Card 7
		{
		nr: '7',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB5',
			bits: [
				{ cpu: '1', type: 'A', byte: '5', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard' },
				{ cpu: '1', type: 'A', byte: '5', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '3', status: '0', label: 'D', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '4', status: '0', label: 'AD1', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '5', status: '0', label: 'AD2', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '6', status: '0', label: 'AD3', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '7', status: '0', label: 'STR', text: 'Mobile keyboard' }]	
			}]
		},
		// Card 8
		{
		nr: '8',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB6',
			bits: [
				{ cpu: '1', type: 'A', byte: '6', bit: '0', status: '0', label: 'FAN', text: 'Hoisting motor fan' },
				{ cpu: '1', type: 'A', byte: '6', bit: '1', status: '0', label: 'SK2', text: 'Hoisting motor brake' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '2', status: '0', label: 'RA', text: 'Inverter FWD' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '3', status: '0', label: 'RB', text: 'Inverter BWD' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '4', status: '0', label: 'RST', text: 'Inverter Reset' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '5', status: '0', label: 'CPU', text: 'CPU no error' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '6', status: '0', label: 'FTX', text: 'Intertravamento check' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 9
		{
		nr: '9',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB7',
			bits: [
				{ cpu: '1', type: 'A', byte: '7', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '7', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '7', status: '0', label: '', text: '' }]	
			}]
		}
	];
	return data;
}

/* IO EL3 */
function Rack_IO_EL3 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB10',
			bits: [
				{ cpu: '1', type: 'E', byte: '10', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard' },
				{ cpu: '1', type: 'E', byte: '10', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '3', status: '0', label: 'D', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '4', status: '0', label: 'OK', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '5', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '6', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '7', status: '0', label: 'S2', text: 'Mobile keyboard' }]
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB11',
			bits: [
				{ cpu: '1', type: 'E', byte: '11', bit: '0', status: '0', label: 'DB32', text: 'Data introduction 1' },
				{ cpu: '1', type: 'E', byte: '11', bit: '1', status: '0', label: 'DBHZ', text: 'Data introduction 2' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '2', status: '0', label: 'K2', text: 'Hoisting motor ON' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '3', status: '0', label: 'BLW', text: 'Blower ON' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '4', status: '0', label: 'SBK', text: 'Hoisting motor brake ON' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '5', status: '0', label: 'EME', text: 'Emergency stop' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '6', status: '0', label: 'S1', text: 'Manual/Automatic mode switch' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB12',
			bits: [
				{ cpu: '1', type: 'E', byte: '12', bit: '0', status: '0', label: 'EOM', text: 'Elevator unlocked' },
				{ cpu: '1', type: 'E', byte: '12', bit: '1', status: '0', label: 'EZM', text: 'Elevator locked' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '2', status: '0', label: 'Q2', text: 'Circuit braker locking pin motor' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '3', status: '0', label: 'PH3', text: 'Phase ckeck' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '4', status: '0', label: 'FTX', text: 'Elevator safety sensor' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '5', status: '0', label: 'IEN', text: 'Inverter ready' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '6', status: '0', label: 'IER', text: 'Inverter error' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '7', status: '0', label: 'EFA', text: 'Higher level position check' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB13',
			bits: [
				{ cpu: '1', type: 'E', byte: '13', bit: '0', status: '0', label: 'FTM1', text: 'Elevator full pallet check' },
				{ cpu: '1', type: 'E', byte: '13', bit: '1', status: '0', label: 'FTM2', text: 'Elevator empty pallet check' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '2', status: '0', label: 'EFB', text: 'Lower level position check' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '4', status: '0', label: 'TCF', text: 'Trolley presence full pallet' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '5', status: '0', label: 'TCE', text: 'Trolley presence empty pallet' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '6', status: '0', label: 'PCF', text: 'Pallet presence full pallet' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '7', status: '0', label: 'PCE', text: 'Pallet presence empty pallet' }]	
			}]
		},
		// Card 5
		{
		nr: '5',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB14',
			bits: [
				{ cpu: '1', type: 'E', byte: '14', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '14', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 6
		{
		nr: '6',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB8',
			bits: [
				{ cpu: '1', type: 'A', byte: '8', bit: '0', status: '0', label: 'K2', text: 'Hoisting motor power line' },
				{ cpu: '1', type: 'A', byte: '8', bit: '1', status: '0', label: 'SK1', text: 'Hoisting motor brake' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '2', status: '0', label: 'SMB', text: 'Locking pin unlock' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '3', status: '0', label: 'SMA', text: 'Locking pin lock' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '4', status: '0', label: 'IV', text: 'Inverter enabled' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '5', status: '0', label: 'K1', text: 'Inverter is ON' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '7', status: '0', label: 'LC', text: 'System ready' }]	
			}]
		},
		// Card 7
		{
		nr: '7',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB9',
			bits: [
				{ cpu: '1', type: 'A', byte: '9', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard' },
				{ cpu: '1', type: 'A', byte: '9', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '3', status: '0', label: 'D', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '4', status: '0', label: 'AD1', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '5', status: '0', label: 'AD2', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '6', status: '0', label: 'AD3', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '7', status: '0', label: 'STR', text: 'Mobile keyboard' }]	
			}]
		},
		// Card 8
		{
		nr: '8',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB10',
			bits: [
				{ cpu: '1', type: 'A', byte: '10', bit: '0', status: '0', label: 'FAN', text: 'Hoisting motor fan' },
				{ cpu: '1', type: 'A', byte: '10', bit: '1', status: '0', label: 'SK2', text: 'Hoisting motor brake' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '2', status: '0', label: 'RA', text: 'Inverter FWD' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '3', status: '0', label: 'RB', text: 'Inverter BWD' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '4', status: '0', label: 'RST', text: 'Inverter Reset' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '5', status: '0', label: 'CPU', text: 'CPU no error' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '6', status: '0', label: 'FTX', text: 'Intertravamento check' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 9
		{
		nr: '9',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB11',
			bits: [
				{ cpu: '1', type: 'A', byte: '11', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '11', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '7', status: '0', label: '', text: '' }]	
			}]
		}
	];
	return data;
}

/* IO EL4 */
function Rack_IO_EL4 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB15',
			bits: [
				{ cpu: '1', type: 'E', byte: '15', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard' },
				{ cpu: '1', type: 'E', byte: '15', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '3', status: '0', label: 'D', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '4', status: '0', label: 'OK', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '5', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '6', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '7', status: '0', label: 'S2', text: 'Mobile keyboard' }]
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB16',
			bits: [
				{ cpu: '1', type: 'E', byte: '16', bit: '0', status: '0', label: 'DB32', text: 'Data introduction 1' },
				{ cpu: '1', type: 'E', byte: '16', bit: '1', status: '0', label: 'DBHZ', text: 'Data introduction 2' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '2', status: '0', label: 'K2', text: 'Hoisting motor ON' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '3', status: '0', label: 'BLW', text: 'Blower ON' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '4', status: '0', label: 'SBK', text: 'Hoisting motor brake ON' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '5', status: '0', label: 'EME', text: 'Emergency stop' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '6', status: '0', label: 'S1', text: 'Manual/Automatic mode switch' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB17',
			bits: [
				{ cpu: '1', type: 'E', byte: '17', bit: '0', status: '0', label: 'EOM', text: 'Elevator unlocked' },
				{ cpu: '1', type: 'E', byte: '17', bit: '1', status: '0', label: 'EZM', text: 'Elevator locked' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '2', status: '0', label: 'Q2', text: 'Circuit braker locking pin motor' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '3', status: '0', label: 'PH3', text: 'Phase ckeck' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '4', status: '0', label: 'FTX', text: 'Elevator safety sensor' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '5', status: '0', label: 'IEN', text: 'Inverter ready' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '6', status: '0', label: 'IER', text: 'Inverter error' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '7', status: '0', label: 'EFA', text: 'Higher level position check' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB18',
			bits: [
				{ cpu: '1', type: 'E', byte: '18', bit: '0', status: '0', label: 'FTM1', text: 'Elevator full pallet check' },
				{ cpu: '1', type: 'E', byte: '18', bit: '1', status: '0', label: 'FTM2', text: 'Elevator empty pallet check' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '2', status: '0', label: 'EFB', text: 'Lower level position check' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '4', status: '0', label: 'TCF', text: 'Trolley presence full pallet' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '5', status: '0', label: 'TCE', text: 'Trolley presence empty pallet' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '6', status: '0', label: 'PCF', text: 'Pallet presence full pallet' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '7', status: '0', label: 'PCE', text: 'Pallet presence empty pallet' }]	
			}]
		},
		// Card 5
		{
		nr: '5',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB19',
			bits: [
				{ cpu: '1', type: 'E', byte: '19', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '19', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 6
		{
		nr: '6',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB12',
			bits: [
				{ cpu: '1', type: 'A', byte: '12', bit: '0', status: '0', label: 'K2', text: 'Hoisting motor power line' },
				{ cpu: '1', type: 'A', byte: '12', bit: '1', status: '0', label: 'SK1', text: 'Hoisting motor brake' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '2', status: '0', label: 'SMB', text: 'Locking pin unlock' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '3', status: '0', label: 'SMA', text: 'Locking pin lock' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '4', status: '0', label: 'IV', text: 'Inverter enabled' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '5', status: '0', label: 'K1', text: 'Inverter is ON' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '7', status: '0', label: 'LC', text: 'System ready' }]	
			}]
		},
		// Card 7
		{
		nr: '7',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB13',
			bits: [
				{ cpu: '1', type: 'A', byte: '13', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard' },
				{ cpu: '1', type: 'A', byte: '13', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '3', status: '0', label: 'D', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '4', status: '0', label: 'AD1', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '5', status: '0', label: 'AD2', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '6', status: '0', label: 'AD3', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '7', status: '0', label: 'STR', text: 'Mobile keyboard' }]	
			}]
		},
		// Card 8
		{
		nr: '8',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB14',
			bits: [
				{ cpu: '1', type: 'A', byte: '14', bit: '0', status: '0', label: 'FAN', text: 'Hoisting motor fan' },
				{ cpu: '1', type: 'A', byte: '14', bit: '1', status: '0', label: 'SK2', text: 'Hoisting motor brake' },	
				{ cpu: '1', type: 'A', byte: '14', bit: '2', status: '0', label: 'RA', text: 'Inverter FWD' },	
				{ cpu: '1', type: 'A', byte: '14', bit: '3', status: '0', label: 'RB', text: 'Inverter BWD' },	
				{ cpu: '1', type: 'A', byte: '14', bit: '4', status: '0', label: 'RST', text: 'Inverter Reset' },	
				{ cpu: '1', type: 'A', byte: '14', bit: '5', status: '0', label: 'CPU', text: 'CPU no error' },	
				{ cpu: '1', type: 'A', byte: '14', bit: '6', status: '0', label: 'FTX', text: 'Intertravamento check' },	
				{ cpu: '1', type: 'A', byte: '14', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 9
		{
		nr: '9',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB15',
			bits: [
				{ cpu: '1', type: 'A', byte: '15', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '15', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '15', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '15', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '15', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '15', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '15', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '15', bit: '7', status: '0', label: '', text: '' }]	
			}]
		}
	];
	return data;
}

/* IO Shuttle 1 */
function Rack_IO_SH11 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB0',
			bits: [
				{ cpu: '1', type: 'E', byte: '0', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard' },
				{ cpu: '1', type: 'E', byte: '0', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '3', status: '0', label: 'D', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '4', status: '0', label: 'OK', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '5', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '6', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '7', status: '0', label: 'S2', text: 'Mobile keyboard' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB1',
			bits: [
				{ cpu: '1', type: 'E', byte: '1', bit: '0', status: '0', label: 'FTXV', text: '' },
				{ cpu: '1', type: 'E', byte: '1', bit: '1', status: '0', label: 'FTXH', text: '' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '2', status: '0', label: 'DB32', text: 'Data introduction 1' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '3', status: '0', label: 'DBHZ', text: 'Data introduction 2' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '4', status: '0', label: 'K1', text: 'Trolley 380V line' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '5', status: '0', label: 'RSI', text: 'Safety line check' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '6', status: '0', label: 'S3', text: 'Manual/Automatic mode switch' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB2',
			bits: [
				{ cpu: '1', type: 'E', byte: '2', bit: '0', status: '0', label: 'FTMV', text: 'Intertravamento - front' },
				{ cpu: '1', type: 'E', byte: '2', bit: '1', status: '0', label: 'FTMH', text: 'Intertravamento - back' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '2', status: '0', label: 'EMC', text: 'Trolley home position' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '3', status: '0', label: 'DRV1', text: 'Drive 1 enabled' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '4', status: '0', label: 'DRV2', text: 'Drive 2 enabled' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '5', status: '0', label: 'BDR1', text: 'Batentes - DRV1 enabled' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '6', status: '0', label: 'BDR2', text: 'Batentes - DRV2 enabled' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '7', status: '0', label: 'S4', text: 'Bypass safety key' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB3',
			bits: [
				{ cpu: '1', type: 'E', byte: '3', bit: '0', status: '0', label: 'BHFL', text: 'Batentes - front left high' },
				{ cpu: '1', type: 'E', byte: '3', bit: '1', status: '0', label: 'BLFL', text: 'Batentes - front left low' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '2', status: '0', label: 'BHFR', text: 'Batentes - front right high' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '3', status: '0', label: 'BLFR', text: 'Batentes - front right low' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '4', status: '0', label: 'BHBL', text: 'Batentes - back left high' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '5', status: '0', label: 'BLBL', text: 'Batentes - back left low' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '6', status: '0', label: 'BHBR', text: 'Batentes - back right high' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '7', status: '0', label: 'BLBR', text: 'Batentes - back right low' }]	
			}]
		},
		// Card 5
		{
		nr: '5',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB0',
			bits: [
				{ cpu: '1', type: 'A', byte: '0', bit: '0', status: '0', label: 'RL6', text: 'Drive enable K1' },
				{ cpu: '1', type: 'A', byte: '0', bit: '1', status: '0', label: 'DV1', text: 'Enable drive 1' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 2' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '3', status: '0', label: 'RL2', text: 'Braking resistor' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '4', status: '0', label: 'RL8', text: 'Reset retention limitswitches' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '5', status: '0', label: 'RL7', text: 'Bypass safety limitswitches' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '6', status: '0', label: 'LA', text: 'Alarm' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '7', status: '0', label: 'LC', text: 'System Ready' }]	
			}]
		},
		// Card 6
		{
		nr: '6',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB1',
			bits: [
				{ cpu: '1', type: 'A', byte: '1', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard display' },
				{ cpu: '1', type: 'A', byte: '1', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard display' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard display' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '3', status: '0', label: 'D', text: 'Mobile keyboard display' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '4', status: '0', label: 'AD1', text: 'Mobile keyboard display' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '5', status: '0', label: 'AD2', text: 'Mobile keyboard display' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '6', status: '0', label: 'AD3', text: 'Mobile keyboard display' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '7', status: '0', label: 'AD4', text: 'Mobile keyboard display' }]	
			}]
		},
		// Card 7
		{
		nr: '7',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB2',
			bits: [
				{ cpu: '1', type: 'A', byte: '2', bit: '0', status: '0', label: 'A20', text: 'Batentes - solenoid' },
				{ cpu: '1', type: 'A', byte: '2', bit: '1', status: '0', label: 'A21', text: '' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '2', status: '0', label: 'A22', text: 'Batentes - enable drive 1' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '3', status: '0', label: 'A23', text: 'Batentes - enable drive 2' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '4', status: '0', label: 'A24', text: 'Batentes - front/back selection' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '5', status: '0', label: 'A25', text: 'Trolley locking pin' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '6', status: '0', label: 'FTV', text: 'Intertravamento front - 0 = +24VDC' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '7', status: '0', label: 'FTH', text: 'Intertravamento back - 0 = +24VDC' }]	
			}]
		}
	];
	return data;
}

/* IO Trolley 1 */
function Rack_IO_SH12 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB4',
			bits: [
				{ cpu: '1', type: 'E', byte: '4', bit: '0', status: '0', label: 'RSI', text: 'Safety line check trolley' },
				{ cpu: '1', type: 'E', byte: '4', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '2', status: '0', label: 'DRV3', text: 'Drive 3 enabled' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '3', status: '0', label: 'DRV4', text: 'Drive 4 enabled' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '4', status: '0', label: 'DRV5', text: 'Drive 5 enabled' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '5', status: '0', label: 'DRV6', text: 'Drive 6 enabled' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB5',
			bits: [
				{ cpu: '1', type: 'E', byte: '5', bit: '0', status: '0', label: 'E50', text: 'Hoisting homing front' },
				{ cpu: '1', type: 'E', byte: '5', bit: '1', status: '0', label: 'E51', text: 'Pallet travelling front' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '2', status: '0', label: 'E52', text: 'Hoisting front left pallet present' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '3', status: '0', label: 'E53', text: 'Hoisting front right pallet present' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '4', status: '0', label: 'E54', text: 'Hoisting front up position' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '5', status: '0', label: 'E55', text: 'Hoisting front down position' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '6', status: '0', label: 'E56', text: '' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '7', status: '0', label: 'E57', text: '' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB6',
			bits: [
				{ cpu: '1', type: 'E', byte: '6', bit: '0', status: '0', label: 'E60', text: 'Hoisting homing back' },
				{ cpu: '1', type: 'E', byte: '6', bit: '1', status: '0', label: 'E61', text: 'Pallet travelling back' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '2', status: '0', label: 'E62', text: 'Hoisting back left pallet present' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '3', status: '0', label: 'E63', text: 'Hoisting back right pallet present' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '4', status: '0', label: 'E64', text: 'Hoisting back up position' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '5', status: '0', label: 'E65', text: 'Hoisting back down position' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '6', status: '0', label: 'E66', text: '' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '7', status: '0', label: 'E67', text: '' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB3',
			bits: [
				{ cpu: '1', type: 'A', byte: '3', bit: '0', status: '0', label: 'RL6', text: 'Enable drive 3' },
				{ cpu: '1', type: 'A', byte: '3', bit: '1', status: '0', label: 'DV1', text: 'Enable drive 4' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 5' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '3', status: '0', label: 'RL2', text: 'Enable drive 6' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '4', status: '0', label: 'RL11', text: 'Trolley drives enable K11' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '5', status: '0', label: 'RL17', text: 'Bypass safety limitswitches' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '6', status: '0', label: 'RL18', text: 'Reset retention limitswitches' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '7', status: '0', label: '', text: '' }]	
			}]
		}
	];
	return data;
}

/* IO Shuttle 2 */
function Rack_IO_SH21 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB0',
			bits: [
				{ cpu: '2', type: 'E', byte: '0', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard' },
				{ cpu: '2', type: 'E', byte: '0', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard' },	
				{ cpu: '2', type: 'E', byte: '0', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard' },	
				{ cpu: '2', type: 'E', byte: '0', bit: '3', status: '0', label: 'D', text: 'Mobile keyboard' },	
				{ cpu: '2', type: 'E', byte: '0', bit: '4', status: '0', label: 'OK', text: 'Mobile keyboard' },	
				{ cpu: '2', type: 'E', byte: '0', bit: '5', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '2', type: 'E', byte: '0', bit: '6', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '2', type: 'E', byte: '0', bit: '7', status: '0', label: 'S2', text: 'Mobile keyboard' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB1',
			bits: [
				{ cpu: '2', type: 'E', byte: '1', bit: '0', status: '0', label: 'FTXV', text: '' },
				{ cpu: '2', type: 'E', byte: '1', bit: '1', status: '0', label: 'FTXH', text: '' },	
				{ cpu: '2', type: 'E', byte: '1', bit: '2', status: '0', label: 'DB32', text: 'Data introduction 1' },	
				{ cpu: '2', type: 'E', byte: '1', bit: '3', status: '0', label: 'DBHZ', text: 'Data introduction 2' },	
				{ cpu: '2', type: 'E', byte: '1', bit: '4', status: '0', label: 'K1', text: 'Trolley 380V line' },	
				{ cpu: '2', type: 'E', byte: '1', bit: '5', status: '0', label: 'RSI', text: 'Safety line check' },	
				{ cpu: '2', type: 'E', byte: '1', bit: '6', status: '0', label: 'S3', text: 'Manual/Automatic mode switch' },	
				{ cpu: '2', type: 'E', byte: '1', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB2',
			bits: [
				{ cpu: '2', type: 'E', byte: '2', bit: '0', status: '0', label: 'FTMV', text: 'Intertravamento - front' },
				{ cpu: '2', type: 'E', byte: '2', bit: '1', status: '0', label: 'FTMH', text: 'Intertravamento - back' },	
				{ cpu: '2', type: 'E', byte: '2', bit: '2', status: '0', label: 'EMC', text: 'Trolley home position' },	
				{ cpu: '2', type: 'E', byte: '2', bit: '3', status: '0', label: 'DRV1', text: 'Drive 1 enabled' },	
				{ cpu: '2', type: 'E', byte: '2', bit: '4', status: '0', label: 'DRV2', text: 'Drive 2 enabled' },	
				{ cpu: '2', type: 'E', byte: '2', bit: '5', status: '0', label: 'BDR1', text: 'Batentes - DRV1 enabled' },	
				{ cpu: '2', type: 'E', byte: '2', bit: '6', status: '0', label: 'BDR2', text: 'Batentes - DRV2 enabled' },	
				{ cpu: '2', type: 'E', byte: '2', bit: '7', status: '0', label: 'S4', text: 'Bypass safety key' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB3',
			bits: [
				{ cpu: '2', type: 'E', byte: '3', bit: '0', status: '0', label: 'BHFL', text: 'Batentes - front left high' },
				{ cpu: '2', type: 'E', byte: '3', bit: '1', status: '0', label: 'BLFL', text: 'Batentes - front left low' },	
				{ cpu: '2', type: 'E', byte: '3', bit: '2', status: '0', label: 'BHFR', text: 'Batentes - front right high' },	
				{ cpu: '2', type: 'E', byte: '3', bit: '3', status: '0', label: 'BLFR', text: 'Batentes - front right low' },	
				{ cpu: '2', type: 'E', byte: '3', bit: '4', status: '0', label: 'BHBL', text: 'Batentes - back left high' },	
				{ cpu: '2', type: 'E', byte: '3', bit: '5', status: '0', label: 'BLBL', text: 'Batentes - back left low' },	
				{ cpu: '2', type: 'E', byte: '3', bit: '6', status: '0', label: 'BHBR', text: 'Batentes - back right high' },	
				{ cpu: '2', type: 'E', byte: '3', bit: '7', status: '0', label: 'BLBR', text: 'Batentes - back right low' }]	
			}]
		},
		// Card 5
		{
		nr: '5',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB0',
			bits: [
				{ cpu: '2', type: 'A', byte: '0', bit: '0', status: '0', label: 'RL6', text: 'Drive enable K1' },
				{ cpu: '2', type: 'A', byte: '0', bit: '1', status: '0', label: 'DV1', text: 'Enable drive 1' },	
				{ cpu: '2', type: 'A', byte: '0', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 2' },	
				{ cpu: '2', type: 'A', byte: '0', bit: '3', status: '0', label: 'RL2', text: 'Braking resistor' },	
				{ cpu: '2', type: 'A', byte: '0', bit: '4', status: '0', label: 'RL8', text: 'Reset retention limitswitches' },	
				{ cpu: '2', type: 'A', byte: '0', bit: '5', status: '0', label: 'RL7', text: 'Bypass safety limitswitches' },	
				{ cpu: '2', type: 'A', byte: '0', bit: '6', status: '0', label: 'LA', text: 'Alarm' },	
				{ cpu: '2', type: 'A', byte: '0', bit: '7', status: '0', label: 'LC', text: 'System Ready' }]	
			}]
		},
		// Card 6
		{
		nr: '6',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB1',
			bits: [
				{ cpu: '2', type: 'A', byte: '1', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard display' },
				{ cpu: '2', type: 'A', byte: '1', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard display' },	
				{ cpu: '2', type: 'A', byte: '1', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard display' },	
				{ cpu: '2', type: 'A', byte: '1', bit: '3', status: '0', label: 'D', text: 'Mobile keyboard display' },	
				{ cpu: '2', type: 'A', byte: '1', bit: '4', status: '0', label: 'AD1', text: 'Mobile keyboard display' },	
				{ cpu: '2', type: 'A', byte: '1', bit: '5', status: '0', label: 'AD2', text: 'Mobile keyboard display' },	
				{ cpu: '2', type: 'A', byte: '1', bit: '6', status: '0', label: 'AD3', text: 'Mobile keyboard display' },	
				{ cpu: '2', type: 'A', byte: '1', bit: '7', status: '0', label: 'AD4', text: 'Mobile keyboard display' }]	
			}]
		},
		// Card 7
		{
		nr: '7',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB2',
			bits: [
				{ cpu: '2', type: 'A', byte: '2', bit: '0', status: '0', label: 'A20', text: 'Batentes - solenoid' },
				{ cpu: '2', type: 'A', byte: '2', bit: '1', status: '0', label: 'A21', text: '' },	
				{ cpu: '2', type: 'A', byte: '2', bit: '2', status: '0', label: 'A22', text: 'Batentes - enable drive 1' },	
				{ cpu: '2', type: 'A', byte: '2', bit: '3', status: '0', label: 'A23', text: 'Batentes - enable drive 2' },	
				{ cpu: '2', type: 'A', byte: '2', bit: '4', status: '0', label: 'A24', text: 'Batentes - front/back selection' },	
				{ cpu: '2', type: 'A', byte: '2', bit: '5', status: '0', label: 'A25', text: 'Trolley locking pin' },	
				{ cpu: '2', type: 'A', byte: '2', bit: '6', status: '0', label: 'FTV', text: 'Intertravamento front - 0 = +24VDC' },	
				{ cpu: '2', type: 'A', byte: '2', bit: '7', status: '0', label: 'FTH', text: 'Intertravamento back - 0 = +24VDC' }]	
			}]
		}
	];
	return data;
}

/* IO Trolley 2 */
function Rack_IO_SH22 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB4',
			bits: [
				{ cpu: '2', type: 'E', byte: '4', bit: '0', status: '0', label: 'RSI', text: 'Safety line check trolley' },
				{ cpu: '2', type: 'E', byte: '4', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '2', type: 'E', byte: '4', bit: '2', status: '0', label: 'DRV3', text: 'Drive 3 enabled' },	
				{ cpu: '2', type: 'E', byte: '4', bit: '3', status: '0', label: 'DRV4', text: 'Drive 4 enabled' },	
				{ cpu: '2', type: 'E', byte: '4', bit: '4', status: '0', label: 'DRV5', text: 'Drive 5 enabled' },	
				{ cpu: '2', type: 'E', byte: '4', bit: '5', status: '0', label: 'DRV6', text: 'Drive 6 enabled' },	
				{ cpu: '2', type: 'E', byte: '4', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '2', type: 'E', byte: '4', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB5',
			bits: [
				{ cpu: '2', type: 'E', byte: '5', bit: '0', status: '0', label: 'E50', text: 'Hoisting homing front' },
				{ cpu: '2', type: 'E', byte: '5', bit: '1', status: '0', label: 'E51', text: 'Pallet travelling front' },	
				{ cpu: '2', type: 'E', byte: '5', bit: '2', status: '0', label: 'E52', text: 'Hoisting front left pallet present' },	
				{ cpu: '2', type: 'E', byte: '5', bit: '3', status: '0', label: 'E53', text: 'Hoisting front right pallet present' },	
				{ cpu: '2', type: 'E', byte: '5', bit: '4', status: '0', label: 'E54', text: 'Hoisting front up position' },	
				{ cpu: '2', type: 'E', byte: '5', bit: '5', status: '0', label: 'E55', text: 'Hoisting front down position' },	
				{ cpu: '2', type: 'E', byte: '5', bit: '6', status: '0', label: 'E56', text: '' },	
				{ cpu: '2', type: 'E', byte: '5', bit: '7', status: '0', label: 'E57', text: '' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB6',
			bits: [
				{ cpu: '2', type: 'E', byte: '6', bit: '0', status: '0', label: 'E60', text: 'Hoisting homing back' },
				{ cpu: '2', type: 'E', byte: '6', bit: '1', status: '0', label: 'E61', text: 'Pallet travelling back' },	
				{ cpu: '2', type: 'E', byte: '6', bit: '2', status: '0', label: 'E62', text: 'Hoisting back left pallet present' },	
				{ cpu: '2', type: 'E', byte: '6', bit: '3', status: '0', label: 'E63', text: 'Hoisting back right pallet present' },	
				{ cpu: '2', type: 'E', byte: '6', bit: '4', status: '0', label: 'E64', text: 'Hoisting back up position' },	
				{ cpu: '2', type: 'E', byte: '6', bit: '5', status: '0', label: 'E65', text: 'Hoisting back down position' },	
				{ cpu: '2', type: 'E', byte: '6', bit: '6', status: '0', label: 'E66', text: '' },	
				{ cpu: '2', type: 'E', byte: '6', bit: '7', status: '0', label: 'E67', text: '' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB3',
			bits: [
				{ cpu: '2', type: 'A', byte: '3', bit: '0', status: '0', label: 'RL6', text: 'Enable drive 3' },
				{ cpu: '2', type: 'A', byte: '3', bit: '1', status: '0', label: 'DV1', text: 'Enable drive 4' },	
				{ cpu: '2', type: 'A', byte: '3', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 5' },	
				{ cpu: '2', type: 'A', byte: '3', bit: '3', status: '0', label: 'RL2', text: 'Enable drive 6' },	
				{ cpu: '2', type: 'A', byte: '3', bit: '4', status: '0', label: 'RL11', text: 'Trolley drives enable K11' },	
				{ cpu: '2', type: 'A', byte: '3', bit: '5', status: '0', label: 'RL17', text: 'Bypass safety limitswitches' },	
				{ cpu: '2', type: 'A', byte: '3', bit: '6', status: '0', label: 'RL18', text: 'Reset retention limitswitches' },	
				{ cpu: '2', type: 'A', byte: '3', bit: '7', status: '0', label: '', text: '' }]	
			}]
		}
	];
	return data;
}

/* IO Shuttle 3 */
function Rack_IO_SH31 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB0',
			bits: [
				{ cpu: '3', type: 'E', byte: '0', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard' },
				{ cpu: '3', type: 'E', byte: '0', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard' },	
				{ cpu: '3', type: 'E', byte: '0', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard' },	
				{ cpu: '3', type: 'E', byte: '0', bit: '3', status: '0', label: 'D', text: 'Mobile keyboard' },	
				{ cpu: '3', type: 'E', byte: '0', bit: '4', status: '0', label: 'OK', text: 'Mobile keyboard' },	
				{ cpu: '3', type: 'E', byte: '0', bit: '5', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '3', type: 'E', byte: '0', bit: '6', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '3', type: 'E', byte: '0', bit: '7', status: '0', label: 'S2', text: 'Mobile keyboard' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB1',
			bits: [
				{ cpu: '3', type: 'E', byte: '1', bit: '0', status: '0', label: 'FTXV', text: '' },
				{ cpu: '3', type: 'E', byte: '1', bit: '1', status: '0', label: 'FTXH', text: '' },	
				{ cpu: '3', type: 'E', byte: '1', bit: '2', status: '0', label: 'DB32', text: 'Data introduction 1' },	
				{ cpu: '3', type: 'E', byte: '1', bit: '3', status: '0', label: 'DBHZ', text: 'Data introduction 2' },	
				{ cpu: '3', type: 'E', byte: '1', bit: '4', status: '0', label: 'K1', text: 'Trolley 380V line' },	
				{ cpu: '3', type: 'E', byte: '1', bit: '5', status: '0', label: 'RSI', text: 'Safety line check' },	
				{ cpu: '3', type: 'E', byte: '1', bit: '6', status: '0', label: 'S3', text: 'Manual/Automatic mode switch' },	
				{ cpu: '3', type: 'E', byte: '1', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB2',
			bits: [
				{ cpu: '3', type: 'E', byte: '2', bit: '0', status: '0', label: 'FTMV', text: 'Intertravamento - front' },
				{ cpu: '3', type: 'E', byte: '2', bit: '1', status: '0', label: 'FTMH', text: 'Intertravamento - back' },	
				{ cpu: '3', type: 'E', byte: '2', bit: '2', status: '0', label: 'EMC', text: 'Trolley home position' },	
				{ cpu: '3', type: 'E', byte: '2', bit: '3', status: '0', label: 'DRV1', text: 'Drive 1 enabled' },	
				{ cpu: '3', type: 'E', byte: '2', bit: '4', status: '0', label: 'DRV2', text: 'Drive 2 enabled' },	
				{ cpu: '3', type: 'E', byte: '2', bit: '5', status: '0', label: 'BDR1', text: 'Batentes - DRV1 enabled' },	
				{ cpu: '3', type: 'E', byte: '2', bit: '6', status: '0', label: 'BDR2', text: 'Batentes - DRV2 enabled' },	
				{ cpu: '3', type: 'E', byte: '2', bit: '7', status: '0', label: 'S4', text: 'Bypass safety key' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB3',
			bits: [
				{ cpu: '3', type: 'E', byte: '3', bit: '0', status: '0', label: 'BHFL', text: 'Batentes - front left high' },
				{ cpu: '3', type: 'E', byte: '3', bit: '1', status: '0', label: 'BLFL', text: 'Batentes - front left low' },	
				{ cpu: '3', type: 'E', byte: '3', bit: '2', status: '0', label: 'BHFR', text: 'Batentes - front right high' },	
				{ cpu: '3', type: 'E', byte: '3', bit: '3', status: '0', label: 'BLFR', text: 'Batentes - front right low' },	
				{ cpu: '3', type: 'E', byte: '3', bit: '4', status: '0', label: 'BHBL', text: 'Batentes - back left high' },	
				{ cpu: '3', type: 'E', byte: '3', bit: '5', status: '0', label: 'BLBL', text: 'Batentes - back left low' },	
				{ cpu: '3', type: 'E', byte: '3', bit: '6', status: '0', label: 'BHBR', text: 'Batentes - back right high' },	
				{ cpu: '3', type: 'E', byte: '3', bit: '7', status: '0', label: 'BLBR', text: 'Batentes - back right low' }]	
			}]
		},
		// Card 5
		{
		nr: '5',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB0',
			bits: [
				{ cpu: '3', type: 'A', byte: '0', bit: '0', status: '0', label: 'RL6', text: 'Drive enable K1' },
				{ cpu: '3', type: 'A', byte: '0', bit: '1', status: '0', label: 'DV1', text: 'Enable drive 1' },	
				{ cpu: '3', type: 'A', byte: '0', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 2' },	
				{ cpu: '3', type: 'A', byte: '0', bit: '3', status: '0', label: 'RL2', text: 'Braking resistor' },	
				{ cpu: '3', type: 'A', byte: '0', bit: '4', status: '0', label: 'RL8', text: 'Reset retention limitswitches' },	
				{ cpu: '3', type: 'A', byte: '0', bit: '5', status: '0', label: 'RL7', text: 'Bypass safety limitswitches' },	
				{ cpu: '3', type: 'A', byte: '0', bit: '6', status: '0', label: 'LA', text: 'Alarm' },	
				{ cpu: '3', type: 'A', byte: '0', bit: '7', status: '0', label: 'LC', text: 'System Ready' }]	
			}]
		},
		// Card 6
		{
		nr: '6',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB1',
			bits: [
				{ cpu: '3', type: 'A', byte: '1', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard display' },
				{ cpu: '3', type: 'A', byte: '1', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard display' },	
				{ cpu: '3', type: 'A', byte: '1', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard display' },	
				{ cpu: '3', type: 'A', byte: '1', bit: '3', status: '0', label: 'D', text: 'Mobile keyboard display' },	
				{ cpu: '3', type: 'A', byte: '1', bit: '4', status: '0', label: 'AD1', text: 'Mobile keyboard display' },	
				{ cpu: '3', type: 'A', byte: '1', bit: '5', status: '0', label: 'AD2', text: 'Mobile keyboard display' },	
				{ cpu: '3', type: 'A', byte: '1', bit: '6', status: '0', label: 'AD3', text: 'Mobile keyboard display' },	
				{ cpu: '3', type: 'A', byte: '1', bit: '7', status: '0', label: 'AD4', text: 'Mobile keyboard display' }]	
			}]
		},
		// Card 7
		{
		nr: '7',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB2',
			bits: [
				{ cpu: '3', type: 'A', byte: '2', bit: '0', status: '0', label: 'A20', text: 'Batentes - solenoid' },
				{ cpu: '3', type: 'A', byte: '2', bit: '1', status: '0', label: 'A21', text: '' },	
				{ cpu: '3', type: 'A', byte: '2', bit: '2', status: '0', label: 'A22', text: 'Batentes - enable drive 1' },	
				{ cpu: '3', type: 'A', byte: '2', bit: '3', status: '0', label: 'A23', text: 'Batentes - enable drive 2' },	
				{ cpu: '3', type: 'A', byte: '2', bit: '4', status: '0', label: 'A24', text: 'Batentes - front/back selection' },	
				{ cpu: '3', type: 'A', byte: '2', bit: '5', status: '0', label: 'A25', text: 'Trolley locking pin' },	
				{ cpu: '3', type: 'A', byte: '2', bit: '6', status: '0', label: 'FTV', text: 'Intertravamento front - 0 = +24VDC' },	
				{ cpu: '3', type: 'A', byte: '2', bit: '7', status: '0', label: 'FTH', text: 'Intertravamento back - 0 = +24VDC' }]	
			}]
		}
	];
	return data;
}

/* IO Trolley 3 */
function Rack_IO_SH32 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB4',
			bits: [
				{ cpu: '3', type: 'E', byte: '4', bit: '0', status: '0', label: 'RSI', text: 'Safety line check trolley' },
				{ cpu: '3', type: 'E', byte: '4', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '3', type: 'E', byte: '4', bit: '2', status: '0', label: 'DRV3', text: 'Drive 3 enabled' },	
				{ cpu: '3', type: 'E', byte: '4', bit: '3', status: '0', label: 'DRV4', text: 'Drive 4 enabled' },	
				{ cpu: '3', type: 'E', byte: '4', bit: '4', status: '0', label: 'DRV5', text: 'Drive 5 enabled' },	
				{ cpu: '3', type: 'E', byte: '4', bit: '5', status: '0', label: 'DRV6', text: 'Drive 6 enabled' },	
				{ cpu: '3', type: 'E', byte: '4', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '3', type: 'E', byte: '4', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB5',
			bits: [
				{ cpu: '3', type: 'E', byte: '5', bit: '0', status: '0', label: 'E50', text: 'Hoisting homing front' },
				{ cpu: '3', type: 'E', byte: '5', bit: '1', status: '0', label: 'E51', text: 'Pallet travelling front' },	
				{ cpu: '3', type: 'E', byte: '5', bit: '2', status: '0', label: 'E52', text: 'Hoisting front left pallet present' },	
				{ cpu: '3', type: 'E', byte: '5', bit: '3', status: '0', label: 'E53', text: 'Hoisting front right pallet present' },	
				{ cpu: '3', type: 'E', byte: '5', bit: '4', status: '0', label: 'E54', text: 'Hoisting front up position' },	
				{ cpu: '3', type: 'E', byte: '5', bit: '5', status: '0', label: 'E55', text: 'Hoisting front down position' },	
				{ cpu: '3', type: 'E', byte: '5', bit: '6', status: '0', label: 'E56', text: '' },	
				{ cpu: '3', type: 'E', byte: '5', bit: '7', status: '0', label: 'E57', text: '' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB6',
			bits: [
				{ cpu: '3', type: 'E', byte: '6', bit: '0', status: '0', label: 'E60', text: 'Hoisting homing back' },
				{ cpu: '3', type: 'E', byte: '6', bit: '1', status: '0', label: 'E61', text: 'Pallet travelling back' },	
				{ cpu: '3', type: 'E', byte: '6', bit: '2', status: '0', label: 'E62', text: 'Hoisting back left pallet present' },	
				{ cpu: '3', type: 'E', byte: '6', bit: '3', status: '0', label: 'E63', text: 'Hoisting back right pallet present' },	
				{ cpu: '3', type: 'E', byte: '6', bit: '4', status: '0', label: 'E64', text: 'Hoisting back up position' },	
				{ cpu: '3', type: 'E', byte: '6', bit: '5', status: '0', label: 'E65', text: 'Hoisting back down position' },	
				{ cpu: '3', type: 'E', byte: '6', bit: '6', status: '0', label: 'E66', text: '' },	
				{ cpu: '3', type: 'E', byte: '6', bit: '7', status: '0', label: 'E67', text: '' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB3',
			bits: [
				{ cpu: '3', type: 'A', byte: '3', bit: '0', status: '0', label: 'RL6', text: 'Enable drive 3' },
				{ cpu: '3', type: 'A', byte: '3', bit: '1', status: '0', label: 'DV1', text: 'Enable drive 4' },	
				{ cpu: '3', type: 'A', byte: '3', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 5' },	
				{ cpu: '3', type: 'A', byte: '3', bit: '3', status: '0', label: 'RL2', text: 'Enable drive 6' },	
				{ cpu: '3', type: 'A', byte: '3', bit: '4', status: '0', label: 'RL11', text: 'Trolley drives enable K11' },	
				{ cpu: '3', type: 'A', byte: '3', bit: '5', status: '0', label: 'RL17', text: 'Bypass safety limitswitches' },	
				{ cpu: '3', type: 'A', byte: '3', bit: '6', status: '0', label: 'RL18', text: 'Reset retention limitswitches' },	
				{ cpu: '3', type: 'A', byte: '3', bit: '7', status: '0', label: '', text: '' }]	
			}]
		}
	];
	return data;
}

/* IO Shuttle 4 */
function Rack_IO_SH41 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB0',
			bits: [
				{ cpu: '4', type: 'E', byte: '0', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard' },
				{ cpu: '4', type: 'E', byte: '0', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard' },	
				{ cpu: '4', type: 'E', byte: '0', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard' },	
				{ cpu: '4', type: 'E', byte: '0', bit: '4', status: '0', label: 'D', text: 'Mobile keyboard' },	
				{ cpu: '4', type: 'E', byte: '0', bit: '4', status: '0', label: 'OK', text: 'Mobile keyboard' },	
				{ cpu: '4', type: 'E', byte: '0', bit: '5', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '4', type: 'E', byte: '0', bit: '6', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '4', type: 'E', byte: '0', bit: '7', status: '0', label: 'S2', text: 'Mobile keyboard' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB1',
			bits: [
				{ cpu: '4', type: 'E', byte: '1', bit: '0', status: '0', label: 'FTXV', text: '' },
				{ cpu: '4', type: 'E', byte: '1', bit: '1', status: '0', label: 'FTXH', text: '' },	
				{ cpu: '4', type: 'E', byte: '1', bit: '2', status: '0', label: 'DB32', text: 'Data introduction 1' },	
				{ cpu: '4', type: 'E', byte: '1', bit: '4', status: '0', label: 'DBHZ', text: 'Data introduction 2' },	
				{ cpu: '4', type: 'E', byte: '1', bit: '4', status: '0', label: 'K1', text: 'Trolley 380V line' },	
				{ cpu: '4', type: 'E', byte: '1', bit: '5', status: '0', label: 'RSI', text: 'Safety line check' },	
				{ cpu: '4', type: 'E', byte: '1', bit: '6', status: '0', label: 'S3', text: 'Manual/Automatic mode switch' },	
				{ cpu: '4', type: 'E', byte: '1', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB2',
			bits: [
				{ cpu: '4', type: 'E', byte: '2', bit: '0', status: '0', label: 'FTMV', text: 'Intertravamento - front' },
				{ cpu: '4', type: 'E', byte: '2', bit: '1', status: '0', label: 'FTMH', text: 'Intertravamento - back' },	
				{ cpu: '4', type: 'E', byte: '2', bit: '2', status: '0', label: 'EMC', text: 'Trolley home position' },	
				{ cpu: '4', type: 'E', byte: '2', bit: '4', status: '0', label: 'DRV1', text: 'Drive 1 enabled' },	
				{ cpu: '4', type: 'E', byte: '2', bit: '4', status: '0', label: 'DRV2', text: 'Drive 2 enabled' },	
				{ cpu: '4', type: 'E', byte: '2', bit: '5', status: '0', label: 'BDR1', text: 'Batentes - DRV1 enabled' },	
				{ cpu: '4', type: 'E', byte: '2', bit: '6', status: '0', label: 'BDR2', text: 'Batentes - DRV2 enabled' },	
				{ cpu: '4', type: 'E', byte: '2', bit: '7', status: '0', label: 'S4', text: 'Bypass safety key' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB3',
			bits: [
				{ cpu: '4', type: 'E', byte: '4', bit: '0', status: '0', label: 'BHFL', text: 'Batentes - front left high' },
				{ cpu: '4', type: 'E', byte: '4', bit: '1', status: '0', label: 'BLFL', text: 'Batentes - front left low' },	
				{ cpu: '4', type: 'E', byte: '4', bit: '2', status: '0', label: 'BHFR', text: 'Batentes - front right high' },	
				{ cpu: '4', type: 'E', byte: '4', bit: '4', status: '0', label: 'BLFR', text: 'Batentes - front right low' },	
				{ cpu: '4', type: 'E', byte: '4', bit: '4', status: '0', label: 'BHBL', text: 'Batentes - back left high' },	
				{ cpu: '4', type: 'E', byte: '4', bit: '5', status: '0', label: 'BLBL', text: 'Batentes - back left low' },	
				{ cpu: '4', type: 'E', byte: '4', bit: '6', status: '0', label: 'BHBR', text: 'Batentes - back right high' },	
				{ cpu: '4', type: 'E', byte: '4', bit: '7', status: '0', label: 'BLBR', text: 'Batentes - back right low' }]	
			}]
		},
		// Card 5
		{
		nr: '5',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB0',
			bits: [
				{ cpu: '4', type: 'A', byte: '0', bit: '0', status: '0', label: 'RL6', text: 'Drive enable K1' },
				{ cpu: '4', type: 'A', byte: '0', bit: '1', status: '0', label: 'DV1', text: 'Enable drive 1' },	
				{ cpu: '4', type: 'A', byte: '0', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 2' },	
				{ cpu: '4', type: 'A', byte: '0', bit: '4', status: '0', label: 'RL2', text: 'Braking resistor' },	
				{ cpu: '4', type: 'A', byte: '0', bit: '4', status: '0', label: 'RL8', text: 'Reset retention limitswitches' },	
				{ cpu: '4', type: 'A', byte: '0', bit: '5', status: '0', label: 'RL7', text: 'Bypass safety limitswitches' },	
				{ cpu: '4', type: 'A', byte: '0', bit: '6', status: '0', label: 'LA', text: 'Alarm' },	
				{ cpu: '4', type: 'A', byte: '0', bit: '7', status: '0', label: 'LC', text: 'System Ready' }]	
			}]
		},
		// Card 6
		{
		nr: '6',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB1',
			bits: [
				{ cpu: '4', type: 'A', byte: '1', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard display' },
				{ cpu: '4', type: 'A', byte: '1', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard display' },	
				{ cpu: '4', type: 'A', byte: '1', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard display' },	
				{ cpu: '4', type: 'A', byte: '1', bit: '4', status: '0', label: 'D', text: 'Mobile keyboard display' },	
				{ cpu: '4', type: 'A', byte: '1', bit: '4', status: '0', label: 'AD1', text: 'Mobile keyboard display' },	
				{ cpu: '4', type: 'A', byte: '1', bit: '5', status: '0', label: 'AD2', text: 'Mobile keyboard display' },	
				{ cpu: '4', type: 'A', byte: '1', bit: '6', status: '0', label: 'AD3', text: 'Mobile keyboard display' },	
				{ cpu: '4', type: 'A', byte: '1', bit: '7', status: '0', label: 'AD4', text: 'Mobile keyboard display' }]	
			}]
		},
		// Card 7
		{
		nr: '7',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB2',
			bits: [
				{ cpu: '4', type: 'A', byte: '2', bit: '0', status: '0', label: 'A20', text: 'Batentes - solenoid' },
				{ cpu: '4', type: 'A', byte: '2', bit: '1', status: '0', label: 'A21', text: '' },	
				{ cpu: '4', type: 'A', byte: '2', bit: '2', status: '0', label: 'A22', text: 'Batentes - enable drive 1' },	
				{ cpu: '4', type: 'A', byte: '2', bit: '4', status: '0', label: 'A23', text: 'Batentes - enable drive 2' },	
				{ cpu: '4', type: 'A', byte: '2', bit: '4', status: '0', label: 'A24', text: 'Batentes - front/back selection' },	
				{ cpu: '4', type: 'A', byte: '2', bit: '5', status: '0', label: 'A25', text: 'Trolley locking pin' },	
				{ cpu: '4', type: 'A', byte: '2', bit: '6', status: '0', label: 'FTV', text: 'Intertravamento front - 0 = +24VDC' },	
				{ cpu: '4', type: 'A', byte: '2', bit: '7', status: '0', label: 'FTH', text: 'Intertravamento back - 0 = +24VDC' }]	
			}]
		}
	];
	return data;
}

/* IO Trolley 4 */
function Rack_IO_SH42 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB4',
			bits: [
				{ cpu: '4', type: 'E', byte: '4', bit: '0', status: '0', label: 'RSI', text: 'Safety line check trolley' },
				{ cpu: '4', type: 'E', byte: '4', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '4', type: 'E', byte: '4', bit: '2', status: '0', label: 'DRV3', text: 'Drive 3 enabled' },	
				{ cpu: '4', type: 'E', byte: '4', bit: '4', status: '0', label: 'DRV4', text: 'Drive 4 enabled' },	
				{ cpu: '4', type: 'E', byte: '4', bit: '4', status: '0', label: 'DRV5', text: 'Drive 5 enabled' },	
				{ cpu: '4', type: 'E', byte: '4', bit: '5', status: '0', label: 'DRV6', text: 'Drive 6 enabled' },	
				{ cpu: '4', type: 'E', byte: '4', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '4', type: 'E', byte: '4', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB5',
			bits: [
				{ cpu: '4', type: 'E', byte: '5', bit: '0', status: '0', label: 'E50', text: 'Hoisting homing front' },
				{ cpu: '4', type: 'E', byte: '5', bit: '1', status: '0', label: 'E51', text: 'Pallet travelling front' },	
				{ cpu: '4', type: 'E', byte: '5', bit: '2', status: '0', label: 'E52', text: 'Hoisting front left pallet present' },	
				{ cpu: '4', type: 'E', byte: '5', bit: '4', status: '0', label: 'E53', text: 'Hoisting front right pallet present' },	
				{ cpu: '4', type: 'E', byte: '5', bit: '4', status: '0', label: 'E54', text: 'Hoisting front up position' },	
				{ cpu: '4', type: 'E', byte: '5', bit: '5', status: '0', label: 'E55', text: 'Hoisting front down position' },	
				{ cpu: '4', type: 'E', byte: '5', bit: '6', status: '0', label: 'E56', text: '' },	
				{ cpu: '4', type: 'E', byte: '5', bit: '7', status: '0', label: 'E57', text: '' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB6',
			bits: [
				{ cpu: '4', type: 'E', byte: '6', bit: '0', status: '0', label: 'E60', text: 'Hoisting homing back' },
				{ cpu: '4', type: 'E', byte: '6', bit: '1', status: '0', label: 'E61', text: 'Pallet travelling back' },	
				{ cpu: '4', type: 'E', byte: '6', bit: '2', status: '0', label: 'E62', text: 'Hoisting back left pallet present' },	
				{ cpu: '4', type: 'E', byte: '6', bit: '4', status: '0', label: 'E63', text: 'Hoisting back right pallet present' },	
				{ cpu: '4', type: 'E', byte: '6', bit: '4', status: '0', label: 'E64', text: 'Hoisting back up position' },	
				{ cpu: '4', type: 'E', byte: '6', bit: '5', status: '0', label: 'E65', text: 'Hoisting back down position' },	
				{ cpu: '4', type: 'E', byte: '6', bit: '6', status: '0', label: 'E66', text: '' },	
				{ cpu: '4', type: 'E', byte: '6', bit: '7', status: '0', label: 'E67', text: '' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB3',
			bits: [
				{ cpu: '4', type: 'A', byte: '4', bit: '0', status: '0', label: 'RL6', text: 'Enable drive 3' },
				{ cpu: '4', type: 'A', byte: '4', bit: '1', status: '0', label: 'DV1', text: 'Enable drive 4' },	
				{ cpu: '4', type: 'A', byte: '4', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 5' },	
				{ cpu: '4', type: 'A', byte: '4', bit: '4', status: '0', label: 'RL2', text: 'Enable drive 6' },	
				{ cpu: '4', type: 'A', byte: '4', bit: '4', status: '0', label: 'RL11', text: 'Trolley drives enable K11' },	
				{ cpu: '4', type: 'A', byte: '4', bit: '5', status: '0', label: 'RL17', text: 'Bypass safety limitswitches' },	
				{ cpu: '4', type: 'A', byte: '4', bit: '6', status: '0', label: 'RL18', text: 'Reset retention limitswitches' },	
				{ cpu: '4', type: 'A', byte: '4', bit: '7', status: '0', label: '', text: '' }]	
			}]
		}
	];
	return data;
}

/* IO Shuttle 5 */
function Rack_IO_SH51 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB0',
			bits: [
				{ cpu: '5', type: 'E', byte: '0', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard' },
				{ cpu: '5', type: 'E', byte: '0', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard' },	
				{ cpu: '5', type: 'E', byte: '0', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard' },	
				{ cpu: '5', type: 'E', byte: '0', bit: '5', status: '0', label: 'D', text: 'Mobile keyboard' },	
				{ cpu: '5', type: 'E', byte: '0', bit: '4', status: '0', label: 'OK', text: 'Mobile keyboard' },	
				{ cpu: '5', type: 'E', byte: '0', bit: '5', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '5', type: 'E', byte: '0', bit: '6', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '5', type: 'E', byte: '0', bit: '7', status: '0', label: 'S2', text: 'Mobile keyboard' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB1',
			bits: [
				{ cpu: '5', type: 'E', byte: '1', bit: '0', status: '0', label: 'FTXV', text: '' },
				{ cpu: '5', type: 'E', byte: '1', bit: '1', status: '0', label: 'FTXH', text: '' },	
				{ cpu: '5', type: 'E', byte: '1', bit: '2', status: '0', label: 'DB32', text: 'Data introduction 1' },	
				{ cpu: '5', type: 'E', byte: '1', bit: '5', status: '0', label: 'DBHZ', text: 'Data introduction 2' },	
				{ cpu: '5', type: 'E', byte: '1', bit: '4', status: '0', label: 'K1', text: 'Trolley 380V line' },	
				{ cpu: '5', type: 'E', byte: '1', bit: '5', status: '0', label: 'RSI', text: 'Safety line check' },	
				{ cpu: '5', type: 'E', byte: '1', bit: '6', status: '0', label: 'S3', text: 'Manual/Automatic mode switch' },	
				{ cpu: '5', type: 'E', byte: '1', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB2',
			bits: [
				{ cpu: '5', type: 'E', byte: '2', bit: '0', status: '0', label: 'FTMV', text: 'Intertravamento - front' },
				{ cpu: '5', type: 'E', byte: '2', bit: '1', status: '0', label: 'FTMH', text: 'Intertravamento - back' },	
				{ cpu: '5', type: 'E', byte: '2', bit: '2', status: '0', label: 'EMC', text: 'Trolley home position' },	
				{ cpu: '5', type: 'E', byte: '2', bit: '5', status: '0', label: 'DRV1', text: 'Drive 1 enabled' },	
				{ cpu: '5', type: 'E', byte: '2', bit: '4', status: '0', label: 'DRV2', text: 'Drive 2 enabled' },	
				{ cpu: '5', type: 'E', byte: '2', bit: '5', status: '0', label: 'BDR1', text: 'Batentes - DRV1 enabled' },	
				{ cpu: '5', type: 'E', byte: '2', bit: '6', status: '0', label: 'BDR2', text: 'Batentes - DRV2 enabled' },	
				{ cpu: '5', type: 'E', byte: '2', bit: '7', status: '0', label: 'S4', text: 'Bypass safety key' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB3',
			bits: [
				{ cpu: '5', type: 'E', byte: '5', bit: '0', status: '0', label: 'BHFL', text: 'Batentes - front left high' },
				{ cpu: '5', type: 'E', byte: '5', bit: '1', status: '0', label: 'BLFL', text: 'Batentes - front left low' },	
				{ cpu: '5', type: 'E', byte: '5', bit: '2', status: '0', label: 'BHFR', text: 'Batentes - front right high' },	
				{ cpu: '5', type: 'E', byte: '5', bit: '5', status: '0', label: 'BLFR', text: 'Batentes - front right low' },	
				{ cpu: '5', type: 'E', byte: '5', bit: '4', status: '0', label: 'BHBL', text: 'Batentes - back left high' },	
				{ cpu: '5', type: 'E', byte: '5', bit: '5', status: '0', label: 'BLBL', text: 'Batentes - back left low' },	
				{ cpu: '5', type: 'E', byte: '5', bit: '6', status: '0', label: 'BHBR', text: 'Batentes - back right high' },	
				{ cpu: '5', type: 'E', byte: '5', bit: '7', status: '0', label: 'BLBR', text: 'Batentes - back right low' }]	
			}]
		},
		// Card 5
		{
		nr: '5',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB0',
			bits: [
				{ cpu: '5', type: 'A', byte: '0', bit: '0', status: '0', label: 'RL6', text: 'Drive enable K1' },
				{ cpu: '5', type: 'A', byte: '0', bit: '1', status: '0', label: 'DV1', text: 'Enable drive 1' },	
				{ cpu: '5', type: 'A', byte: '0', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 2' },	
				{ cpu: '5', type: 'A', byte: '0', bit: '5', status: '0', label: 'RL2', text: 'Braking resistor' },	
				{ cpu: '5', type: 'A', byte: '0', bit: '4', status: '0', label: 'RL8', text: 'Reset retention limitswitches' },	
				{ cpu: '5', type: 'A', byte: '0', bit: '5', status: '0', label: 'RL7', text: 'Bypass safety limitswitches' },	
				{ cpu: '5', type: 'A', byte: '0', bit: '6', status: '0', label: 'LA', text: 'Alarm' },	
				{ cpu: '5', type: 'A', byte: '0', bit: '7', status: '0', label: 'LC', text: 'System Ready' }]	
			}]
		},
		// Card 6
		{
		nr: '6',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB1',
			bits: [
				{ cpu: '5', type: 'A', byte: '1', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard display' },
				{ cpu: '5', type: 'A', byte: '1', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard display' },	
				{ cpu: '5', type: 'A', byte: '1', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard display' },	
				{ cpu: '5', type: 'A', byte: '1', bit: '5', status: '0', label: 'D', text: 'Mobile keyboard display' },	
				{ cpu: '5', type: 'A', byte: '1', bit: '4', status: '0', label: 'AD1', text: 'Mobile keyboard display' },	
				{ cpu: '5', type: 'A', byte: '1', bit: '5', status: '0', label: 'AD2', text: 'Mobile keyboard display' },	
				{ cpu: '5', type: 'A', byte: '1', bit: '6', status: '0', label: 'AD3', text: 'Mobile keyboard display' },	
				{ cpu: '5', type: 'A', byte: '1', bit: '7', status: '0', label: 'AD4', text: 'Mobile keyboard display' }]	
			}]
		},
		// Card 7
		{
		nr: '7',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB2',
			bits: [
				{ cpu: '5', type: 'A', byte: '2', bit: '0', status: '0', label: 'A20', text: 'Batentes - solenoid' },
				{ cpu: '5', type: 'A', byte: '2', bit: '1', status: '0', label: 'A21', text: '' },	
				{ cpu: '5', type: 'A', byte: '2', bit: '2', status: '0', label: 'A22', text: 'Batentes - enable drive 1' },	
				{ cpu: '5', type: 'A', byte: '2', bit: '5', status: '0', label: 'A23', text: 'Batentes - enable drive 2' },	
				{ cpu: '5', type: 'A', byte: '2', bit: '4', status: '0', label: 'A24', text: 'Batentes - front/back selection' },	
				{ cpu: '5', type: 'A', byte: '2', bit: '5', status: '0', label: 'A25', text: 'Trolley locking pin' },	
				{ cpu: '5', type: 'A', byte: '2', bit: '6', status: '0', label: 'FTV', text: 'Intertravamento front - 0 = +24VDC' },	
				{ cpu: '5', type: 'A', byte: '2', bit: '7', status: '0', label: 'FTH', text: 'Intertravamento back - 0 = +24VDC' }]	
			}]
		}
	];
	return data;
}

/* IO Trolley 5 */
function Rack_IO_SH52 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB4',
			bits: [
				{ cpu: '5', type: 'E', byte: '4', bit: '0', status: '0', label: 'RSI', text: 'Safety line check trolley' },
				{ cpu: '5', type: 'E', byte: '4', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '5', type: 'E', byte: '4', bit: '2', status: '0', label: 'DRV3', text: 'Drive 3 enabled' },	
				{ cpu: '5', type: 'E', byte: '4', bit: '5', status: '0', label: 'DRV4', text: 'Drive 4 enabled' },	
				{ cpu: '5', type: 'E', byte: '4', bit: '4', status: '0', label: 'DRV5', text: 'Drive 5 enabled' },	
				{ cpu: '5', type: 'E', byte: '4', bit: '5', status: '0', label: 'DRV6', text: 'Drive 6 enabled' },	
				{ cpu: '5', type: 'E', byte: '4', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '5', type: 'E', byte: '4', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB5',
			bits: [
				{ cpu: '5', type: 'E', byte: '5', bit: '0', status: '0', label: 'E50', text: 'Hoisting homing front' },
				{ cpu: '5', type: 'E', byte: '5', bit: '1', status: '0', label: 'E51', text: 'Pallet travelling front' },	
				{ cpu: '5', type: 'E', byte: '5', bit: '2', status: '0', label: 'E52', text: 'Hoisting front left pallet present' },	
				{ cpu: '5', type: 'E', byte: '5', bit: '5', status: '0', label: 'E53', text: 'Hoisting front right pallet present' },	
				{ cpu: '5', type: 'E', byte: '5', bit: '4', status: '0', label: 'E54', text: 'Hoisting front up position' },	
				{ cpu: '5', type: 'E', byte: '5', bit: '5', status: '0', label: 'E55', text: 'Hoisting front down position' },	
				{ cpu: '5', type: 'E', byte: '5', bit: '6', status: '0', label: 'E56', text: '' },	
				{ cpu: '5', type: 'E', byte: '5', bit: '7', status: '0', label: 'E57', text: '' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB6',
			bits: [
				{ cpu: '5', type: 'E', byte: '6', bit: '0', status: '0', label: 'E60', text: 'Hoisting homing back' },
				{ cpu: '5', type: 'E', byte: '6', bit: '1', status: '0', label: 'E61', text: 'Pallet travelling back' },	
				{ cpu: '5', type: 'E', byte: '6', bit: '2', status: '0', label: 'E62', text: 'Hoisting back left pallet present' },	
				{ cpu: '5', type: 'E', byte: '6', bit: '5', status: '0', label: 'E63', text: 'Hoisting back right pallet present' },	
				{ cpu: '5', type: 'E', byte: '6', bit: '4', status: '0', label: 'E64', text: 'Hoisting back up position' },	
				{ cpu: '5', type: 'E', byte: '6', bit: '5', status: '0', label: 'E65', text: 'Hoisting back down position' },	
				{ cpu: '5', type: 'E', byte: '6', bit: '6', status: '0', label: 'E66', text: '' },	
				{ cpu: '5', type: 'E', byte: '6', bit: '7', status: '0', label: 'E67', text: '' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB3',
			bits: [
				{ cpu: '5', type: 'A', byte: '5', bit: '0', status: '0', label: 'RL6', text: 'Enable drive 3' },
				{ cpu: '5', type: 'A', byte: '5', bit: '1', status: '0', label: 'DV1', text: 'Enable drive 4' },	
				{ cpu: '5', type: 'A', byte: '5', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 5' },	
				{ cpu: '5', type: 'A', byte: '5', bit: '5', status: '0', label: 'RL2', text: 'Enable drive 6' },	
				{ cpu: '5', type: 'A', byte: '5', bit: '4', status: '0', label: 'RL11', text: 'Trolley drives enable K11' },	
				{ cpu: '5', type: 'A', byte: '5', bit: '5', status: '0', label: 'RL17', text: 'Bypass safety limitswitches' },	
				{ cpu: '5', type: 'A', byte: '5', bit: '6', status: '0', label: 'RL18', text: 'Reset retention limitswitches' },	
				{ cpu: '5', type: 'A', byte: '5', bit: '7', status: '0', label: '', text: '' }]	
			}]
		}
	];
	return data;
}

/* IO Shuttle 6 */
function Rack_IO_SH61 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB0',
			bits: [
				{ cpu: '6', type: 'E', byte: '0', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard' },
				{ cpu: '6', type: 'E', byte: '0', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard' },	
				{ cpu: '6', type: 'E', byte: '0', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard' },	
				{ cpu: '6', type: 'E', byte: '0', bit: '6', status: '0', label: 'D', text: 'Mobile keyboard' },	
				{ cpu: '6', type: 'E', byte: '0', bit: '4', status: '0', label: 'OK', text: 'Mobile keyboard' },	
				{ cpu: '6', type: 'E', byte: '0', bit: '5', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '6', type: 'E', byte: '0', bit: '6', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '6', type: 'E', byte: '0', bit: '7', status: '0', label: 'S2', text: 'Mobile keyboard' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB1',
			bits: [
				{ cpu: '6', type: 'E', byte: '1', bit: '0', status: '0', label: 'FTXV', text: '' },
				{ cpu: '6', type: 'E', byte: '1', bit: '1', status: '0', label: 'FTXH', text: '' },	
				{ cpu: '6', type: 'E', byte: '1', bit: '2', status: '0', label: 'DB32', text: 'Data introduction 1' },	
				{ cpu: '6', type: 'E', byte: '1', bit: '6', status: '0', label: 'DBHZ', text: 'Data introduction 2' },	
				{ cpu: '6', type: 'E', byte: '1', bit: '4', status: '0', label: 'K1', text: 'Trolley 380V line' },	
				{ cpu: '6', type: 'E', byte: '1', bit: '5', status: '0', label: 'RSI', text: 'Safety line check' },	
				{ cpu: '6', type: 'E', byte: '1', bit: '6', status: '0', label: 'S3', text: 'Manual/Automatic mode switch' },	
				{ cpu: '6', type: 'E', byte: '1', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB2',
			bits: [
				{ cpu: '6', type: 'E', byte: '2', bit: '0', status: '0', label: 'FTMV', text: 'Intertravamento - front' },
				{ cpu: '6', type: 'E', byte: '2', bit: '1', status: '0', label: 'FTMH', text: 'Intertravamento - back' },	
				{ cpu: '6', type: 'E', byte: '2', bit: '2', status: '0', label: 'EMC', text: 'Trolley home position' },	
				{ cpu: '6', type: 'E', byte: '2', bit: '6', status: '0', label: 'DRV1', text: 'Drive 1 enabled' },	
				{ cpu: '6', type: 'E', byte: '2', bit: '4', status: '0', label: 'DRV2', text: 'Drive 2 enabled' },	
				{ cpu: '6', type: 'E', byte: '2', bit: '5', status: '0', label: 'BDR1', text: 'Batentes - DRV1 enabled' },	
				{ cpu: '6', type: 'E', byte: '2', bit: '6', status: '0', label: 'BDR2', text: 'Batentes - DRV2 enabled' },	
				{ cpu: '6', type: 'E', byte: '2', bit: '7', status: '0', label: 'S4', text: 'Bypass safety key' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB3',
			bits: [
				{ cpu: '6', type: 'E', byte: '6', bit: '0', status: '0', label: 'BHFL', text: 'Batentes - front left high' },
				{ cpu: '6', type: 'E', byte: '6', bit: '1', status: '0', label: 'BLFL', text: 'Batentes - front left low' },	
				{ cpu: '6', type: 'E', byte: '6', bit: '2', status: '0', label: 'BHFR', text: 'Batentes - front right high' },	
				{ cpu: '6', type: 'E', byte: '6', bit: '6', status: '0', label: 'BLFR', text: 'Batentes - front right low' },	
				{ cpu: '6', type: 'E', byte: '6', bit: '4', status: '0', label: 'BHBL', text: 'Batentes - back left high' },	
				{ cpu: '6', type: 'E', byte: '6', bit: '5', status: '0', label: 'BLBL', text: 'Batentes - back left low' },	
				{ cpu: '6', type: 'E', byte: '6', bit: '6', status: '0', label: 'BHBR', text: 'Batentes - back right high' },	
				{ cpu: '6', type: 'E', byte: '6', bit: '7', status: '0', label: 'BLBR', text: 'Batentes - back right low' }]	
			}]
		},
		// Card 5
		{
		nr: '5',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB0',
			bits: [
				{ cpu: '6', type: 'A', byte: '0', bit: '0', status: '0', label: 'RL6', text: 'Drive enable K1' },
				{ cpu: '6', type: 'A', byte: '0', bit: '1', status: '0', label: 'DV1', text: 'Enable drive 1' },	
				{ cpu: '6', type: 'A', byte: '0', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 2' },	
				{ cpu: '6', type: 'A', byte: '0', bit: '6', status: '0', label: 'RL2', text: 'Braking resistor' },	
				{ cpu: '6', type: 'A', byte: '0', bit: '4', status: '0', label: 'RL8', text: 'Reset retention limitswitches' },	
				{ cpu: '6', type: 'A', byte: '0', bit: '5', status: '0', label: 'RL7', text: 'Bypass safety limitswitches' },	
				{ cpu: '6', type: 'A', byte: '0', bit: '6', status: '0', label: 'LA', text: 'Alarm' },	
				{ cpu: '6', type: 'A', byte: '0', bit: '7', status: '0', label: 'LC', text: 'System Ready' }]	
			}]
		},
		// Card 6
		{
		nr: '6',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB1',
			bits: [
				{ cpu: '6', type: 'A', byte: '1', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard display' },
				{ cpu: '6', type: 'A', byte: '1', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard display' },	
				{ cpu: '6', type: 'A', byte: '1', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard display' },	
				{ cpu: '6', type: 'A', byte: '1', bit: '6', status: '0', label: 'D', text: 'Mobile keyboard display' },	
				{ cpu: '6', type: 'A', byte: '1', bit: '4', status: '0', label: 'AD1', text: 'Mobile keyboard display' },	
				{ cpu: '6', type: 'A', byte: '1', bit: '5', status: '0', label: 'AD2', text: 'Mobile keyboard display' },	
				{ cpu: '6', type: 'A', byte: '1', bit: '6', status: '0', label: 'AD3', text: 'Mobile keyboard display' },	
				{ cpu: '6', type: 'A', byte: '1', bit: '7', status: '0', label: 'AD4', text: 'Mobile keyboard display' }]	
			}]
		},
		// Card 7
		{
		nr: '7',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB2',
			bits: [
				{ cpu: '6', type: 'A', byte: '2', bit: '0', status: '0', label: 'A20', text: 'Batentes - solenoid' },
				{ cpu: '6', type: 'A', byte: '2', bit: '1', status: '0', label: 'A21', text: '' },	
				{ cpu: '6', type: 'A', byte: '2', bit: '2', status: '0', label: 'A22', text: 'Batentes - enable drive 1' },	
				{ cpu: '6', type: 'A', byte: '2', bit: '6', status: '0', label: 'A23', text: 'Batentes - enable drive 2' },	
				{ cpu: '6', type: 'A', byte: '2', bit: '4', status: '0', label: 'A24', text: 'Batentes - front/back selection' },	
				{ cpu: '6', type: 'A', byte: '2', bit: '5', status: '0', label: 'A25', text: 'Trolley locking pin' },	
				{ cpu: '6', type: 'A', byte: '2', bit: '6', status: '0', label: 'FTV', text: 'Intertravamento front - 0 = +24VDC' },	
				{ cpu: '6', type: 'A', byte: '2', bit: '7', status: '0', label: 'FTH', text: 'Intertravamento back - 0 = +24VDC' }]	
			}]
		}
	];
	return data;
}

/* IO Trolley 6 */
function Rack_IO_SH62 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB4',
			bits: [
				{ cpu: '6', type: 'E', byte: '4', bit: '0', status: '0', label: 'RSI', text: 'Safety line check trolley' },
				{ cpu: '6', type: 'E', byte: '4', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '6', type: 'E', byte: '4', bit: '2', status: '0', label: 'DRV3', text: 'Drive 3 enabled' },	
				{ cpu: '6', type: 'E', byte: '4', bit: '6', status: '0', label: 'DRV4', text: 'Drive 4 enabled' },	
				{ cpu: '6', type: 'E', byte: '4', bit: '4', status: '0', label: 'DRV5', text: 'Drive 5 enabled' },	
				{ cpu: '6', type: 'E', byte: '4', bit: '5', status: '0', label: 'DRV6', text: 'Drive 6 enabled' },	
				{ cpu: '6', type: 'E', byte: '4', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '6', type: 'E', byte: '4', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB5',
			bits: [
				{ cpu: '6', type: 'E', byte: '5', bit: '0', status: '0', label: 'E50', text: 'Hoisting homing front' },
				{ cpu: '6', type: 'E', byte: '5', bit: '1', status: '0', label: 'E51', text: 'Pallet travelling front' },	
				{ cpu: '6', type: 'E', byte: '5', bit: '2', status: '0', label: 'E52', text: 'Hoisting front left pallet present' },	
				{ cpu: '6', type: 'E', byte: '5', bit: '6', status: '0', label: 'E53', text: 'Hoisting front right pallet present' },	
				{ cpu: '6', type: 'E', byte: '5', bit: '4', status: '0', label: 'E54', text: 'Hoisting front up position' },	
				{ cpu: '6', type: 'E', byte: '5', bit: '5', status: '0', label: 'E55', text: 'Hoisting front down position' },	
				{ cpu: '6', type: 'E', byte: '5', bit: '6', status: '0', label: 'E56', text: '' },	
				{ cpu: '6', type: 'E', byte: '5', bit: '7', status: '0', label: 'E57', text: '' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB6',
			bits: [
				{ cpu: '6', type: 'E', byte: '6', bit: '0', status: '0', label: 'E60', text: 'Hoisting homing back' },
				{ cpu: '6', type: 'E', byte: '6', bit: '1', status: '0', label: 'E61', text: 'Pallet travelling back' },	
				{ cpu: '6', type: 'E', byte: '6', bit: '2', status: '0', label: 'E62', text: 'Hoisting back left pallet present' },	
				{ cpu: '6', type: 'E', byte: '6', bit: '6', status: '0', label: 'E63', text: 'Hoisting back right pallet present' },	
				{ cpu: '6', type: 'E', byte: '6', bit: '4', status: '0', label: 'E64', text: 'Hoisting back up position' },	
				{ cpu: '6', type: 'E', byte: '6', bit: '5', status: '0', label: 'E65', text: 'Hoisting back down position' },	
				{ cpu: '6', type: 'E', byte: '6', bit: '6', status: '0', label: 'E66', text: '' },	
				{ cpu: '6', type: 'E', byte: '6', bit: '7', status: '0', label: 'E67', text: '' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB3',
			bits: [
				{ cpu: '6', type: 'A', byte: '6', bit: '0', status: '0', label: 'RL6', text: 'Enable drive 3' },
				{ cpu: '6', type: 'A', byte: '6', bit: '1', status: '0', label: 'DV1', text: 'Enable drive 4' },	
				{ cpu: '6', type: 'A', byte: '6', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 5' },	
				{ cpu: '6', type: 'A', byte: '6', bit: '6', status: '0', label: 'RL2', text: 'Enable drive 6' },	
				{ cpu: '6', type: 'A', byte: '6', bit: '4', status: '0', label: 'RL11', text: 'Trolley drives enable K11' },	
				{ cpu: '6', type: 'A', byte: '6', bit: '5', status: '0', label: 'RL17', text: 'Bypass safety limitswitches' },	
				{ cpu: '6', type: 'A', byte: '6', bit: '6', status: '0', label: 'RL18', text: 'Reset retention limitswitches' },	
				{ cpu: '6', type: 'A', byte: '6', bit: '7', status: '0', label: '', text: '' }]	
			}]
		}
	];
	return data;
}

/* IO Shuttle 7 */
function Rack_IO_SH71 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB0',
			bits: [
				{ cpu: '7', type: 'E', byte: '0', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard' },
				{ cpu: '7', type: 'E', byte: '0', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard' },	
				{ cpu: '7', type: 'E', byte: '0', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard' },	
				{ cpu: '7', type: 'E', byte: '0', bit: '7', status: '0', label: 'D', text: 'Mobile keyboard' },	
				{ cpu: '7', type: 'E', byte: '0', bit: '4', status: '0', label: 'OK', text: 'Mobile keyboard' },	
				{ cpu: '7', type: 'E', byte: '0', bit: '5', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '7', type: 'E', byte: '0', bit: '6', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '7', type: 'E', byte: '0', bit: '7', status: '0', label: 'S2', text: 'Mobile keyboard' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB1',
			bits: [
				{ cpu: '7', type: 'E', byte: '1', bit: '0', status: '0', label: 'FTXV', text: '' },
				{ cpu: '7', type: 'E', byte: '1', bit: '1', status: '0', label: 'FTXH', text: '' },	
				{ cpu: '7', type: 'E', byte: '1', bit: '2', status: '0', label: 'DB32', text: 'Data introduction 1' },	
				{ cpu: '7', type: 'E', byte: '1', bit: '7', status: '0', label: 'DBHZ', text: 'Data introduction 2' },	
				{ cpu: '7', type: 'E', byte: '1', bit: '4', status: '0', label: 'K1', text: 'Trolley 380V line' },	
				{ cpu: '7', type: 'E', byte: '1', bit: '5', status: '0', label: 'RSI', text: 'Safety line check' },	
				{ cpu: '7', type: 'E', byte: '1', bit: '6', status: '0', label: 'S3', text: 'Manual/Automatic mode switch' },	
				{ cpu: '7', type: 'E', byte: '1', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB2',
			bits: [
				{ cpu: '7', type: 'E', byte: '2', bit: '0', status: '0', label: 'FTMV', text: 'Intertravamento - front' },
				{ cpu: '7', type: 'E', byte: '2', bit: '1', status: '0', label: 'FTMH', text: 'Intertravamento - back' },	
				{ cpu: '7', type: 'E', byte: '2', bit: '2', status: '0', label: 'EMC', text: 'Trolley home position' },	
				{ cpu: '7', type: 'E', byte: '2', bit: '7', status: '0', label: 'DRV1', text: 'Drive 1 enabled' },	
				{ cpu: '7', type: 'E', byte: '2', bit: '4', status: '0', label: 'DRV2', text: 'Drive 2 enabled' },	
				{ cpu: '7', type: 'E', byte: '2', bit: '5', status: '0', label: 'BDR1', text: 'Batentes - DRV1 enabled' },	
				{ cpu: '7', type: 'E', byte: '2', bit: '6', status: '0', label: 'BDR2', text: 'Batentes - DRV2 enabled' },	
				{ cpu: '7', type: 'E', byte: '2', bit: '7', status: '0', label: 'S4', text: 'Bypass safety key' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB3',
			bits: [
				{ cpu: '7', type: 'E', byte: '7', bit: '0', status: '0', label: 'BHFL', text: 'Batentes - front left high' },
				{ cpu: '7', type: 'E', byte: '7', bit: '1', status: '0', label: 'BLFL', text: 'Batentes - front left low' },	
				{ cpu: '7', type: 'E', byte: '7', bit: '2', status: '0', label: 'BHFR', text: 'Batentes - front right high' },	
				{ cpu: '7', type: 'E', byte: '7', bit: '7', status: '0', label: 'BLFR', text: 'Batentes - front right low' },	
				{ cpu: '7', type: 'E', byte: '7', bit: '4', status: '0', label: 'BHBL', text: 'Batentes - back left high' },	
				{ cpu: '7', type: 'E', byte: '7', bit: '5', status: '0', label: 'BLBL', text: 'Batentes - back left low' },	
				{ cpu: '7', type: 'E', byte: '7', bit: '6', status: '0', label: 'BHBR', text: 'Batentes - back right high' },	
				{ cpu: '7', type: 'E', byte: '7', bit: '7', status: '0', label: 'BLBR', text: 'Batentes - back right low' }]	
			}]
		},
		// Card 5
		{
		nr: '5',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB0',
			bits: [
				{ cpu: '7', type: 'A', byte: '0', bit: '0', status: '0', label: 'RL6', text: 'Drive enable K1' },
				{ cpu: '7', type: 'A', byte: '0', bit: '1', status: '0', label: 'DV1', text: 'Enable drive 1' },	
				{ cpu: '7', type: 'A', byte: '0', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 2' },	
				{ cpu: '7', type: 'A', byte: '0', bit: '7', status: '0', label: 'RL2', text: 'Braking resistor' },	
				{ cpu: '7', type: 'A', byte: '0', bit: '4', status: '0', label: 'RL8', text: 'Reset retention limitswitches' },	
				{ cpu: '7', type: 'A', byte: '0', bit: '5', status: '0', label: 'RL7', text: 'Bypass safety limitswitches' },	
				{ cpu: '7', type: 'A', byte: '0', bit: '6', status: '0', label: 'LA', text: 'Alarm' },	
				{ cpu: '7', type: 'A', byte: '0', bit: '7', status: '0', label: 'LC', text: 'System Ready' }]	
			}]
		},
		// Card 6
		{
		nr: '6',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB1',
			bits: [
				{ cpu: '7', type: 'A', byte: '1', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard display' },
				{ cpu: '7', type: 'A', byte: '1', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard display' },	
				{ cpu: '7', type: 'A', byte: '1', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard display' },	
				{ cpu: '7', type: 'A', byte: '1', bit: '7', status: '0', label: 'D', text: 'Mobile keyboard display' },	
				{ cpu: '7', type: 'A', byte: '1', bit: '4', status: '0', label: 'AD1', text: 'Mobile keyboard display' },	
				{ cpu: '7', type: 'A', byte: '1', bit: '5', status: '0', label: 'AD2', text: 'Mobile keyboard display' },	
				{ cpu: '7', type: 'A', byte: '1', bit: '6', status: '0', label: 'AD3', text: 'Mobile keyboard display' },	
				{ cpu: '7', type: 'A', byte: '1', bit: '7', status: '0', label: 'AD4', text: 'Mobile keyboard display' }]	
			}]
		},
		// Card 7
		{
		nr: '7',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB2',
			bits: [
				{ cpu: '7', type: 'A', byte: '2', bit: '0', status: '0', label: 'A20', text: 'Batentes - solenoid' },
				{ cpu: '7', type: 'A', byte: '2', bit: '1', status: '0', label: 'A21', text: '' },	
				{ cpu: '7', type: 'A', byte: '2', bit: '2', status: '0', label: 'A22', text: 'Batentes - enable drive 1' },	
				{ cpu: '7', type: 'A', byte: '2', bit: '7', status: '0', label: 'A23', text: 'Batentes - enable drive 2' },	
				{ cpu: '7', type: 'A', byte: '2', bit: '4', status: '0', label: 'A24', text: 'Batentes - front/back selection' },	
				{ cpu: '7', type: 'A', byte: '2', bit: '5', status: '0', label: 'A25', text: 'Trolley locking pin' },	
				{ cpu: '7', type: 'A', byte: '2', bit: '6', status: '0', label: 'FTV', text: 'Intertravamento front - 0 = +24VDC' },	
				{ cpu: '7', type: 'A', byte: '2', bit: '7', status: '0', label: 'FTH', text: 'Intertravamento back - 0 = +24VDC' }]	
			}]
		}
	];
	return data;
}

/* IO Trolley 7 */
function Rack_IO_SH72 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB4',
			bits: [
				{ cpu: '7', type: 'E', byte: '4', bit: '0', status: '0', label: 'RSI', text: 'Safety line check trolley' },
				{ cpu: '7', type: 'E', byte: '4', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '7', type: 'E', byte: '4', bit: '2', status: '0', label: 'DRV3', text: 'Drive 3 enabled' },	
				{ cpu: '7', type: 'E', byte: '4', bit: '7', status: '0', label: 'DRV4', text: 'Drive 4 enabled' },	
				{ cpu: '7', type: 'E', byte: '4', bit: '4', status: '0', label: 'DRV5', text: 'Drive 5 enabled' },	
				{ cpu: '7', type: 'E', byte: '4', bit: '5', status: '0', label: 'DRV6', text: 'Drive 6 enabled' },	
				{ cpu: '7', type: 'E', byte: '4', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '7', type: 'E', byte: '4', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB5',
			bits: [
				{ cpu: '7', type: 'E', byte: '5', bit: '0', status: '0', label: 'E50', text: 'Hoisting homing front' },
				{ cpu: '7', type: 'E', byte: '5', bit: '1', status: '0', label: 'E51', text: 'Pallet travelling front' },	
				{ cpu: '7', type: 'E', byte: '5', bit: '2', status: '0', label: 'E52', text: 'Hoisting front left pallet present' },	
				{ cpu: '7', type: 'E', byte: '5', bit: '7', status: '0', label: 'E53', text: 'Hoisting front right pallet present' },	
				{ cpu: '7', type: 'E', byte: '5', bit: '4', status: '0', label: 'E54', text: 'Hoisting front up position' },	
				{ cpu: '7', type: 'E', byte: '5', bit: '5', status: '0', label: 'E55', text: 'Hoisting front down position' },	
				{ cpu: '7', type: 'E', byte: '5', bit: '6', status: '0', label: 'E56', text: '' },	
				{ cpu: '7', type: 'E', byte: '5', bit: '7', status: '0', label: 'E57', text: '' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB6',
			bits: [
				{ cpu: '7', type: 'E', byte: '6', bit: '0', status: '0', label: 'E60', text: 'Hoisting homing back' },
				{ cpu: '7', type: 'E', byte: '6', bit: '1', status: '0', label: 'E61', text: 'Pallet travelling back' },	
				{ cpu: '7', type: 'E', byte: '6', bit: '2', status: '0', label: 'E62', text: 'Hoisting back left pallet present' },	
				{ cpu: '7', type: 'E', byte: '6', bit: '7', status: '0', label: 'E63', text: 'Hoisting back right pallet present' },	
				{ cpu: '7', type: 'E', byte: '6', bit: '4', status: '0', label: 'E64', text: 'Hoisting back up position' },	
				{ cpu: '7', type: 'E', byte: '6', bit: '5', status: '0', label: 'E65', text: 'Hoisting back down position' },	
				{ cpu: '7', type: 'E', byte: '6', bit: '6', status: '0', label: 'E66', text: '' },	
				{ cpu: '7', type: 'E', byte: '6', bit: '7', status: '0', label: 'E67', text: '' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB3',
			bits: [
				{ cpu: '7', type: 'A', byte: '7', bit: '0', status: '0', label: 'RL6', text: 'Enable drive 3' },
				{ cpu: '7', type: 'A', byte: '7', bit: '1', status: '0', label: 'DV1', text: 'Enable drive 4' },	
				{ cpu: '7', type: 'A', byte: '7', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 5' },	
				{ cpu: '7', type: 'A', byte: '7', bit: '7', status: '0', label: 'RL2', text: 'Enable drive 6' },	
				{ cpu: '7', type: 'A', byte: '7', bit: '4', status: '0', label: 'RL11', text: 'Trolley drives enable K11' },	
				{ cpu: '7', type: 'A', byte: '7', bit: '5', status: '0', label: 'RL17', text: 'Bypass safety limitswitches' },	
				{ cpu: '7', type: 'A', byte: '7', bit: '6', status: '0', label: 'RL18', text: 'Reset retention limitswitches' },	
				{ cpu: '7', type: 'A', byte: '7', bit: '7', status: '0', label: '', text: '' }]	
			}]
		}
	];
	return data;
}

/* IO Shuttle 8 */
function Rack_IO_SH81 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB0',
			bits: [
				{ cpu: '8', type: 'E', byte: '0', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard' },
				{ cpu: '8', type: 'E', byte: '0', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard' },	
				{ cpu: '8', type: 'E', byte: '0', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard' },	
				{ cpu: '8', type: 'E', byte: '0', bit: '8', status: '0', label: 'D', text: 'Mobile keyboard' },	
				{ cpu: '8', type: 'E', byte: '0', bit: '4', status: '0', label: 'OK', text: 'Mobile keyboard' },	
				{ cpu: '8', type: 'E', byte: '0', bit: '5', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '8', type: 'E', byte: '0', bit: '6', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '8', type: 'E', byte: '0', bit: '7', status: '0', label: 'S2', text: 'Mobile keyboard' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB1',
			bits: [
				{ cpu: '8', type: 'E', byte: '1', bit: '0', status: '0', label: 'FTXV', text: '' },
				{ cpu: '8', type: 'E', byte: '1', bit: '1', status: '0', label: 'FTXH', text: '' },	
				{ cpu: '8', type: 'E', byte: '1', bit: '2', status: '0', label: 'DB32', text: 'Data introduction 1' },	
				{ cpu: '8', type: 'E', byte: '1', bit: '8', status: '0', label: 'DBHZ', text: 'Data introduction 2' },	
				{ cpu: '8', type: 'E', byte: '1', bit: '4', status: '0', label: 'K1', text: 'Trolley 380V line' },	
				{ cpu: '8', type: 'E', byte: '1', bit: '5', status: '0', label: 'RSI', text: 'Safety line check' },	
				{ cpu: '8', type: 'E', byte: '1', bit: '6', status: '0', label: 'S3', text: 'Manual/Automatic mode switch' },	
				{ cpu: '8', type: 'E', byte: '1', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB2',
			bits: [
				{ cpu: '8', type: 'E', byte: '2', bit: '0', status: '0', label: 'FTMV', text: 'Intertravamento - front' },
				{ cpu: '8', type: 'E', byte: '2', bit: '1', status: '0', label: 'FTMH', text: 'Intertravamento - back' },	
				{ cpu: '8', type: 'E', byte: '2', bit: '2', status: '0', label: 'EMC', text: 'Trolley home position' },	
				{ cpu: '8', type: 'E', byte: '2', bit: '8', status: '0', label: 'DRV1', text: 'Drive 1 enabled' },	
				{ cpu: '8', type: 'E', byte: '2', bit: '4', status: '0', label: 'DRV2', text: 'Drive 2 enabled' },	
				{ cpu: '8', type: 'E', byte: '2', bit: '5', status: '0', label: 'BDR1', text: 'Batentes - DRV1 enabled' },	
				{ cpu: '8', type: 'E', byte: '2', bit: '6', status: '0', label: 'BDR2', text: 'Batentes - DRV2 enabled' },	
				{ cpu: '8', type: 'E', byte: '2', bit: '7', status: '0', label: 'S4', text: 'Bypass safety key' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB3',
			bits: [
				{ cpu: '8', type: 'E', byte: '8', bit: '0', status: '0', label: 'BHFL', text: 'Batentes - front left high' },
				{ cpu: '8', type: 'E', byte: '8', bit: '1', status: '0', label: 'BLFL', text: 'Batentes - front left low' },	
				{ cpu: '8', type: 'E', byte: '8', bit: '2', status: '0', label: 'BHFR', text: 'Batentes - front right high' },	
				{ cpu: '8', type: 'E', byte: '8', bit: '8', status: '0', label: 'BLFR', text: 'Batentes - front right low' },	
				{ cpu: '8', type: 'E', byte: '8', bit: '4', status: '0', label: 'BHBL', text: 'Batentes - back left high' },	
				{ cpu: '8', type: 'E', byte: '8', bit: '5', status: '0', label: 'BLBL', text: 'Batentes - back left low' },	
				{ cpu: '8', type: 'E', byte: '8', bit: '6', status: '0', label: 'BHBR', text: 'Batentes - back right high' },	
				{ cpu: '8', type: 'E', byte: '8', bit: '7', status: '0', label: 'BLBR', text: 'Batentes - back right low' }]	
			}]
		},
		// Card 5
		{
		nr: '5',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB0',
			bits: [
				{ cpu: '8', type: 'A', byte: '0', bit: '0', status: '0', label: 'RL6', text: 'Drive enable K1' },
				{ cpu: '8', type: 'A', byte: '0', bit: '1', status: '0', label: 'DV1', text: 'Enable drive 1' },	
				{ cpu: '8', type: 'A', byte: '0', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 2' },	
				{ cpu: '8', type: 'A', byte: '0', bit: '8', status: '0', label: 'RL2', text: 'Braking resistor' },	
				{ cpu: '8', type: 'A', byte: '0', bit: '4', status: '0', label: 'RL8', text: 'Reset retention limitswitches' },	
				{ cpu: '8', type: 'A', byte: '0', bit: '5', status: '0', label: 'RL7', text: 'Bypass safety limitswitches' },	
				{ cpu: '8', type: 'A', byte: '0', bit: '6', status: '0', label: 'LA', text: 'Alarm' },	
				{ cpu: '8', type: 'A', byte: '0', bit: '7', status: '0', label: 'LC', text: 'System Ready' }]	
			}]
		},
		// Card 6
		{
		nr: '6',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB1',
			bits: [
				{ cpu: '8', type: 'A', byte: '1', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard display' },
				{ cpu: '8', type: 'A', byte: '1', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard display' },	
				{ cpu: '8', type: 'A', byte: '1', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard display' },	
				{ cpu: '8', type: 'A', byte: '1', bit: '8', status: '0', label: 'D', text: 'Mobile keyboard display' },	
				{ cpu: '8', type: 'A', byte: '1', bit: '4', status: '0', label: 'AD1', text: 'Mobile keyboard display' },	
				{ cpu: '8', type: 'A', byte: '1', bit: '5', status: '0', label: 'AD2', text: 'Mobile keyboard display' },	
				{ cpu: '8', type: 'A', byte: '1', bit: '6', status: '0', label: 'AD3', text: 'Mobile keyboard display' },	
				{ cpu: '8', type: 'A', byte: '1', bit: '7', status: '0', label: 'AD4', text: 'Mobile keyboard display' }]	
			}]
		},
		// Card 7
		{
		nr: '7',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB2',
			bits: [
				{ cpu: '8', type: 'A', byte: '2', bit: '0', status: '0', label: 'A20', text: 'Batentes - solenoid' },
				{ cpu: '8', type: 'A', byte: '2', bit: '1', status: '0', label: 'A21', text: '' },	
				{ cpu: '8', type: 'A', byte: '2', bit: '2', status: '0', label: 'A22', text: 'Batentes - enable drive 1' },	
				{ cpu: '8', type: 'A', byte: '2', bit: '8', status: '0', label: 'A23', text: 'Batentes - enable drive 2' },	
				{ cpu: '8', type: 'A', byte: '2', bit: '4', status: '0', label: 'A24', text: 'Batentes - front/back selection' },	
				{ cpu: '8', type: 'A', byte: '2', bit: '5', status: '0', label: 'A25', text: 'Trolley locking pin' },	
				{ cpu: '8', type: 'A', byte: '2', bit: '6', status: '0', label: 'FTV', text: 'Intertravamento front - 0 = +24VDC' },	
				{ cpu: '8', type: 'A', byte: '2', bit: '7', status: '0', label: 'FTH', text: 'Intertravamento back - 0 = +24VDC' }]	
			}]
		}
	];
	return data;
}

/* IO Trolley 8 */
function Rack_IO_SH82 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB4',
			bits: [
				{ cpu: '8', type: 'E', byte: '4', bit: '0', status: '0', label: 'RSI', text: 'Safety line check trolley' },
				{ cpu: '8', type: 'E', byte: '4', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '8', type: 'E', byte: '4', bit: '2', status: '0', label: 'DRV3', text: 'Drive 3 enabled' },	
				{ cpu: '8', type: 'E', byte: '4', bit: '8', status: '0', label: 'DRV4', text: 'Drive 4 enabled' },	
				{ cpu: '8', type: 'E', byte: '4', bit: '4', status: '0', label: 'DRV5', text: 'Drive 5 enabled' },	
				{ cpu: '8', type: 'E', byte: '4', bit: '5', status: '0', label: 'DRV6', text: 'Drive 6 enabled' },	
				{ cpu: '8', type: 'E', byte: '4', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '8', type: 'E', byte: '4', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB5',
			bits: [
				{ cpu: '8', type: 'E', byte: '5', bit: '0', status: '0', label: 'E50', text: 'Hoisting homing front' },
				{ cpu: '8', type: 'E', byte: '5', bit: '1', status: '0', label: 'E51', text: 'Pallet travelling front' },	
				{ cpu: '8', type: 'E', byte: '5', bit: '2', status: '0', label: 'E52', text: 'Hoisting front left pallet present' },	
				{ cpu: '8', type: 'E', byte: '5', bit: '8', status: '0', label: 'E53', text: 'Hoisting front right pallet present' },	
				{ cpu: '8', type: 'E', byte: '5', bit: '4', status: '0', label: 'E54', text: 'Hoisting front up position' },	
				{ cpu: '8', type: 'E', byte: '5', bit: '5', status: '0', label: 'E55', text: 'Hoisting front down position' },	
				{ cpu: '8', type: 'E', byte: '5', bit: '6', status: '0', label: 'E56', text: '' },	
				{ cpu: '8', type: 'E', byte: '5', bit: '7', status: '0', label: 'E57', text: '' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB6',
			bits: [
				{ cpu: '8', type: 'E', byte: '6', bit: '0', status: '0', label: 'E60', text: 'Hoisting homing back' },
				{ cpu: '8', type: 'E', byte: '6', bit: '1', status: '0', label: 'E61', text: 'Pallet travelling back' },	
				{ cpu: '8', type: 'E', byte: '6', bit: '2', status: '0', label: 'E62', text: 'Hoisting back left pallet present' },	
				{ cpu: '8', type: 'E', byte: '6', bit: '8', status: '0', label: 'E63', text: 'Hoisting back right pallet present' },	
				{ cpu: '8', type: 'E', byte: '6', bit: '4', status: '0', label: 'E64', text: 'Hoisting back up position' },	
				{ cpu: '8', type: 'E', byte: '6', bit: '5', status: '0', label: 'E65', text: 'Hoisting back down position' },	
				{ cpu: '8', type: 'E', byte: '6', bit: '6', status: '0', label: 'E66', text: '' },	
				{ cpu: '8', type: 'E', byte: '6', bit: '7', status: '0', label: 'E67', text: '' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB3',
			bits: [
				{ cpu: '8', type: 'A', byte: '8', bit: '0', status: '0', label: 'RL6', text: 'Enable drive 3' },
				{ cpu: '8', type: 'A', byte: '8', bit: '1', status: '0', label: 'DV1', text: 'Enable drive 4' },	
				{ cpu: '8', type: 'A', byte: '8', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 5' },	
				{ cpu: '8', type: 'A', byte: '8', bit: '8', status: '0', label: 'RL2', text: 'Enable drive 6' },	
				{ cpu: '8', type: 'A', byte: '8', bit: '4', status: '0', label: 'RL11', text: 'Trolley drives enable K11' },	
				{ cpu: '8', type: 'A', byte: '8', bit: '5', status: '0', label: 'RL17', text: 'Bypass safety limitswitches' },	
				{ cpu: '8', type: 'A', byte: '8', bit: '6', status: '0', label: 'RL18', text: 'Reset retention limitswitches' },	
				{ cpu: '8', type: 'A', byte: '8', bit: '7', status: '0', label: '', text: '' }]	
			}]
		}
	];
	return data;
}

/* IO Cabin 1 */
function Rack_IO_EU11 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB0',
			bits: [
				{ cpu: '1', type: 'E', byte: '0', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard' },
				{ cpu: '1', type: 'E', byte: '0', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '4', status: '0', label: 'D', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '4', status: '0', label: 'OK', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '5', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '6', status: '0', label: 'S2', text: 'Mobile keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '7', status: '0', label: 'S2', text: 'Mobile keyboard' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB1',
			bits: [
				{ cpu: '1', type: 'E', byte: '1', bit: '0', status: '0', label: 'EDL', text: 'Turntable exit position' },
				{ cpu: '1', type: 'E', byte: '1', bit: '1', status: '0', label: 'EDR', text: 'Turntable transfer position' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '2', status: '0', label: 'DB32', text: 'Data introduction 1' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '4', status: '0', label: 'DBHZ', text: 'Data introduction 2' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '4', status: '0', label: 'K1', text: 'Trolley 380V line' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '5', status: '0', label: 'RSI', text: 'Safety line check' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '6', status: '0', label: 'S3', text: 'Manual/Automatic mode switch' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 3
		{
		nr: '4',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB2',
			bits: [
				{ cpu: '1', type: 'E', byte: '2', bit: '0', status: '0', label: 'FTMV', text: 'Intertravamento - front' },
				{ cpu: '1', type: 'E', byte: '2', bit: '1', status: '0', label: 'FTMH', text: 'Intertravamento - back' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '2', status: '0', label: 'EMC', text: 'Trolley home position' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '4', status: '0', label: 'DRV1', text: 'Drive 1 enabled' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '4', status: '0', label: 'FRE', text: 'Vehicle presence sensor' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '5', status: '0', label: 'BDR1', text: 'Batentes - DRV1 enabled' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '6', status: '0', label: 'BDR2', text: 'Batentes - DRV2 enabled' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '7', status: '0', label: 'S4', text: 'Bypass safety key' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB3',
			bits: [
				{ cpu: '1', type: 'E', byte: '4', bit: '0', status: '0', label: 'BHFL', text: 'Batentes - front left high' },
				{ cpu: '1', type: 'E', byte: '4', bit: '1', status: '0', label: 'BLFL', text: 'Batentes - front left low' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '2', status: '0', label: 'BHFR', text: 'Batentes - front right high' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '4', status: '0', label: 'BLFR', text: 'Batentes - front right low' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '4', status: '0', label: 'BHBL', text: 'Batentes - back left high' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '5', status: '0', label: 'BLBL', text: 'Batentes - back left low' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '6', status: '0', label: 'BHBR', text: 'Batentes - back right high' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '7', status: '0', label: 'BLBR', text: 'Batentes - back right low' }]	
			}]
		},
		// Card 5
		{
		nr: '5',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB0',
			bits: [
				{ cpu: '1', type: 'A', byte: '0', bit: '0', status: '0', label: 'RL6', text: 'Drive enable K1' },
				{ cpu: '1', type: 'A', byte: '0', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 2' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '4', status: '0', label: 'DV1', text: 'Enable drive 1' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '4', status: '0', label: 'RL8', text: 'Reset retention limitswitches' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '5', status: '0', label: 'RL7', text: 'Bypass safety limitswitches' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '6', status: '0', label: 'LA', text: 'System Ready' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '7', status: '0', label: 'LC', text: 'Alarm On' }]	
			}]
		},
		// Card 6
		{
		nr: '6',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB1',
			bits: [
				{ cpu: '1', type: 'A', byte: '1', bit: '0', status: '0', label: 'A', text: 'Mobile keyboard display' },
				{ cpu: '1', type: 'A', byte: '1', bit: '1', status: '0', label: 'B', text: 'Mobile keyboard display' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '2', status: '0', label: 'C', text: 'Mobile keyboard display' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '4', status: '0', label: 'D', text: 'Mobile keyboard display' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '4', status: '0', label: 'AD1', text: 'Mobile keyboard display' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '5', status: '0', label: 'AD2', text: 'Mobile keyboard display' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '6', status: '0', label: 'AD3', text: 'Mobile keyboard display' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '7', status: '0', label: 'AD4', text: 'Mobile keyboard display' }]	
			}]
		},
		// Card 8
		{
		nr: '7',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB2',
			bits: [
				{ cpu: '1', type: 'A', byte: '2', bit: '0', status: '0', label: 'A00', text: 'Batentes - solenoid' },
				{ cpu: '1', type: 'A', byte: '2', bit: '1', status: '0', label: 'A01', text: 'Turntable locking pin' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '2', status: '0', label: 'A02', text: 'Batentes - enable drive 1' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '4', status: '0', label: 'A03', text: 'Batentes - enable drive 2' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '4', status: '0', label: 'A04', text: 'Batentes - front/back selection' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '5', status: '0', label: 'A05', text: 'Trolley locking pin' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '6', status: '0', label: 'FTV', text: 'Intertravamento - 0 = +24VDC' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '7', status: '0', label: 'FTH', text: 'Intertravamento - 0 = +24VDC' }]	
			}]
		}
	];
	return data;
}

/* IO Trolley 1 */
function Rack_IO_EU12 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB4',
			bits: [
				{ cpu: '1', type: 'E', byte: '4', bit: '0', status: '0', label: 'RSI', text: 'Safety line check trolley' },
				{ cpu: '1', type: 'E', byte: '4', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '2', status: '0', label: 'DRV3', text: 'Drive 3 enabled' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '8', status: '0', label: 'DRV4', text: 'Drive 4 enabled' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '4', status: '0', label: 'DRV5', text: 'Drive 5 enabled' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '5', status: '0', label: 'DRV6', text: 'Drive 6 enabled' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB5',
			bits: [
				{ cpu: '1', type: 'E', byte: '5', bit: '0', status: '0', label: 'E50', text: 'Hoisting homing front' },
				{ cpu: '1', type: 'E', byte: '5', bit: '1', status: '0', label: 'E51', text: 'Pallet travelling front' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '2', status: '0', label: 'E52', text: 'Hoisting front left pallet present' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '8', status: '0', label: 'E53', text: 'Hoisting front right pallet present' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '4', status: '0', label: 'E54', text: 'Hoisting front up position' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '5', status: '0', label: 'E55', text: 'Hoisting front down position' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '6', status: '0', label: 'E56', text: '' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '7', status: '0', label: 'E57', text: '' }]	
			}]
		},
		// Card 3
		{
		nr: '8',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB6',
			bits: [
				{ cpu: '1', type: 'E', byte: '6', bit: '0', status: '0', label: 'E60', text: 'Hoisting homing back' },
				{ cpu: '1', type: 'E', byte: '6', bit: '1', status: '0', label: 'E61', text: 'Pallet travelling back' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '2', status: '0', label: 'E62', text: 'Hoisting back left pallet present' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '8', status: '0', label: 'E63', text: 'Hoisting back right pallet present' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '4', status: '0', label: 'E64', text: 'Hoisting back up position' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '5', status: '0', label: 'E65', text: 'Hoisting back down position' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '6', status: '0', label: 'E66', text: '' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '7', status: '0', label: 'E67', text: '' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB3',
			bits: [
				{ cpu: '1', type: 'A', byte: '8', bit: '0', status: '0', label: 'RL6', text: 'Enable drive 3' },
				{ cpu: '1', type: 'A', byte: '8', bit: '1', status: '0', label: 'DV1', text: 'Enable drive 4' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '2', status: '0', label: 'DV2', text: 'Enable drive 5' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '8', status: '0', label: 'RL2', text: 'Enable drive 6' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '4', status: '0', label: 'RL11', text: 'Trolley drives enable K11' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '5', status: '0', label: 'RL17', text: 'Bypass safety limitswitches' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '6', status: '0', label: 'RL18', text: 'Reset retention limitswitches' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '7', status: '0', label: '', text: '' }]	
			}]
		}
	];
	return data;
}

/* IO Doors 1 */
function Rack_IO_EU13 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB7',
			bits: [
				{ cpu: '1', type: 'E', byte: '7', bit: '0', status: '0', label: '.0', text: '' },
				{ cpu: '1', type: 'E', byte: '7', bit: '1', status: '0', label: '.1', text: '' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '2', status: '0', label: '.2', text: '' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '8', status: '0', label: '.3', text: '' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '4', status: '0', label: '.4', text: '' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '5', status: '0', label: '.5', text: '' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '6', status: '0', label: '.6', text: '' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '7', status: '0', label: '.7', text: '' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB8',
			bits: [
				{ cpu: '1', type: 'E', byte: '8', bit: '0', status: '0', label: '.0', text: '' },
				{ cpu: '1', type: 'E', byte: '8', bit: '1', status: '0', label: '.1', text: '' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '2', status: '0', label: '.2', text: '' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '8', status: '0', label: '.3', text: '' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '4', status: '0', label: '.4', text: '' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '5', status: '0', label: '.5', text: '' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '6', status: '0', label: '.6', text: '' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '7', status: '0', label: '.7', text: '' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB9',
			bits: [
				{ cpu: '1', type: 'E', byte: '9', bit: '0', status: '0', label: '.0', text: '' },
				{ cpu: '1', type: 'E', byte: '9', bit: '1', status: '0', label: '.1', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '2', status: '0', label: '.2', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '8', status: '0', label: '.3', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '4', status: '0', label: '.4', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '5', status: '0', label: '.5', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '6', status: '0', label: '.6', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '7', status: '0', label: '.7', text: '' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB10',
			bits: [
				{ cpu: '1', type: 'E', byte: '10', bit: '0', status: '0', label: '.0', text: '' },
				{ cpu: '1', type: 'E', byte: '10', bit: '1', status: '0', label: '.1', text: '' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '2', status: '0', label: '.2', text: '' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '8', status: '0', label: '.3', text: '' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '4', status: '0', label: '.4', text: '' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '5', status: '0', label: '.5', text: '' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '6', status: '0', label: '.6', text: '' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '7', status: '0', label: '.7', text: '' }]	
			}]
		},
		// Card 5
		{
		nr: '5',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB11',
			bits: [
				{ cpu: '1', type: 'E', byte: '11', bit: '0', status: '0', label: '.0', text: '' },
				{ cpu: '1', type: 'E', byte: '11', bit: '1', status: '0', label: '.1', text: '' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '2', status: '0', label: '.2', text: '' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '8', status: '0', label: '.3', text: '' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '4', status: '0', label: '.4', text: '' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '5', status: '0', label: '.5', text: '' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '6', status: '0', label: '.6', text: '' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '7', status: '0', label: '.7', text: '' }]	
			}]
		},
		// Card 6
		{
		nr: '6',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB12',
			bits: [
				{ cpu: '1', type: 'E', byte: '12', bit: '0', status: '0', label: '.0', text: '' },
				{ cpu: '1', type: 'E', byte: '12', bit: '1', status: '0', label: '.1', text: '' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '2', status: '0', label: '.2', text: '' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '8', status: '0', label: '.3', text: '' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '4', status: '0', label: '.4', text: '' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '5', status: '0', label: '.5', text: '' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '6', status: '0', label: '.6', text: '' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '7', status: '0', label: '.7', text: '' }]	
			}]
		},
		// Card 7
		{
		nr: '7',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB13',
			bits: [
				{ cpu: '1', type: 'E', byte: '13', bit: '0', status: '0', label: '.0', text: '' },
				{ cpu: '1', type: 'E', byte: '13', bit: '1', status: '0', label: '.1', text: '' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '2', status: '0', label: '.2', text: '' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '8', status: '0', label: '.3', text: '' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '4', status: '0', label: '.4', text: '' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '5', status: '0', label: '.5', text: '' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '6', status: '0', label: '.6', text: '' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '7', status: '0', label: '.7', text: '' }]	
			}]
		},
		// Card 8
		{
		nr: '8',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB14',
			bits: [
				{ cpu: '1', type: 'E', byte: '14', bit: '0', status: '0', label: '.0', text: '' },
				{ cpu: '1', type: 'E', byte: '14', bit: '1', status: '0', label: '.1', text: '' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '2', status: '0', label: '.2', text: '' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '8', status: '0', label: '.3', text: '' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '4', status: '0', label: '.4', text: '' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '5', status: '0', label: '.5', text: '' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '6', status: '0', label: '.6', text: '' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '7', status: '0', label: '.7', text: '' }]	
			}]
		},
		// Card 9
		{
		nr: '9',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB15',
			bits: [
				{ cpu: '1', type: 'E', byte: '15', bit: '0', status: '0', label: '.0', text: '' },
				{ cpu: '1', type: 'E', byte: '15', bit: '1', status: '0', label: '.1', text: '' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '2', status: '0', label: '.2', text: '' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '8', status: '0', label: '.3', text: '' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '4', status: '0', label: '.4', text: '' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '5', status: '0', label: '.5', text: '' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '6', status: '0', label: '.6', text: '' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '7', status: '0', label: '.7', text: '' }]	
			}]
		},
		// Card 10
		{
		nr: '10',
		type: 'VIPA 021-1BF00',
		bytes: [
			{
			label: 'EB16',
			bits: [
				{ cpu: '1', type: 'E', byte: '16', bit: '0', status: '0', label: '.0', text: '' },
				{ cpu: '1', type: 'E', byte: '16', bit: '1', status: '0', label: '.1', text: '' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '2', status: '0', label: '.2', text: '' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '8', status: '0', label: '.3', text: '' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '4', status: '0', label: '.4', text: '' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '5', status: '0', label: '.5', text: '' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '6', status: '0', label: '.6', text: '' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '7', status: '0', label: '.7', text: '' }]	
			}]
		}
	];
	return data;
}

/* IO Doors 1 */
function Rack_IO_EU14 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB4',
			bits: [
				{ cpu: '1', type: 'A', byte: '4', bit: '0', status: '0', label: '.0', text: '' },
				{ cpu: '1', type: 'A', byte: '4', bit: '1', status: '0', label: '.1', text: '' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '2', status: '0', label: '.2', text: '' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '8', status: '0', label: '.3', text: '' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '4', status: '0', label: '.4', text: '' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '5', status: '0', label: '.5', text: '' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '6', status: '0', label: '.6', text: '' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '7', status: '0', label: '.7', text: '' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB5',
			bits: [
				{ cpu: '1', type: 'A', byte: '5', bit: '0', status: '0', label: '.0', text: '' },
				{ cpu: '1', type: 'A', byte: '5', bit: '1', status: '0', label: '.1', text: '' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '2', status: '0', label: '.2', text: '' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '8', status: '0', label: '.3', text: '' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '4', status: '0', label: '.4', text: '' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '5', status: '0', label: '.5', text: '' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '6', status: '0', label: '.6', text: '' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '7', status: '0', label: '.7', text: '' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB6',
			bits: [
				{ cpu: '1', type: 'A', byte: '6', bit: '0', status: '0', label: '.0', text: '' },
				{ cpu: '1', type: 'A', byte: '6', bit: '1', status: '0', label: '.1', text: '' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '2', status: '0', label: '.2', text: '' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '8', status: '0', label: '.3', text: '' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '4', status: '0', label: '.4', text: '' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '5', status: '0', label: '.5', text: '' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '6', status: '0', label: '.6', text: '' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '7', status: '0', label: '.7', text: '' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB7',
			bits: [
				{ cpu: '1', type: 'A', byte: '7', bit: '0', status: '0', label: '.0', text: '' },
				{ cpu: '1', type: 'A', byte: '7', bit: '1', status: '0', label: '.1', text: '' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '2', status: '0', label: '.2', text: '' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '8', status: '0', label: '.3', text: '' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '4', status: '0', label: '.4', text: '' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '5', status: '0', label: '.5', text: '' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '6', status: '0', label: '.6', text: '' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '7', status: '0', label: '.7', text: '' }]	
			}]
		},
		// Card 5
		{
		nr: '5',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB8',
			bits: [
				{ cpu: '1', type: 'A', byte: '8', bit: '0', status: '0', label: '.0', text: '' },
				{ cpu: '1', type: 'A', byte: '8', bit: '1', status: '0', label: '.1', text: '' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '2', status: '0', label: '.2', text: '' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '8', status: '0', label: '.3', text: '' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '4', status: '0', label: '.4', text: '' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '5', status: '0', label: '.5', text: '' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '6', status: '0', label: '.6', text: '' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '7', status: '0', label: '.7', text: '' }]	
			}]
		},
		// Card 6
		{
		nr: '6',
		type: 'VIPA 022-1BF00',
		bytes: [
			{
			label: 'AB9',
			bits: [
				{ cpu: '1', type: 'A', byte: '9', bit: '0', status: '0', label: '.0', text: '' },
				{ cpu: '1', type: 'A', byte: '9', bit: '1', status: '0', label: '.1', text: '' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '2', status: '0', label: '.2', text: '' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '8', status: '0', label: '.3', text: '' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '4', status: '0', label: '.4', text: '' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '5', status: '0', label: '.5', text: '' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '6', status: '0', label: '.6', text: '' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '7', status: '0', label: '.7', text: '' }]	
			}]
		}
	];
	return data;
}

