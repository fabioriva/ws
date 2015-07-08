/*
 * I/O entity
 */
var utility = require('./Tools');

exports.Rack_EL1 = Rack_EL1();
exports.Rack_EL2 = Rack_EL2();
exports.Rack_EL3 = Rack_EL3();

exports.Rack_SH01 = Rack_SH01();
exports.Rack_SH02 = Rack_SH02();
exports.Rack_SH03 = Rack_SH03();
exports.Rack_SH04 = Rack_SH04();
exports.Rack_SH05 = Rack_SH05();
exports.Rack_SH06 = Rack_SH06();

exports.Rack_SH07 = Rack_SH07();
exports.Rack_SH08 = Rack_SH08();
exports.Rack_SH09 = Rack_SH09();
exports.Rack_SH10 = Rack_SH10();
exports.Rack_SH11 = Rack_SH11();
exports.Rack_SH12 = Rack_SH12();

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
				//console.log(r[c].bytes[b].bits[i].type + r[c].bytes[b].bits[i].byte + r[c].bytes[b].bits[i].bit + ':' + r[c].bytes[b].bits[i].status);
			}
			x += 1;
		}
	}
	return r;
}

/* IO EL1 */
function Rack_EL1 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB0',
			bits: [
				{ cpu: '1', type: 'E', byte: '0', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '0', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB1',
			bits: [
				{ cpu: '1', type: 'E', byte: '1', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '1', bit: '1', status: '0', label: 'DB32', text: 'Data enable 1' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '2', status: '0', label: 'DBHZ', text: 'Data enable 2' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '4', status: '0', label: 'UC', text: 'Control confirmation push-button' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'EB2',
			bits: [
				{ cpu: '1', type: 'E', byte: '2', bit: '0', status: '0', label: 'EZA', text: 'Exit door closed' },
				{ cpu: '1', type: 'E', byte: '2', bit: '1', status: '0', label: 'EOA', text: 'Exit door opened' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '2', status: '0', label: 'FBA', text: 'Exit door safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '3', status: '0', label: 'APA', text: 'Exit door motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '4', status: '0', label: 'EBZA', text: 'Exit barrier closed' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '5', status: '0', label: 'EBOA', text: 'Exit barrier opened' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '6', status: '0', label: 'FBBA', text: 'Exit barrier safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '7', status: '0', label: 'APBA', text: 'Exit barrier motor circuit breaker' }]	
			},
			{
			label: 'EB3',
			bits: [
				{ cpu: '1', type: 'E', byte: '3', bit: '0', status: '0', label: 'FPA', text: 'Vehicle present in exit' },
				{ cpu: '1', type: 'E', byte: '3', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '2', status: '0', label: 'S1', text: 'Manual/Automatic' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB4',
			bits: [
				{ cpu: '1', type: 'E', byte: '4', bit: '0', status: '0', label: 'FTXV', text: 'Elevator safety photo-sensor front side' },
				{ cpu: '1', type: 'E', byte: '4', bit: '1', status: '0', label: 'FTXH', text: 'Elevator safety photo-sensor back side' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '2', status: '0', label: 'FEMV', text: 'Silomat on elevator position photo-sensor front side' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '3', status: '0', label: 'FEMH', text: 'Silomat on elevator position photo-sensor front side' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '4', status: '0', label: 'FRX', text: 'Vehicle direction photo-sensor right side' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '5', status: '0', label: 'FLX', text: 'Vehicle direction photo-sensor left side' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '6', status: '0', label: 'TCR', text: 'Silomat cable-reel ON' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '7', status: '0', label: 'MTC', text: 'Silomat motors circuit breaker' }]	
			},
			{
			label: 'EB5',
			bits: [
				{ cpu: '1', type: 'E', byte: '5', bit: '0', status: '0', label: 'FDR2', text: 'Vehicle right width check photo-sensor' },
				{ cpu: '1', type: 'E', byte: '5', bit: '1', status: '0', label: 'FDL2', text: 'Vehicle left width check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '2', status: '0', label: 'ASKP', text: 'Door motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '3', status: '0', label: 'TJ1', text: 'Inverter 1 ON' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '5', status: '0', label: 'EXPV', text: 'Elevator door level position check photo sensor' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '6', status: '0', label: 'EFB', text: 'Elevator level position check photo sensor' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '7', status: '0', label: 'EXV', text: 'Elevator bottom level position check photo sensor' }]	
			},
			{
			label: 'EB6',
			bits: [
				{ cpu: '1', type: 'E', byte: '6', bit: '0', status: '0', label: 'RMV', text: 'Silomat front positioning proximity' },
				{ cpu: '1', type: 'E', byte: '6', bit: '1', status: '0', label: 'RMH', text: 'Silomat back positioning proximity' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '2', status: '0', label: 'RES', text: 'Silomat lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '3', status: '0', label: 'REH', text: 'Silomat higher position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '4', status: '0', label: 'RCVH', text: 'Silomat centering device closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '5', status: '0', label: 'REAV', text: 'Silomat front centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '6', status: '0', label: 'REAH', text: 'Silomat back centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '7', status: '0', label: 'REP', text: 'Silomat centering device ready' }]	
			},
			{
			label: 'EB7',
			bits: [
				{ cpu: '1', type: 'E', byte: '7', bit: '0', status: '0', label: 'ECA', text: 'Flap higher position limitswitch' },
				{ cpu: '1', type: 'E', byte: '7', bit: '1', status: '0', label: 'ECB', text: 'Flap lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '2', status: '0', label: 'AMC', text: 'Flap motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '3', status: '0', label: 'EOM', text: 'Locking device open position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '4', status: '0', label: 'EZM', text: 'Locking device closed position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '5', status: '0', label: 'AMM', text: 'Locking device motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '6', status: '0', label: 'EPZV', text: 'Vehicle wheel front position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '7', status: '0', label: 'EPZH', text: 'Vehicle wheel back position limitswitch' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB8',
			bits: [
				{ cpu: '1', type: 'E', byte: '8', bit: '0', status: '0', label: 'EZE', text: 'Entry door closed limitswitch' },
				{ cpu: '1', type: 'E', byte: '8', bit: '1', status: '0', label: 'EOE', text: 'Entry door opened limitswitch' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '2', status: '0', label: 'FBE', text: 'Entry door safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '3', status: '0', label: 'APE', text: 'Entry door motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '4', status: '0', label: 'EBZE', text: 'Entry barrier closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '5', status: '0', label: 'EBOE', text: 'Entry barrier opened limitswitch' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '6', status: '0', label: 'FBBE', text: 'Entry barrier safety photo-sensor' },
				{ cpu: '1', type: 'E', byte: '8', bit: '7', status: '0', label: 'APBE', text: 'Entry barrier motor circuit breaker' }]	
			},
			{
			label: 'EB9',
			bits: [
				{ cpu: '1', type: 'E', byte: '9', bit: '0', status: '0', label: 'FTA3', text: 'Vehicle height 3 photo-sensor' },
				{ cpu: '1', type: 'E', byte: '9', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '6', status: '0', label: 'FTSV', text: 'Front side transfer stall check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '7', status: '0', label: 'FTSH', text: 'Back side transfer stall check photo-sensor' }]	
			},
			{
			label: 'EB10',
			bits: [
				{ cpu: '1', type: 'E', byte: '10', bit: '0', status: '0', label: 'FPE', text: 'Vehicle present in entry' },
				{ cpu: '1', type: 'E', byte: '10', bit: '1', status: '0', label: 'FLP1', text: 'Vehicle max back length check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '2', status: '0', label: 'FLP2', text: 'Vehicle back length check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '3', status: '0', label: 'FDR1', text: 'Vehicle max right width check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '4', status: '0', label: 'FDL1', text: 'Vehicle max left width check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '5', status: '0', label: 'FLA1', text: 'Vehicle max front length check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '6', status: '0', label: 'FLA2', text: 'Vehicle front length check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '7', status: '0', label: 'FTA1', text: 'Vehicle max height check photo-sensor' }]	
			},
			{
			label: 'EB11',
			bits: [
				{ cpu: '1', type: 'E', byte: '11', bit: '0', status: '0', label: 'IV1', text: 'Inverter 1 ON' },
				{ cpu: '1', type: 'E', byte: '11', bit: '1', status: '0', label: 'FDBK', text: 'Elevator hoisting feedback' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '2', status: '0', label: 'ASBK', text: 'Elevator hoisting motor brake circut breaker' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '3', status: '0', label: 'RTA', text: 'Elevator hoisting motor circut breaker' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '7', status: '0', label: 'FTA2', text: 'Vehicle height 2 check photo-sensor' }]	
			}],
		},
		// Card 4
		{
		nr: '4',
		type: '6ES7322-1BL00-0AA00',
		bytes: [
			{
			label: 'AB0',
			bits: [
				{ cpu: '1', type: 'A', byte: '0', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '0', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			},
			{
			label: 'AB1',
			bits: [
				{ cpu: '1', type: 'A', byte: '1', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '1', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '2', status: '0', label: 'SPA', text: 'Exit door motor' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '3', status: '0', label: 'SBZA', text: 'Exit barrier close' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '4', status: '0', label: 'SBOA', text: 'Exit barrier open' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '6', status: '0', label: 'LA', text: 'Alarm ON lamp' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '7', status: '0', label: 'LC', text: 'System ready lamp' }]	
			},
			{
			label: 'AB2',
			bits: [
				{ cpu: '1', type: 'A', byte: '2', bit: '0', status: '0', label: 'SBK2', text: 'Elevator hoisting brake 2' },
				{ cpu: '1', type: 'A', byte: '2', bit: '1', status: '0', label: 'KBA', text: 'Elevator hoisting' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '2', status: '0', label: 'SPE', text: 'Entry door motor' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '3', status: '0', label: 'SBZE', text: 'Entry barrier close' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '4', status: '0', label: 'SBOE', text: 'Entry barrier open' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'AB3',
			bits: [
				{ cpu: '1', type: 'A', byte: '3', bit: '0', status: '0', label: 'SZE', text: 'Entry door close' },
				{ cpu: '1', type: 'A', byte: '3', bit: '1', status: '0', label: 'SOE', text: 'Entry door open' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '2', status: '0', label: 'SZA', text: 'Exit door close' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '3', status: '0', label: 'SOA', text: 'Exit door open' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '4', status: '0', label: '', text: 'Description' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '5', status: '0', label: 'RFE', text: 'Traffic light green lamp' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '6', status: '0', label: 'RFA', text: 'Traffic light red lamp' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '7', status: '0', label: '', text: '' }]	
			}],
		},
		// Card 5
		{
		nr: '5',
		type: '6ES7322-1BH01-0AA00',
		bytes: [
			{
			label: 'AB4',
			bits: [
				{ cpu: '1', type: 'A', byte: '4', bit: '0', status: '0', label: 'SQA', text: 'Elevator hoisting' },
				{ cpu: '1', type: 'A', byte: '4', bit: '1', status: '0', label: 'SBK1', text: 'Elevator hoisting brake 1' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '4', status: '0', label: 'SCA', text: 'Flap up' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '5', status: '0', label: 'SCB', text: 'Flap down' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '6', status: '0', label: 'SMA', text: 'Locking pin close' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '7', status: '0', label: 'SMB', text: 'Locking pin open' }]	
			},
			{
			label: 'AB5',
			bits: [
				{ cpu: '1', type: 'A', byte: '5', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '5', bit: '1', status: '0', label: 'T2', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '2', status: '0', label: 'TRA', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '3', status: '0', label: 'TRB', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '4', status: '0', label: 'KCS', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '5', bit: '5', status: '0', label: 'KCV', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '6', status: '0', label: 'KCH', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '7', status: '0', label: 'TCR', text: 'Silomat cable-reel' }]	
			}],
		}
		
		];
	return data;
}
/* IO EL2 */
function Rack_EL2 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB12',
			bits: [
				{ cpu: '1', type: 'E', byte: '12', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '12', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB13',
			bits: [
				{ cpu: '1', type: 'E', byte: '13', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '13', bit: '1', status: '0', label: 'DB32', text: 'Data enable 1' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '2', status: '0', label: 'DBHZ', text: 'Data enable 2' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '4', status: '0', label: 'UC', text: 'Control confirmation push-button' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'EB14',
			bits: [
				{ cpu: '1', type: 'E', byte: '14', bit: '0', status: '0', label: 'EZA', text: 'Exit door closed' },
				{ cpu: '1', type: 'E', byte: '14', bit: '1', status: '0', label: 'EOA', text: 'Exit door opened' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '2', status: '0', label: 'FBA', text: 'Exit door safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '3', status: '0', label: 'APA', text: 'Exit door motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '4', status: '0', label: 'EBZA', text: 'Exit barrier closed' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '5', status: '0', label: 'EBOA', text: 'Exit barrier opened' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '6', status: '0', label: 'FBBA', text: 'Exit barrier safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '7', status: '0', label: 'APBA', text: 'Exit barrier motor circuit breaker' }]	
			},
			{
			label: 'EB15',
			bits: [
				{ cpu: '1', type: 'E', byte: '15', bit: '0', status: '0', label: 'FPA', text: 'Vehicle present in exit' },
				{ cpu: '1', type: 'E', byte: '15', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '2', status: '0', label: 'S1', text: 'Manual/Automatic' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB16',
			bits: [
				{ cpu: '1', type: 'E', byte: '16', bit: '0', status: '0', label: 'FTXV', text: 'Elevator safety photo-sensor front side' },
				{ cpu: '1', type: 'E', byte: '16', bit: '1', status: '0', label: 'FTXH', text: 'Elevator safety photo-sensor back side' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '2', status: '0', label: 'FEMV', text: 'Silomat on elevator position photo-sensor front side' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '3', status: '0', label: 'FEMH', text: 'Silomat on elevator position photo-sensor back side' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '4', status: '0', label: 'FRX', text: 'Vehicle direction photo-sensor right side' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '5', status: '0', label: 'FLX', text: 'Vehicle direction photo-sensor left side' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '6', status: '0', label: 'TCR', text: 'Silomat cable-reel ON' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '7', status: '0', label: 'MTC', text: 'Silomat motors circuit breaker' }]	
			},
			{
			label: 'EB17',
			bits: [
				{ cpu: '1', type: 'E', byte: '17', bit: '0', status: '0', label: 'FDR2', text: 'Vehicle right width check photo-sensor' },
				{ cpu: '1', type: 'E', byte: '17', bit: '1', status: '0', label: 'FDL2', text: 'Vehicle left width check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '2', status: '0', label: 'ASKP', text: 'Door motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '3', status: '0', label: 'TJ1', text: 'Inverter 1 ON' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '5', status: '0', label: 'EXPV', text: 'Elevator door level position check photo sensor' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '6', status: '0', label: 'EFB', text: 'Elevator level position check photo sensor' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '7', status: '0', label: 'EXV', text: 'Elevator bottom level position check photo sensor' }]	
			},
			{
			label: 'EB18',
			bits: [
				{ cpu: '1', type: 'E', byte: '18', bit: '0', status: '0', label: 'RMV', text: 'Silomat front positioning proximity' },
				{ cpu: '1', type: 'E', byte: '18', bit: '1', status: '0', label: 'RMH', text: 'Silomat back positioning proximity' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '2', status: '0', label: 'RES', text: 'Silomat lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '3', status: '0', label: 'REH', text: 'Silomat higher position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '4', status: '0', label: 'RCVH', text: 'Silomat centering device closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '5', status: '0', label: 'REAV', text: 'Silomat front centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '6', status: '0', label: 'REAH', text: 'Silomat back centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '7', status: '0', label: 'REP', text: 'Silomat centering device ready' }]	
			},
			{
			label: 'EB19',
			bits: [
				{ cpu: '1', type: 'E', byte: '19', bit: '0', status: '0', label: 'ECA', text: 'Flap higher position limitswitch' },
				{ cpu: '1', type: 'E', byte: '19', bit: '1', status: '0', label: 'ECB', text: 'Flap lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '2', status: '0', label: 'AMC', text: 'Flap motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '3', status: '0', label: 'EOM', text: 'Locking device open position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '4', status: '0', label: 'EZM', text: 'Locking device closed position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '5', status: '0', label: 'AMM', text: 'Locking device motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '6', status: '0', label: 'EPZV', text: 'Vehicle wheel front position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '7', status: '0', label: 'EPZH', text: 'Vehicle wheel back position limitswitch' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB20',
			bits: [
				{ cpu: '1', type: 'E', byte: '20', bit: '0', status: '0', label: 'EZE', text: 'Entry door closed limitswitch' },
				{ cpu: '1', type: 'E', byte: '20', bit: '1', status: '0', label: 'EOE', text: 'Entry door opened limitswitch' },	
				{ cpu: '1', type: 'E', byte: '20', bit: '2', status: '0', label: 'FBE', text: 'Entry door safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '20', bit: '3', status: '0', label: 'APE', text: 'Entry door motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '20', bit: '4', status: '0', label: 'EBZE', text: 'Entry barrier closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '20', bit: '5', status: '0', label: 'EBOE', text: 'Entry barrier opened limitswitch' },	
				{ cpu: '1', type: 'E', byte: '20', bit: '6', status: '0', label: 'FBBE', text: 'Entry barrier safety photo-sensor' },
				{ cpu: '1', type: 'E', byte: '20', bit: '7', status: '0', label: 'APBE', text: 'Entry barrier motor circuit breaker' }]	
			},
			{
			label: 'EB21',
			bits: [
				{ cpu: '1', type: 'E', byte: '21', bit: '0', status: '0', label: 'FTA3', text: 'Vehicle height 3 check photo-sensor' },
				{ cpu: '1', type: 'E', byte: '21', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '21', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '21', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '21', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '21', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '21', bit: '6', status: '0', label: 'FTSV', text: 'Front side transfer stall check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '21', bit: '7', status: '0', label: 'FTSH', text: 'Back side transfer stall check photo-sensor' }]	
			},
			{
			label: 'EB22',
			bits: [
				{ cpu: '1', type: 'E', byte: '22', bit: '0', status: '0', label: 'FPE', text: 'Vehicle present in entry' },
				{ cpu: '1', type: 'E', byte: '22', bit: '1', status: '0', label: 'FLP1', text: 'Vehicle max back length check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '22', bit: '2', status: '0', label: 'FLP2', text: 'Vehicle back length check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '22', bit: '3', status: '0', label: 'FDR1', text: 'Vehicle max right width check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '22', bit: '4', status: '0', label: 'FDL1', text: 'Vehicle max left width check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '22', bit: '5', status: '0', label: 'FLA1', text: 'Vehicle max front length check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '22', bit: '6', status: '0', label: 'FLA2', text: 'Vehicle front length check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '22', bit: '7', status: '0', label: 'FTA1', text: 'Vehicle max height check photo-sensor' }]	
			},
			{
			label: 'EB23',
			bits: [
				{ cpu: '1', type: 'E', byte: '23', bit: '0', status: '0', label: 'IV1', text: 'Invert 1 ON' },
				{ cpu: '1', type: 'E', byte: '23', bit: '1', status: '0', label: 'FDBK', text: 'Elevator hoisting feedback' },	
				{ cpu: '1', type: 'E', byte: '23', bit: '2', status: '0', label: 'ASBK', text: 'Elevator hoisting motor brake circut breaker' },	
				{ cpu: '1', type: 'E', byte: '23', bit: '3', status: '0', label: 'RTA', text: 'Elevator hoisting motor circut breaker' },	
				{ cpu: '1', type: 'E', byte: '23', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '23', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '23', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '23', bit: '7', status: '0', label: 'FTA2', text: 'Vehicle max height check photo-sensor' }]	
			}],
		},
		// Card 4
		{
		nr: '4',
		type: '6ES7322-1BL00-0AA00',
		bytes: [
			{
			label: 'AB6',
			bits: [
				{ cpu: '1', type: 'A', byte: '6', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '6', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			},
			{
			label: 'AB7',
			bits: [
				{ cpu: '1', type: 'A', byte: '7', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '7', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '2', status: '0', label: 'SPA', text: 'Exit door motor' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '3', status: '0', label: 'SBZA', text: 'Exit barrier open' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '4', status: '0', label: 'SBOA', text: 'Exit barrier close' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '6', status: '0', label: 'LA', text: 'Alarm ON lamp' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '7', status: '0', label: 'LC', text: 'System ready lamp' }]	
			},
			{
			label: 'AB8',
			bits: [
				{ cpu: '1', type: 'A', byte: '8', bit: '0', status: '0', label: 'SBK2', text: 'Elevator hoisting brake 2' },
				{ cpu: '1', type: 'A', byte: '8', bit: '1', status: '0', label: 'KBA', text: 'Elevator hoisting' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '2', status: '0', label: 'SPE', text: 'Entry door motor' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '3', status: '0', label: 'SBZE', text: 'Entry barrier close' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '4', status: '0', label: 'SBOE', text: 'Entry barrier open' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'AB9',
			bits: [
				{ cpu: '1', type: 'A', byte: '9', bit: '0', status: '0', label: 'SZE', text: 'Entry door close' },
				{ cpu: '1', type: 'A', byte: '9', bit: '1', status: '0', label: 'SOE', text: 'Entry door open' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '2', status: '0', label: 'SZA', text: 'Exit door close' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '3', status: '0', label: 'SOA', text: 'Exit door open' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '4', status: '0', label: '', text: 'Description' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '5', status: '0', label: 'RFE', text: 'Traffic light green lamp' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '6', status: '0', label: 'RFA', text: 'Traffic light red lamp' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '7', status: '0', label: '', text: '' }]	
			}],
		},
		// Card 5
		{
		nr: '5',
		type: '6ES7322-1BH01-0AA00',
		bytes: [
			{
			label: 'AB10',
			bits: [
				{ cpu: '1', type: 'A', byte: '10', bit: '0', status: '0', label: 'SQA', text: 'Elevator hoisting' },
				{ cpu: '1', type: 'A', byte: '10', bit: '1', status: '0', label: 'SBK1', text: 'Elevator hoisting brake 1' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '4', status: '0', label: 'SCA', text: 'Flap up' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '5', status: '0', label: 'SCB', text: 'Flap down' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '6', status: '0', label: 'SMA', text: 'Locking pin close' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '7', status: '0', label: 'SMB', text: 'Locking pin open' }]	
			},
			{
			label: 'AB11',
			bits: [
				{ cpu: '1', type: 'A', byte: '11', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '11', bit: '1', status: '0', label: 'T2', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '2', status: '0', label: 'TRA', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '3', status: '0', label: 'TRB', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '4', status: '0', label: 'KCS', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '11', bit: '5', status: '0', label: 'KCV', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '6', status: '0', label: 'KCH', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '7', status: '0', label: 'TCR', text: 'Silomat cable-reel' }]	
			}],
		}
		
		];
	return data;
}
/* IO EL3 */
function Rack_EL3 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB24',
			bits: [
				{ cpu: '1', type: 'E', byte: '24', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '24', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '24', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '24', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '24', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '24', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '24', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '24', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB25',
			bits: [
				{ cpu: '1', type: 'E', byte: '25', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '25', bit: '1', status: '0', label: 'DB32', text: 'Data enable 1' },	
				{ cpu: '1', type: 'E', byte: '25', bit: '2', status: '0', label: 'DBHZ', text: 'Data enable 2' },	
				{ cpu: '1', type: 'E', byte: '25', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '25', bit: '4', status: '0', label: 'UC', text: 'Control confirmation push-button' },	
				{ cpu: '1', type: 'E', byte: '25', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '25', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '25', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'EB26',
			bits: [
				{ cpu: '1', type: 'E', byte: '26', bit: '0', status: '0', label: 'EZA', text: 'Exit door closed' },
				{ cpu: '1', type: 'E', byte: '26', bit: '1', status: '0', label: 'EOA', text: 'Exit door opened' },	
				{ cpu: '1', type: 'E', byte: '26', bit: '2', status: '0', label: 'FBA', text: 'Exit door safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '26', bit: '3', status: '0', label: 'APA', text: 'Exit door motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '26', bit: '4', status: '0', label: 'EBZA', text: 'Exit barrier closed' },	
				{ cpu: '1', type: 'E', byte: '26', bit: '5', status: '0', label: 'EBOA', text: 'Exit barrier opened' },	
				{ cpu: '1', type: 'E', byte: '26', bit: '6', status: '0', label: 'FBBA', text: 'Exit barrier safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '26', bit: '7', status: '0', label: 'APBA', text: 'Exit barrier motor circuit breaker' }]	
			},
			{
			label: 'EB27',
			bits: [
				{ cpu: '1', type: 'E', byte: '27', bit: '0', status: '0', label: 'FPA', text: 'Vehicle present in exit' },
				{ cpu: '1', type: 'E', byte: '27', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '27', bit: '2', status: '0', label: 'S1', text: 'Manual/Automatic' },	
				{ cpu: '1', type: 'E', byte: '27', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '27', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '27', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '27', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '27', bit: '7', status: '0', label: '', text: '' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB28',
			bits: [
				{ cpu: '1', type: 'E', byte: '28', bit: '0', status: '0', label: 'FTXV', text: 'Elevator safety photo-sensor front side' },
				{ cpu: '1', type: 'E', byte: '28', bit: '1', status: '0', label: 'FTXH', text: 'Elevator safety photo-sensor back side' },	
				{ cpu: '1', type: 'E', byte: '28', bit: '2', status: '0', label: 'FEMV', text: 'Silomat on elevator position photo-sensor front side' },	
				{ cpu: '1', type: 'E', byte: '28', bit: '3', status: '0', label: 'FEMH', text: 'Silomat on elevator position photo-sensor back side' },	
				{ cpu: '1', type: 'E', byte: '28', bit: '4', status: '0', label: 'FRX', text: 'Vehicle direction photo-sensor right side' },	
				{ cpu: '1', type: 'E', byte: '28', bit: '5', status: '0', label: 'FLX', text: 'Vehicle direction photo-sensor left side' },	
				{ cpu: '1', type: 'E', byte: '28', bit: '6', status: '0', label: 'TCR', text: 'Silomat cable-reel ON' },	
				{ cpu: '1', type: 'E', byte: '28', bit: '7', status: '0', label: 'MTC', text: 'Silomat motors circuit breaker' }]	
			},
			{
			label: 'EB29',
			bits: [
				{ cpu: '1', type: 'E', byte: '29', bit: '0', status: '0', label: 'FDR2', text: 'Vehicle right width check photo-sensor' },
				{ cpu: '1', type: 'E', byte: '29', bit: '1', status: '0', label: 'FDL2', text: 'Vehicle left width check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '29', bit: '2', status: '0', label: 'ASKP', text: 'Door motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '29', bit: '3', status: '0', label: 'TJ1', text: 'Inverter 1 ON' },	
				{ cpu: '1', type: 'E', byte: '29', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '29', bit: '5', status: '0', label: 'EXPV', text: 'Elevator door level position check photo sensor' },	
				{ cpu: '1', type: 'E', byte: '29', bit: '6', status: '0', label: 'EFB', text: 'Elevator level position check photo sensor' },	
				{ cpu: '1', type: 'E', byte: '29', bit: '7', status: '0', label: 'EXV', text: 'Elevator bottom level position check photo sensor' }]	
			},
			{
			label: 'EB30',
			bits: [
				{ cpu: '1', type: 'E', byte: '30', bit: '0', status: '0', label: 'RMV', text: 'Silomat front positioning proximity' },
				{ cpu: '1', type: 'E', byte: '30', bit: '1', status: '0', label: 'RMH', text: 'Silomat back positioning proximity' },	
				{ cpu: '1', type: 'E', byte: '30', bit: '2', status: '0', label: 'RES', text: 'Silomat lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '30', bit: '3', status: '0', label: 'REH', text: 'Silomat higher position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '30', bit: '4', status: '0', label: 'RCVH', text: 'Silomat centering device closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '30', bit: '5', status: '0', label: 'REAV', text: 'Silomat front centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '30', bit: '6', status: '0', label: 'REAH', text: 'Silomat back centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '30', bit: '7', status: '0', label: 'REP', text: 'Silomat centering device ready' }]	
			},
			{
			label: 'EB31',
			bits: [
				{ cpu: '1', type: 'E', byte: '31', bit: '0', status: '0', label: 'ECA', text: 'Flap higher position limitswitch' },
				{ cpu: '1', type: 'E', byte: '31', bit: '1', status: '0', label: 'ECB', text: 'Flap lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '31', bit: '2', status: '0', label: 'AMC', text: 'Flap motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '31', bit: '3', status: '0', label: 'EOM', text: 'Locking device open position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '31', bit: '4', status: '0', label: 'EZM', text: 'Locking device closed position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '31', bit: '5', status: '0', label: 'AMM', text: 'Locking device motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '31', bit: '6', status: '0', label: 'EPZV', text: 'Vehicle wheel front position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '31', bit: '7', status: '0', label: 'EPZH', text: 'Vehicle wheel back position limitswitch' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB32',
			bits: [
				{ cpu: '1', type: 'E', byte: '32', bit: '0', status: '0', label: 'EZE', text: 'Entry door closed limitswitch' },
				{ cpu: '1', type: 'E', byte: '32', bit: '1', status: '0', label: 'EOE', text: 'Entry door opened limitswitch' },	
				{ cpu: '1', type: 'E', byte: '32', bit: '2', status: '0', label: 'FBE', text: 'Entry door safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '32', bit: '3', status: '0', label: 'APE', text: 'Entry door motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '32', bit: '4', status: '0', label: 'EBZE', text: 'Entry barrier closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '32', bit: '5', status: '0', label: 'EBOE', text: 'Entry barrier opened limitswitch' },	
				{ cpu: '1', type: 'E', byte: '32', bit: '6', status: '0', label: 'FBBE', text: 'Entry barrier safety photo-sensor' },
				{ cpu: '1', type: 'E', byte: '32', bit: '7', status: '0', label: 'APBE', text: 'Entry barrier motor circuit breaker' }]	
			},
			{
			label: 'EB33',
			bits: [
				{ cpu: '1', type: 'E', byte: '33', bit: '0', status: '0', label: 'FTA3', text: 'Vehicle height 3 check photo-sensor' },
				{ cpu: '1', type: 'E', byte: '33', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '33', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '33', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '33', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '33', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '33', bit: '6', status: '0', label: 'FTSV', text: 'Front side transfer stall check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '33', bit: '7', status: '0', label: 'FTSH', text: 'Back side transfer stall check photo-sensor' }]	
			},
			{
			label: 'EB34',
			bits: [
				{ cpu: '1', type: 'E', byte: '34', bit: '0', status: '0', label: 'FPE', text: 'Vehicle present in entry' },
				{ cpu: '1', type: 'E', byte: '34', bit: '1', status: '0', label: 'FLP1', text: 'Vehicle max back length check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '34', bit: '2', status: '0', label: 'FLP2', text: 'Vehicle back length check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '34', bit: '3', status: '0', label: 'FDR1', text: 'Vehicle max right width check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '34', bit: '4', status: '0', label: 'FDL1', text: 'Vehicle max left width check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '34', bit: '5', status: '0', label: 'FLA1', text: 'Vehicle max front length check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '34', bit: '6', status: '0', label: 'FLA2', text: 'Vehicle front length check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '34', bit: '7', status: '0', label: 'FTA1', text: 'Vehicle max height check photo-sensor' }]	
			},
			{
			label: 'EB35',
			bits: [
				{ cpu: '1', type: 'E', byte: '35', bit: '0', status: '0', label: 'IV1', text: 'Invert 1 ON' },
				{ cpu: '1', type: 'E', byte: '35', bit: '1', status: '0', label: 'FDBK', text: 'Elevator hoisting feedback' },	
				{ cpu: '1', type: 'E', byte: '35', bit: '2', status: '0', label: 'ASBK', text: 'Elevator hoisting motor brake circut breaker' },	
				{ cpu: '1', type: 'E', byte: '35', bit: '3', status: '0', label: 'RTA', text: 'Elevator hoisting motor circut breaker' },	
				{ cpu: '1', type: 'E', byte: '35', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '35', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '35', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '35', bit: '7', status: '0', label: 'FTA2', text: 'Vehicle max height check photo-sensor' }]	
			}],
		},
		// Card 4
		{
		nr: '4',
		type: '6ES7322-1BL00-0AA00',
		bytes: [
			{
			label: 'AB12',
			bits: [
				{ cpu: '1', type: 'A', byte: '12', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '12', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			},
			{
			label: 'AB13',
			bits: [
				{ cpu: '1', type: 'A', byte: '13', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '13', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '2', status: '0', label: 'SPA', text: 'Exit door motor' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '3', status: '0', label: 'SBZA', text: 'Exit barrier open' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '4', status: '0', label: 'SBOA', text: 'Exit barrier close' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '6', status: '0', label: 'LA', text: 'Alarm ON lamp' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '7', status: '0', label: 'LC', text: 'System ready lamp' }]	
			},
			{
			label: 'AB14',
			bits: [
				{ cpu: '1', type: 'A', byte: '14', bit: '0', status: '0', label: 'SBK2', text: 'Elevator hoisting brake 2' },
				{ cpu: '1', type: 'A', byte: '14', bit: '1', status: '0', label: 'KBA', text: 'Elevator hoisting' },	
				{ cpu: '1', type: 'A', byte: '14', bit: '2', status: '0', label: 'SPE', text: 'Entry door motor' },	
				{ cpu: '1', type: 'A', byte: '14', bit: '3', status: '0', label: 'SBZE', text: 'Entry barrier close' },	
				{ cpu: '1', type: 'A', byte: '14', bit: '4', status: '0', label: 'SBOE', text: 'Entry barrier open' },	
				{ cpu: '1', type: 'A', byte: '14', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '14', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '14', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'AB15',
			bits: [
				{ cpu: '1', type: 'A', byte: '15', bit: '0', status: '0', label: 'SZE', text: 'Entry door close' },
				{ cpu: '1', type: 'A', byte: '15', bit: '1', status: '0', label: 'SOE', text: 'Entry door open' },	
				{ cpu: '1', type: 'A', byte: '15', bit: '2', status: '0', label: 'SZA', text: 'Exit door close' },	
				{ cpu: '1', type: 'A', byte: '15', bit: '3', status: '0', label: 'SOA', text: 'Exit door open' },	
				{ cpu: '1', type: 'A', byte: '15', bit: '4', status: '0', label: '', text: 'Description' },	
				{ cpu: '1', type: 'A', byte: '15', bit: '5', status: '0', label: 'RFE', text: 'Traffic light green lamp' },	
				{ cpu: '1', type: 'A', byte: '15', bit: '6', status: '0', label: 'RFA', text: 'Traffic light red lamp' },	
				{ cpu: '1', type: 'A', byte: '15', bit: '7', status: '0', label: '', text: '' }]	
			}],
		},
		// Card 5
		{
		nr: '5',
		type: '6ES7322-1BH01-0AA00',
		bytes: [
			{
			label: 'AB16',
			bits: [
				{ cpu: '1', type: 'A', byte: '16', bit: '0', status: '0', label: 'SQA', text: 'Elevator hoisting' },
				{ cpu: '1', type: 'A', byte: '16', bit: '1', status: '0', label: 'SBK1', text: 'Elevator hoisting brake 1' },	
				{ cpu: '1', type: 'A', byte: '16', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '16', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '16', bit: '4', status: '0', label: 'SCA', text: 'Flap up' },	
				{ cpu: '1', type: 'A', byte: '16', bit: '5', status: '0', label: 'SCB', text: 'Flap down' },	
				{ cpu: '1', type: 'A', byte: '16', bit: '6', status: '0', label: 'SMA', text: 'Locking pin close' },	
				{ cpu: '1', type: 'A', byte: '16', bit: '7', status: '0', label: 'SMB', text: 'Locking pin open' }]	
			},
			{
			label: 'AB17',
			bits: [
				{ cpu: '1', type: 'A', byte: '17', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '17', bit: '1', status: '0', label: 'T2', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '17', bit: '2', status: '0', label: 'TRA', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '17', bit: '3', status: '0', label: 'TRB', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '17', bit: '4', status: '0', label: 'KCS', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '17', bit: '5', status: '0', label: 'KCV', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '17', bit: '6', status: '0', label: 'KCH', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '17', bit: '7', status: '0', label: 'TCR', text: 'Silomat cable-reel' }]	
			}],
		}
		
		];
	return data;
}

/* IO SH1 */
function Rack_SH01() {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB36',
			bits: [
				{ cpu: '1', type: 'E', byte: '36', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '36', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '36', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '36', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '36', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '36', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '36', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '36', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB37',
			bits: [
				{ cpu: '1', type: 'E', byte: '37', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '37', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '37', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '37', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '37', bit: '4', status: '0', label: 'FEMV', text: 'Silomat on shuttle front position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '37', bit: '5', status: '0', label: 'FEMH', text: 'Silomat on shuttle back position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '37', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '37', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'EB38',
			bits: [
				{ cpu: '1', type: 'E', byte: '38', bit: '0', status: '0', label: 'RMV', text: 'Silomat front positioning proximity' },
				{ cpu: '1', type: 'E', byte: '38', bit: '1', status: '0', label: 'RMH', text: 'Silomat back positioning proximity' },	
				{ cpu: '1', type: 'E', byte: '38', bit: '2', status: '0', label: 'RES', text: 'Silomat lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '38', bit: '3', status: '0', label: 'REH', text: 'Silomat higher position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '38', bit: '4', status: '0', label: 'RCVH', text: 'Silomat centering device closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '38', bit: '5', status: '0', label: 'REAV', text: 'Silomat front centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '38', bit: '6', status: '0', label: 'REAH', text: 'Silomat back centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '38', bit: '7', status: '0', label: 'REP', text: 'Silomat centering device ready' }]	
			},
			{
			label: 'EB39',
			bits: [
				{ cpu: '1', type: 'E', byte: '39', bit: '0', status: '0', label: 'IV', text: 'Inverter enabled' },
				{ cpu: '1', type: 'E', byte: '39', bit: '1', status: '0', label: 'TJ1', text: 'Inverter ON' },	
				{ cpu: '1', type: 'E', byte: '39', bit: '2', status: '0', label: 'S1', text: 'Aut./Man. mode switch key' },	
				{ cpu: '1', type: 'E', byte: '39', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '39', bit: '4', status: '0', label: 'DB32', text: 'Data introduction enabled 1' },	
				{ cpu: '1', type: 'E', byte: '39', bit: '5', status: '0', label: 'DBHZ', text: 'Data introduction enabled 2' },	
				{ cpu: '1', type: 'E', byte: '39', bit: '6', status: '0', label: 'EHP', text: 'Transfer stall position check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '39', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7323-1BH01-0AA00',
		bytes: [
			{
			label: 'EB40',
			bits: [
				{ cpu: '1', type: 'E', byte: '40', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '40', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '40', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '40', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '40', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '40', bit: '5', status: '0', label: 'TCR', text: 'Cable-reel ON' },	
				{ cpu: '1', type: 'E', byte: '40', bit: '6', status: '0', label: 'AH', text: 'Shuttle travelling motors circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '40', bit: '7', status: '0', label: 'MTC', text: 'Silomat motors circuit breaker' }]	
			},
			{
			label: 'AB18',
			bits: [
				{ cpu: '1', type: 'A', byte: '18', bit: '0', status: '0', label: 'KBA', text: 'Shuttle travelling ON' },
				{ cpu: '1', type: 'A', byte: '18', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '18', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '18', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '18', bit: '4', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '18', bit: '5', status: '0', label: 'T10F', text: 'Shuttle travelling motor brake' },	
				{ cpu: '1', type: 'A', byte: '18', bit: '6', status: '0', label: 'LA', text: 'Alarm lamp' },	
				{ cpu: '1', type: 'A', byte: '18', bit: '7', status: '0', label: 'LC', text: 'System ready lamp' }]	
			}],
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7322-1BH01-0AA00',
		bytes: [
			{
			label: 'AB19',
			bits: [
				{ cpu: '1', type: 'A', byte: '19', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '19', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '19', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '19', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '19', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '19', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '19', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '19', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			},
			{
			label: 'AB20',
			bits: [
				{ cpu: '1', type: 'A', byte: '20', bit: '0', status: '0', label: 'T10', text: 'Shuttle travelling' },
				{ cpu: '1', type: 'A', byte: '20', bit: '1', status: '0', label: 'T2', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '20', bit: '2', status: '0', label: 'TRA', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '20', bit: '3', status: '0', label: 'TRB', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '20', bit: '4', status: '0', label: 'KCS', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '20', bit: '5', status: '0', label: 'KCV', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '20', bit: '6', status: '0', label: 'KCH', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '20', bit: '7', status: '0', label: 'TCR', text: 'Silomat cable-reel' }]	
			}],
		}
		
		];
	return data;
}
/* IO SH2 */
function Rack_SH02() {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB41',
			bits: [
				{ cpu: '1', type: 'E', byte: '41', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '41', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '41', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '41', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '41', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '41', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '41', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '41', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB42',
			bits: [
				{ cpu: '1', type: 'E', byte: '42', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '42', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '42', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '42', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '42', bit: '4', status: '0', label: 'FEMV', text: 'Silomat on shuttle front position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '42', bit: '5', status: '0', label: 'FEMH', text: 'Silomat on shuttle back position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '42', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '42', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'EB43',
			bits: [
				{ cpu: '1', type: 'E', byte: '43', bit: '0', status: '0', label: 'RMV', text: 'Silomat front positioning proximity' },
				{ cpu: '1', type: 'E', byte: '43', bit: '1', status: '0', label: 'RMH', text: 'Silomat back positioning proximity' },	
				{ cpu: '1', type: 'E', byte: '43', bit: '2', status: '0', label: 'RES', text: 'Silomat lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '43', bit: '3', status: '0', label: 'REH', text: 'Silomat higher position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '43', bit: '4', status: '0', label: 'RCVH', text: 'Silomat centering device closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '43', bit: '5', status: '0', label: 'REAV', text: 'Silomat front centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '43', bit: '6', status: '0', label: 'REAH', text: 'Silomat back centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '43', bit: '7', status: '0', label: 'REP', text: 'Silomat centering device ready' }]	
			},
			{
			label: 'EB44',
			bits: [
				{ cpu: '1', type: 'E', byte: '44', bit: '0', status: '0', label: 'IV', text: 'Inverter enabled' },
				{ cpu: '1', type: 'E', byte: '44', bit: '1', status: '0', label: 'TJ1', text: 'Inverter ON' },	
				{ cpu: '1', type: 'E', byte: '44', bit: '2', status: '0', label: 'S1', text: 'Aut./Man. mode switch key' },	
				{ cpu: '1', type: 'E', byte: '44', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '44', bit: '4', status: '0', label: 'DB32', text: 'Data introduction enabled 1' },	
				{ cpu: '1', type: 'E', byte: '44', bit: '5', status: '0', label: 'DBHZ', text: 'Data introduction enabled 2' },	
				{ cpu: '1', type: 'E', byte: '44', bit: '6', status: '0', label: 'EHP', text: 'Transfer stall position check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '44', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7323-1BH01-0AA00',
		bytes: [
			{
			label: 'EB45',
			bits: [
				{ cpu: '1', type: 'E', byte: '45', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '45', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '45', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '45', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '45', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '45', bit: '5', status: '0', label: 'TCR', text: 'Cable-reel ON' },	
				{ cpu: '1', type: 'E', byte: '45', bit: '6', status: '0', label: 'AH', text: 'Shuttle travelling motors circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '45', bit: '7', status: '0', label: 'MTC', text: 'Silomat motors circuit breaker' }]	
			},
			{
			label: 'AB21',
			bits: [
				{ cpu: '1', type: 'A', byte: '21', bit: '0', status: '0', label: 'KBA', text: 'Shuttle travelling ON' },
				{ cpu: '1', type: 'A', byte: '21', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '21', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '21', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '21', bit: '4', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '21', bit: '5', status: '0', label: 'T10F', text: 'Shuttle travelling motor brake' },	
				{ cpu: '1', type: 'A', byte: '21', bit: '6', status: '0', label: 'LA', text: 'Alarm lamp' },	
				{ cpu: '1', type: 'A', byte: '21', bit: '7', status: '0', label: 'LC', text: 'System ready lamp' }]	
			}],
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7322-1BH01-0AA00',
		bytes: [
			{
			label: 'AB22',
			bits: [
				{ cpu: '1', type: 'A', byte: '22', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '22', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '22', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '22', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '22', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '22', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '22', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '22', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			},
			{
			label: 'AB23',
			bits: [
				{ cpu: '1', type: 'A', byte: '23', bit: '0', status: '0', label: 'T10', text: 'Shuttle travelling' },
				{ cpu: '1', type: 'A', byte: '23', bit: '1', status: '0', label: 'T2', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '23', bit: '2', status: '0', label: 'TRA', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '23', bit: '3', status: '0', label: 'TRB', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '23', bit: '4', status: '0', label: 'KCS', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '23', bit: '5', status: '0', label: 'KCV', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '23', bit: '6', status: '0', label: 'KCH', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '23', bit: '7', status: '0', label: 'TCR', text: 'Silomat cable-reel' }]	
			}],
		}
		
		];
	return data;
}
/* IO SH3 */
function Rack_SH03() {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB46',
			bits: [
				{ cpu: '1', type: 'E', byte: '46', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '46', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '46', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '46', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '46', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '46', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '46', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '46', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB47',
			bits: [
				{ cpu: '1', type: 'E', byte: '47', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '47', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '47', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '47', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '47', bit: '4', status: '0', label: 'FEMV', text: 'Silomat on shuttle front position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '47', bit: '5', status: '0', label: 'FEMH', text: 'Silomat on shuttle back position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '47', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '47', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'EB48',
			bits: [
				{ cpu: '1', type: 'E', byte: '48', bit: '0', status: '0', label: 'RMV', text: 'Silomat front positioning proximity' },
				{ cpu: '1', type: 'E', byte: '48', bit: '1', status: '0', label: 'RMH', text: 'Silomat back positioning proximity' },	
				{ cpu: '1', type: 'E', byte: '48', bit: '2', status: '0', label: 'RES', text: 'Silomat lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '48', bit: '3', status: '0', label: 'REH', text: 'Silomat higher position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '48', bit: '4', status: '0', label: 'RCVH', text: 'Silomat centering device closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '48', bit: '5', status: '0', label: 'REAV', text: 'Silomat front centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '48', bit: '6', status: '0', label: 'REAH', text: 'Silomat back centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '48', bit: '7', status: '0', label: 'REP', text: 'Silomat centering device ready' }]	
			},
			{
			label: 'EB49',
			bits: [
				{ cpu: '1', type: 'E', byte: '49', bit: '0', status: '0', label: 'IV', text: 'Inverter enabled' },
				{ cpu: '1', type: 'E', byte: '49', bit: '1', status: '0', label: 'TJ1', text: 'Inverter ON' },	
				{ cpu: '1', type: 'E', byte: '49', bit: '2', status: '0', label: 'S1', text: 'Aut./Man. mode switch key' },	
				{ cpu: '1', type: 'E', byte: '49', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '49', bit: '4', status: '0', label: 'DB32', text: 'Data introduction enabled 1' },	
				{ cpu: '1', type: 'E', byte: '49', bit: '5', status: '0', label: 'DBHZ', text: 'Data introduction enabled 2' },	
				{ cpu: '1', type: 'E', byte: '49', bit: '6', status: '0', label: 'EHP', text: 'Transfer stall position check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '49', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7323-1BH01-0AA00',
		bytes: [
			{
			label: 'EB50',
			bits: [
				{ cpu: '1', type: 'E', byte: '50', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '50', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '50', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '50', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '50', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '50', bit: '5', status: '0', label: 'TCR', text: 'Cable-reel ON' },	
				{ cpu: '1', type: 'E', byte: '50', bit: '6', status: '0', label: 'AH', text: 'Shuttle travelling motors circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '50', bit: '7', status: '0', label: 'MTC', text: 'Silomat motors circuit breaker' }]	
			},
			{
			label: 'AB24',
			bits: [
				{ cpu: '1', type: 'A', byte: '24', bit: '0', status: '0', label: 'KBA', text: 'Shuttle travelling ON' },
				{ cpu: '1', type: 'A', byte: '24', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '24', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '24', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '24', bit: '4', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '24', bit: '5', status: '0', label: 'T10F', text: 'Shuttle travelling motor brake' },	
				{ cpu: '1', type: 'A', byte: '24', bit: '6', status: '0', label: 'LA', text: 'Alarm lamp' },	
				{ cpu: '1', type: 'A', byte: '24', bit: '7', status: '0', label: 'LC', text: 'System ready lamp' }]	
			}],
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7322-1BH01-0AA00',
		bytes: [
			{
			label: 'AB25',
			bits: [
				{ cpu: '1', type: 'A', byte: '25', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '25', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '25', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '25', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '25', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '25', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '25', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '25', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			},
			{
			label: 'AB26',
			bits: [
				{ cpu: '1', type: 'A', byte: '26', bit: '0', status: '0', label: 'T10', text: 'Shuttle travelling' },
				{ cpu: '1', type: 'A', byte: '26', bit: '1', status: '0', label: 'T2', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '26', bit: '2', status: '0', label: 'TRA', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '26', bit: '3', status: '0', label: 'TRB', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '26', bit: '4', status: '0', label: 'KCS', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '26', bit: '5', status: '0', label: 'KCV', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '26', bit: '6', status: '0', label: 'KCH', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '26', bit: '7', status: '0', label: 'TCR', text: 'Silomat cable-reel' }]	
			}],
		}
		
		];
	return data;
}
/* IO SH4 */
function Rack_SH04() {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB51',
			bits: [
				{ cpu: '1', type: 'E', byte: '51', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '51', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '51', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '51', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '51', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '51', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '51', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '51', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB52',
			bits: [
				{ cpu: '1', type: 'E', byte: '52', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '52', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '52', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '52', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '52', bit: '4', status: '0', label: 'FEMV', text: 'Silomat on shuttle front position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '52', bit: '5', status: '0', label: 'FEMH', text: 'Silomat on shuttle back position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '52', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '52', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'EB53',
			bits: [
				{ cpu: '1', type: 'E', byte: '53', bit: '0', status: '0', label: 'RMV', text: 'Silomat front positioning proximity' },
				{ cpu: '1', type: 'E', byte: '53', bit: '1', status: '0', label: 'RMH', text: 'Silomat back positioning proximity' },	
				{ cpu: '1', type: 'E', byte: '53', bit: '2', status: '0', label: 'RES', text: 'Silomat lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '53', bit: '3', status: '0', label: 'REH', text: 'Silomat higher position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '53', bit: '4', status: '0', label: 'RCVH', text: 'Silomat centering device closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '53', bit: '5', status: '0', label: 'REAV', text: 'Silomat front centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '53', bit: '6', status: '0', label: 'REAH', text: 'Silomat back centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '53', bit: '7', status: '0', label: 'REP', text: 'Silomat centering device ready' }]	
			},
			{
			label: 'EB54',
			bits: [
				{ cpu: '1', type: 'E', byte: '54', bit: '0', status: '0', label: 'IV', text: 'Inverter enabled' },
				{ cpu: '1', type: 'E', byte: '54', bit: '1', status: '0', label: 'TJ1', text: 'Inverter ON' },	
				{ cpu: '1', type: 'E', byte: '54', bit: '2', status: '0', label: 'S1', text: 'Aut./Man. mode switch key' },	
				{ cpu: '1', type: 'E', byte: '54', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '54', bit: '4', status: '0', label: 'DB32', text: 'Data introduction enabled 1' },	
				{ cpu: '1', type: 'E', byte: '54', bit: '5', status: '0', label: 'DBHZ', text: 'Data introduction enabled 2' },	
				{ cpu: '1', type: 'E', byte: '54', bit: '6', status: '0', label: 'EHP', text: 'Transfer stall position check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '54', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7323-1BH01-0AA00',
		bytes: [
			{
			label: 'EB55',
			bits: [
				{ cpu: '1', type: 'E', byte: '55', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '55', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '55', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '55', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '55', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '55', bit: '5', status: '0', label: 'TCR', text: 'Cable-reel ON' },	
				{ cpu: '1', type: 'E', byte: '55', bit: '6', status: '0', label: 'AH', text: 'Shuttle travelling motors circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '55', bit: '7', status: '0', label: 'MTC', text: 'Silomat motors circuit breaker' }]	
			},
			{
			label: 'AB27',
			bits: [
				{ cpu: '1', type: 'A', byte: '27', bit: '0', status: '0', label: 'KBA', text: 'Shuttle travelling ON' },
				{ cpu: '1', type: 'A', byte: '27', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '27', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '27', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '27', bit: '4', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '27', bit: '5', status: '0', label: 'T10F', text: 'Shuttle travelling motor brake' },	
				{ cpu: '1', type: 'A', byte: '27', bit: '6', status: '0', label: 'LA', text: 'Alarm lamp' },	
				{ cpu: '1', type: 'A', byte: '27', bit: '7', status: '0', label: 'LC', text: 'System ready lamp' }]	
			}],
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7322-1BH01-0AA00',
		bytes: [
			{
			label: 'AB28',
			bits: [
				{ cpu: '1', type: 'A', byte: '28', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '28', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '28', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '28', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '28', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '28', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '28', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '28', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			},
			{
			label: 'AB29',
			bits: [
				{ cpu: '1', type: 'A', byte: '29', bit: '0', status: '0', label: 'T10', text: 'Shuttle travelling' },
				{ cpu: '1', type: 'A', byte: '29', bit: '1', status: '0', label: 'T2', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '29', bit: '2', status: '0', label: 'TRA', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '29', bit: '3', status: '0', label: 'TRB', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '29', bit: '4', status: '0', label: 'KCS', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '29', bit: '5', status: '0', label: 'KCV', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '29', bit: '6', status: '0', label: 'KCH', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '29', bit: '7', status: '0', label: 'TCR', text: 'Silomat cable-reel' }]	
			}],
		}
		
		];
	return data;
}
/* IO SH5 */
function Rack_SH05() {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB56',
			bits: [
				{ cpu: '1', type: 'E', byte: '56', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '56', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '56', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '56', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '56', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '56', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '56', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '56', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB57',
			bits: [
				{ cpu: '1', type: 'E', byte: '57', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '57', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '57', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '57', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '57', bit: '4', status: '0', label: 'FEMV', text: 'Silomat on shuttle front position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '57', bit: '5', status: '0', label: 'FEMH', text: 'Silomat on shuttle back position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '57', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '57', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'EB58',
			bits: [
				{ cpu: '1', type: 'E', byte: '58', bit: '0', status: '0', label: 'RMV', text: 'Silomat front positioning proximity' },
				{ cpu: '1', type: 'E', byte: '58', bit: '1', status: '0', label: 'RMH', text: 'Silomat back positioning proximity' },	
				{ cpu: '1', type: 'E', byte: '58', bit: '2', status: '0', label: 'RES', text: 'Silomat lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '58', bit: '3', status: '0', label: 'REH', text: 'Silomat higher position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '58', bit: '4', status: '0', label: 'RCVH', text: 'Silomat centering device closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '58', bit: '5', status: '0', label: 'REAV', text: 'Silomat front centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '58', bit: '6', status: '0', label: 'REAH', text: 'Silomat back centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '58', bit: '7', status: '0', label: 'REP', text: 'Silomat centering device ready' }]	
			},
			{
			label: 'EB59',
			bits: [
				{ cpu: '1', type: 'E', byte: '59', bit: '0', status: '0', label: 'IV', text: 'Inverter enabled' },
				{ cpu: '1', type: 'E', byte: '59', bit: '1', status: '0', label: 'TJ1', text: 'Inverter ON' },	
				{ cpu: '1', type: 'E', byte: '59', bit: '2', status: '0', label: 'S1', text: 'Aut./Man. mode switch key' },	
				{ cpu: '1', type: 'E', byte: '59', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '59', bit: '4', status: '0', label: 'DB32', text: 'Data introduction enabled 1' },	
				{ cpu: '1', type: 'E', byte: '59', bit: '5', status: '0', label: 'DBHZ', text: 'Data introduction enabled 2' },	
				{ cpu: '1', type: 'E', byte: '59', bit: '6', status: '0', label: 'EHP', text: 'Transfer stall position check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '59', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7323-1BH01-0AA00',
		bytes: [
			{
			label: 'EB60',
			bits: [
				{ cpu: '1', type: 'E', byte: '60', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '60', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '60', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '60', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '60', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '60', bit: '5', status: '0', label: 'TCR', text: 'Cable-reel ON' },	
				{ cpu: '1', type: 'E', byte: '60', bit: '6', status: '0', label: 'AH', text: 'Shuttle travelling motors circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '60', bit: '7', status: '0', label: 'MTC', text: 'Silomat motors circuit breaker' }]	
			},
			{
			label: 'AB30',
			bits: [
				{ cpu: '1', type: 'A', byte: '30', bit: '0', status: '0', label: 'KBA', text: 'Shuttle travelling ON' },
				{ cpu: '1', type: 'A', byte: '30', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '30', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '30', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '30', bit: '4', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '30', bit: '5', status: '0', label: 'T10F', text: 'Shuttle travelling motor brake' },	
				{ cpu: '1', type: 'A', byte: '30', bit: '6', status: '0', label: 'LA', text: 'Alarm lamp' },	
				{ cpu: '1', type: 'A', byte: '30', bit: '7', status: '0', label: 'LC', text: 'System ready lamp' }]	
			}],
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7322-1BH01-0AA00',
		bytes: [
			{
			label: 'AB31',
			bits: [
				{ cpu: '1', type: 'A', byte: '31', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '31', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '31', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '31', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '31', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '31', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '31', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '31', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			},
			{
			label: 'AB32',
			bits: [
				{ cpu: '1', type: 'A', byte: '32', bit: '0', status: '0', label: 'T10', text: 'Shuttle travelling' },
				{ cpu: '1', type: 'A', byte: '32', bit: '1', status: '0', label: 'T2', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '32', bit: '2', status: '0', label: 'TRA', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '32', bit: '3', status: '0', label: 'TRB', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '32', bit: '4', status: '0', label: 'KCS', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '32', bit: '5', status: '0', label: 'KCV', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '32', bit: '6', status: '0', label: 'KCH', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '32', bit: '7', status: '0', label: 'TCR', text: 'Silomat cable-reel' }]	
			}],
		}
		
		];
	return data;
}
/* IO SH6 */
function Rack_SH06() {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB61',
			bits: [
				{ cpu: '1', type: 'E', byte: '61', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '61', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '61', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '61', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '61', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '61', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '61', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '61', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB62',
			bits: [
				{ cpu: '1', type: 'E', byte: '62', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '62', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '62', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '62', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '62', bit: '4', status: '0', label: 'FEMV', text: 'Silomat on shuttle front position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '62', bit: '5', status: '0', label: 'FEMH', text: 'Silomat on shuttle back position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '62', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '62', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'EB63',
			bits: [
				{ cpu: '1', type: 'E', byte: '63', bit: '0', status: '0', label: 'RMV', text: 'Silomat front positioning proximity' },
				{ cpu: '1', type: 'E', byte: '63', bit: '1', status: '0', label: 'RMH', text: 'Silomat back positioning proximity' },	
				{ cpu: '1', type: 'E', byte: '63', bit: '2', status: '0', label: 'RES', text: 'Silomat lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '63', bit: '3', status: '0', label: 'REH', text: 'Silomat higher position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '63', bit: '4', status: '0', label: 'RCVH', text: 'Silomat centering device closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '63', bit: '5', status: '0', label: 'REAV', text: 'Silomat front centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '63', bit: '6', status: '0', label: 'REAH', text: 'Silomat back centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '63', bit: '7', status: '0', label: 'REP', text: 'Silomat centering device ready' }]	
			},
			{
			label: 'EB64',
			bits: [
				{ cpu: '1', type: 'E', byte: '64', bit: '0', status: '0', label: 'IV', text: 'Inverter enabled' },
				{ cpu: '1', type: 'E', byte: '64', bit: '1', status: '0', label: 'TJ1', text: 'Inverter ON' },	
				{ cpu: '1', type: 'E', byte: '64', bit: '2', status: '0', label: 'S1', text: 'Aut./Man. mode switch key' },	
				{ cpu: '1', type: 'E', byte: '64', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '64', bit: '4', status: '0', label: 'DB32', text: 'Data introduction enabled 1' },	
				{ cpu: '1', type: 'E', byte: '64', bit: '5', status: '0', label: 'DBHZ', text: 'Data introduction enabled 2' },	
				{ cpu: '1', type: 'E', byte: '64', bit: '6', status: '0', label: 'EHP', text: 'Transfer stall position check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '64', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7323-1BH01-0AA00',
		bytes: [
			{
			label: 'EB65',
			bits: [
				{ cpu: '1', type: 'E', byte: '65', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '65', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '65', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '65', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '65', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '65', bit: '5', status: '0', label: 'TCR', text: 'Cable-reel ON' },	
				{ cpu: '1', type: 'E', byte: '65', bit: '6', status: '0', label: 'AH', text: 'Shuttle travelling motors circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '65', bit: '7', status: '0', label: 'MTC', text: 'Silomat motors circuit breaker' }]	
			},
			{
			label: 'AB33',
			bits: [
				{ cpu: '1', type: 'A', byte: '33', bit: '0', status: '0', label: 'KBA', text: 'Shuttle travelling ON' },
				{ cpu: '1', type: 'A', byte: '33', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '33', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '33', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '33', bit: '4', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '33', bit: '5', status: '0', label: 'T10F', text: 'Shuttle travelling motor brake' },	
				{ cpu: '1', type: 'A', byte: '33', bit: '6', status: '0', label: 'LA', text: 'Alarm lamp' },	
				{ cpu: '1', type: 'A', byte: '33', bit: '7', status: '0', label: 'LC', text: 'System ready lamp' }]	
			}],
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7322-1BH01-0AA00',
		bytes: [
			{
			label: 'AB34',
			bits: [
				{ cpu: '1', type: 'A', byte: '34', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '34', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '34', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '34', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '34', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '34', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '34', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '34', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			},
			{
			label: 'AB35',
			bits: [
				{ cpu: '1', type: 'A', byte: '35', bit: '0', status: '0', label: 'T10', text: 'Shuttle travelling' },
				{ cpu: '1', type: 'A', byte: '35', bit: '1', status: '0', label: 'T2', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '35', bit: '2', status: '0', label: 'TRA', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '35', bit: '3', status: '0', label: 'TRB', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '35', bit: '4', status: '0', label: 'KCS', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '35', bit: '5', status: '0', label: 'KCV', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '35', bit: '6', status: '0', label: 'KCH', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '35', bit: '7', status: '0', label: 'TCR', text: 'Silomat cable-reel' }]	
			}],
		}
		
		];
	return data;
}
/* IO SH7 */
function Rack_SH07() {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB66',
			bits: [
				{ cpu: '1', type: 'E', byte: '66', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '66', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '66', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '66', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '66', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '66', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '66', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '66', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB67',
			bits: [
				{ cpu: '1', type: 'E', byte: '67', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '67', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '67', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '67', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '67', bit: '4', status: '0', label: 'FEMV', text: 'Silomat on shuttle front position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '67', bit: '5', status: '0', label: 'FEMH', text: 'Silomat on shuttle back position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '67', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '67', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'EB68',
			bits: [
				{ cpu: '1', type: 'E', byte: '68', bit: '0', status: '0', label: 'RMV', text: 'Silomat front positioning proximity' },
				{ cpu: '1', type: 'E', byte: '68', bit: '1', status: '0', label: 'RMH', text: 'Silomat back positioning proximity' },	
				{ cpu: '1', type: 'E', byte: '68', bit: '2', status: '0', label: 'RES', text: 'Silomat lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '68', bit: '3', status: '0', label: 'REH', text: 'Silomat higher position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '68', bit: '4', status: '0', label: 'RCVH', text: 'Silomat centering device closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '68', bit: '5', status: '0', label: 'REAV', text: 'Silomat front centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '68', bit: '6', status: '0', label: 'REAH', text: 'Silomat back centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '68', bit: '7', status: '0', label: 'REP', text: 'Silomat centering device ready' }]	
			},
			{
			label: 'EB69',
			bits: [
				{ cpu: '1', type: 'E', byte: '69', bit: '0', status: '0', label: 'IV', text: 'Inverter enabled' },
				{ cpu: '1', type: 'E', byte: '69', bit: '1', status: '0', label: 'TJ1', text: 'Inverter ON' },	
				{ cpu: '1', type: 'E', byte: '69', bit: '2', status: '0', label: 'S1', text: 'Aut./Man. mode switch key' },	
				{ cpu: '1', type: 'E', byte: '69', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '69', bit: '4', status: '0', label: 'DB32', text: 'Data introduction enabled 1' },	
				{ cpu: '1', type: 'E', byte: '69', bit: '5', status: '0', label: 'DBHZ', text: 'Data introduction enabled 2' },	
				{ cpu: '1', type: 'E', byte: '69', bit: '6', status: '0', label: 'EHP', text: 'Transfer stall position check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '69', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7323-1BH01-0AA00',
		bytes: [
			{
			label: 'EB70',
			bits: [
				{ cpu: '1', type: 'E', byte: '70', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '70', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '70', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '70', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '70', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '70', bit: '5', status: '0', label: 'TCR', text: 'Cable-reel ON' },	
				{ cpu: '1', type: 'E', byte: '70', bit: '6', status: '0', label: 'AH', text: 'Shuttle travelling motors circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '70', bit: '7', status: '0', label: 'MTC', text: 'Silomat motors circuit breaker' }]	
			},
			{
			label: 'AB36',
			bits: [
				{ cpu: '1', type: 'A', byte: '36', bit: '0', status: '0', label: 'KBA', text: 'Shuttle travelling ON' },
				{ cpu: '1', type: 'A', byte: '36', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '36', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '36', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '36', bit: '4', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '36', bit: '5', status: '0', label: 'T10F', text: 'Shuttle travelling motor brake' },	
				{ cpu: '1', type: 'A', byte: '36', bit: '6', status: '0', label: 'LA', text: 'Alarm lamp' },	
				{ cpu: '1', type: 'A', byte: '36', bit: '7', status: '0', label: 'LC', text: 'System ready lamp' }]	
			}],
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7322-1BH01-0AA00',
		bytes: [
			{
			label: 'AB37',
			bits: [
				{ cpu: '1', type: 'A', byte: '37', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '37', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '37', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '37', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '37', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '37', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '37', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '37', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			},
			{
			label: 'AB38',
			bits: [
				{ cpu: '1', type: 'A', byte: '38', bit: '0', status: '0', label: 'T10', text: 'Shuttle travelling' },
				{ cpu: '1', type: 'A', byte: '38', bit: '1', status: '0', label: 'T2', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '38', bit: '2', status: '0', label: 'TRA', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '38', bit: '3', status: '0', label: 'TRB', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '38', bit: '4', status: '0', label: 'KCS', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '38', bit: '5', status: '0', label: 'KCV', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '38', bit: '6', status: '0', label: 'KCH', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '38', bit: '7', status: '0', label: 'TCR', text: 'Silomat cable-reel' }]	
			}],
		}
		
		];
	return data;
}
/* IO SH8 */
function Rack_SH08() {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB71',
			bits: [
				{ cpu: '1', type: 'E', byte: '71', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '71', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '71', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '71', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '71', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '71', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '71', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '71', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB72',
			bits: [
				{ cpu: '1', type: 'E', byte: '72', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '72', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '72', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '72', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '72', bit: '4', status: '0', label: 'FEMV', text: 'Silomat on shuttle front position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '72', bit: '5', status: '0', label: 'FEMH', text: 'Silomat on shuttle back position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '72', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '72', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'EB73',
			bits: [
				{ cpu: '1', type: 'E', byte: '73', bit: '0', status: '0', label: 'RMV', text: 'Silomat front positioning proximity' },
				{ cpu: '1', type: 'E', byte: '73', bit: '1', status: '0', label: 'RMH', text: 'Silomat back positioning proximity' },	
				{ cpu: '1', type: 'E', byte: '73', bit: '2', status: '0', label: 'RES', text: 'Silomat lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '73', bit: '3', status: '0', label: 'REH', text: 'Silomat higher position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '73', bit: '4', status: '0', label: 'RCVH', text: 'Silomat centering device closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '73', bit: '5', status: '0', label: 'REAV', text: 'Silomat front centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '73', bit: '6', status: '0', label: 'REAH', text: 'Silomat back centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '73', bit: '7', status: '0', label: 'REP', text: 'Silomat centering device ready' }]	
			},
			{
			label: 'EB74',
			bits: [
				{ cpu: '1', type: 'E', byte: '74', bit: '0', status: '0', label: 'IV', text: 'Inverter enabled' },
				{ cpu: '1', type: 'E', byte: '74', bit: '1', status: '0', label: 'TJ1', text: 'Inverter ON' },	
				{ cpu: '1', type: 'E', byte: '74', bit: '2', status: '0', label: 'S1', text: 'Aut./Man. mode switch key' },	
				{ cpu: '1', type: 'E', byte: '74', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '74', bit: '4', status: '0', label: 'DB32', text: 'Data introduction enabled 1' },	
				{ cpu: '1', type: 'E', byte: '74', bit: '5', status: '0', label: 'DBHZ', text: 'Data introduction enabled 2' },	
				{ cpu: '1', type: 'E', byte: '74', bit: '6', status: '0', label: 'EHP', text: 'Transfer stall position check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '74', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7323-1BH01-0AA00',
		bytes: [
			{
			label: 'EB75',
			bits: [
				{ cpu: '1', type: 'E', byte: '75', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '75', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '75', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '75', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '75', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '75', bit: '5', status: '0', label: 'TCR', text: 'Cable-reel ON' },	
				{ cpu: '1', type: 'E', byte: '75', bit: '6', status: '0', label: 'AH', text: 'Shuttle travelling motors circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '75', bit: '7', status: '0', label: 'MTC', text: 'Silomat motors circuit breaker' }]	
			},
			{
			label: 'AB39',
			bits: [
				{ cpu: '1', type: 'A', byte: '39', bit: '0', status: '0', label: 'KBA', text: 'Shuttle travelling ON' },
				{ cpu: '1', type: 'A', byte: '39', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '39', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '39', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '39', bit: '4', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '39', bit: '5', status: '0', label: 'T10F', text: 'Shuttle travelling motor brake' },	
				{ cpu: '1', type: 'A', byte: '39', bit: '6', status: '0', label: 'LA', text: 'Alarm lamp' },	
				{ cpu: '1', type: 'A', byte: '39', bit: '7', status: '0', label: 'LC', text: 'System ready lamp' }]	
			}],
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7322-1BH01-0AA00',
		bytes: [
			{
			label: 'AB40',
			bits: [
				{ cpu: '1', type: 'A', byte: '40', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '40', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '40', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '40', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '40', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '40', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '40', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '40', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			},
			{
			label: 'AB41',
			bits: [
				{ cpu: '1', type: 'A', byte: '41', bit: '0', status: '0', label: 'T10', text: 'Shuttle travelling' },
				{ cpu: '1', type: 'A', byte: '41', bit: '1', status: '0', label: 'T2', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '41', bit: '2', status: '0', label: 'TRA', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '41', bit: '3', status: '0', label: 'TRB', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '41', bit: '4', status: '0', label: 'KCS', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '41', bit: '5', status: '0', label: 'KCV', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '41', bit: '6', status: '0', label: 'KCH', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '41', bit: '7', status: '0', label: 'TCR', text: 'Silomat cable-reel' }]	
			}],
		}
		
		];
	return data;
}
/* IO SH9 */
function Rack_SH09() {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB76',
			bits: [
				{ cpu: '1', type: 'E', byte: '76', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '76', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '76', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '76', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '76', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '76', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '76', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '76', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB77',
			bits: [
				{ cpu: '1', type: 'E', byte: '77', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '77', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '77', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '77', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '77', bit: '4', status: '0', label: 'FEMV', text: 'Silomat on shuttle front position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '77', bit: '5', status: '0', label: 'FEMH', text: 'Silomat on shuttle back position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '77', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '77', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'EB78',
			bits: [
				{ cpu: '1', type: 'E', byte: '78', bit: '0', status: '0', label: 'RMV', text: 'Silomat front positioning proximity' },
				{ cpu: '1', type: 'E', byte: '78', bit: '1', status: '0', label: 'RMH', text: 'Silomat back positioning proximity' },	
				{ cpu: '1', type: 'E', byte: '78', bit: '2', status: '0', label: 'RES', text: 'Silomat lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '78', bit: '3', status: '0', label: 'REH', text: 'Silomat higher position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '78', bit: '4', status: '0', label: 'RCVH', text: 'Silomat centering device closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '78', bit: '5', status: '0', label: 'REAV', text: 'Silomat front centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '78', bit: '6', status: '0', label: 'REAH', text: 'Silomat back centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '78', bit: '7', status: '0', label: 'REP', text: 'Silomat centering device ready' }]	
			},
			{
			label: 'EB79',
			bits: [
				{ cpu: '1', type: 'E', byte: '79', bit: '0', status: '0', label: 'IV', text: 'Inverter enabled' },
				{ cpu: '1', type: 'E', byte: '79', bit: '1', status: '0', label: 'TJ1', text: 'Inverter ON' },	
				{ cpu: '1', type: 'E', byte: '79', bit: '2', status: '0', label: 'S1', text: 'Aut./Man. mode switch key' },	
				{ cpu: '1', type: 'E', byte: '79', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '79', bit: '4', status: '0', label: 'DB32', text: 'Data introduction enabled 1' },	
				{ cpu: '1', type: 'E', byte: '79', bit: '5', status: '0', label: 'DBHZ', text: 'Data introduction enabled 2' },	
				{ cpu: '1', type: 'E', byte: '79', bit: '6', status: '0', label: 'EHP', text: 'Transfer stall position check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '79', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7323-1BH01-0AA00',
		bytes: [
			{
			label: 'EB80',
			bits: [
				{ cpu: '1', type: 'E', byte: '80', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '80', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '80', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '80', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '80', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '80', bit: '5', status: '0', label: 'TCR', text: 'Cable-reel ON' },	
				{ cpu: '1', type: 'E', byte: '80', bit: '6', status: '0', label: 'AH', text: 'Shuttle travelling motors circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '80', bit: '7', status: '0', label: 'MTC', text: 'Silomat motors circuit breaker' }]	
			},
			{
			label: 'AB42',
			bits: [
				{ cpu: '1', type: 'A', byte: '42', bit: '0', status: '0', label: 'KBA', text: 'Shuttle travelling ON' },
				{ cpu: '1', type: 'A', byte: '42', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '42', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '42', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '42', bit: '4', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '42', bit: '5', status: '0', label: 'T10F', text: 'Shuttle travelling motor brake' },	
				{ cpu: '1', type: 'A', byte: '42', bit: '6', status: '0', label: 'LA', text: 'Alarm lamp' },	
				{ cpu: '1', type: 'A', byte: '42', bit: '7', status: '0', label: 'LC', text: 'System ready lamp' }]	
			}],
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7322-1BH01-0AA00',
		bytes: [
			{
			label: 'AB43',
			bits: [
				{ cpu: '1', type: 'A', byte: '43', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '43', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '43', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '43', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '43', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '43', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '43', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '43', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			},
			{
			label: 'AB44',
			bits: [
				{ cpu: '1', type: 'A', byte: '44', bit: '0', status: '0', label: 'T10', text: 'Shuttle travelling' },
				{ cpu: '1', type: 'A', byte: '44', bit: '1', status: '0', label: 'T2', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '44', bit: '2', status: '0', label: 'TRA', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '44', bit: '3', status: '0', label: 'TRB', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '44', bit: '4', status: '0', label: 'KCS', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '44', bit: '5', status: '0', label: 'KCV', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '44', bit: '6', status: '0', label: 'KCH', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '44', bit: '7', status: '0', label: 'TCR', text: 'Silomat cable-reel' }]	
			}],
		}
		
		];
	return data;
}
/* IO SH10 */
function Rack_SH10() {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB81',
			bits: [
				{ cpu: '1', type: 'E', byte: '81', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '81', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '81', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '81', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '81', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '81', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '81', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '81', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB82',
			bits: [
				{ cpu: '1', type: 'E', byte: '82', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '82', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '82', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '82', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '82', bit: '4', status: '0', label: 'FEMV', text: 'Silomat on shuttle front position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '82', bit: '5', status: '0', label: 'FEMH', text: 'Silomat on shuttle back position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '82', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '82', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'EB83',
			bits: [
				{ cpu: '1', type: 'E', byte: '83', bit: '0', status: '0', label: 'RMV', text: 'Silomat front positioning proximity' },
				{ cpu: '1', type: 'E', byte: '83', bit: '1', status: '0', label: 'RMH', text: 'Silomat back positioning proximity' },	
				{ cpu: '1', type: 'E', byte: '83', bit: '2', status: '0', label: 'RES', text: 'Silomat lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '83', bit: '3', status: '0', label: 'REH', text: 'Silomat higher position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '83', bit: '4', status: '0', label: 'RCVH', text: 'Silomat centering device closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '83', bit: '5', status: '0', label: 'REAV', text: 'Silomat front centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '83', bit: '6', status: '0', label: 'REAH', text: 'Silomat back centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '83', bit: '7', status: '0', label: 'REP', text: 'Silomat centering device ready' }]	
			},
			{
			label: 'EB84',
			bits: [
				{ cpu: '1', type: 'E', byte: '84', bit: '0', status: '0', label: 'IV', text: 'Inverter enabled' },
				{ cpu: '1', type: 'E', byte: '84', bit: '1', status: '0', label: 'TJ1', text: 'Inverter ON' },	
				{ cpu: '1', type: 'E', byte: '84', bit: '2', status: '0', label: 'S1', text: 'Aut./Man. mode switch key' },	
				{ cpu: '1', type: 'E', byte: '84', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '84', bit: '4', status: '0', label: 'DB32', text: 'Data introduction enabled 1' },	
				{ cpu: '1', type: 'E', byte: '84', bit: '5', status: '0', label: 'DBHZ', text: 'Data introduction enabled 2' },	
				{ cpu: '1', type: 'E', byte: '84', bit: '6', status: '0', label: 'EHP', text: 'Transfer stall position check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '84', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7323-1BH01-0AA00',
		bytes: [
			{
			label: 'EB85',
			bits: [
				{ cpu: '1', type: 'E', byte: '85', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '85', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '85', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '85', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '85', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '85', bit: '5', status: '0', label: 'TCR', text: 'Cable-reel ON' },	
				{ cpu: '1', type: 'E', byte: '85', bit: '6', status: '0', label: 'AH', text: 'Shuttle travelling motors circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '85', bit: '7', status: '0', label: 'MTC', text: 'Silomat motors circuit breaker' }]	
			},
			{
			label: 'AB45',
			bits: [
				{ cpu: '1', type: 'A', byte: '45', bit: '0', status: '0', label: 'KBA', text: 'Shuttle travelling ON' },
				{ cpu: '1', type: 'A', byte: '45', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '45', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '45', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '45', bit: '4', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '45', bit: '5', status: '0', label: 'T10F', text: 'Shuttle travelling motor brake' },	
				{ cpu: '1', type: 'A', byte: '45', bit: '6', status: '0', label: 'LA', text: 'Alarm lamp' },	
				{ cpu: '1', type: 'A', byte: '45', bit: '7', status: '0', label: 'LC', text: 'System ready lamp' }]	
			}],
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7322-1BH01-0AA00',
		bytes: [
			{
			label: 'AB46',
			bits: [
				{ cpu: '1', type: 'A', byte: '46', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '46', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '46', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '46', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '46', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '46', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '46', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '46', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			},
			{
			label: 'AB47',
			bits: [
				{ cpu: '1', type: 'A', byte: '47', bit: '0', status: '0', label: 'T10', text: 'Shuttle travelling' },
				{ cpu: '1', type: 'A', byte: '47', bit: '1', status: '0', label: 'T2', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '47', bit: '2', status: '0', label: 'TRA', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '47', bit: '3', status: '0', label: 'TRB', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '47', bit: '4', status: '0', label: 'KCS', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '47', bit: '5', status: '0', label: 'KCV', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '47', bit: '6', status: '0', label: 'KCH', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '47', bit: '7', status: '0', label: 'TCR', text: 'Silomat cable-reel' }]	
			}],
		}
		
		];
	return data;
}
/* IO SH11 */
function Rack_SH11() {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB86',
			bits: [
				{ cpu: '1', type: 'E', byte: '86', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '86', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '86', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '86', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '86', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '86', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '86', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '86', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB87',
			bits: [
				{ cpu: '1', type: 'E', byte: '87', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '87', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '87', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '87', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '87', bit: '4', status: '0', label: 'FEMV', text: 'Silomat on shuttle front position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '87', bit: '5', status: '0', label: 'FEMH', text: 'Silomat on shuttle back position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '87', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '87', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'EB88',
			bits: [
				{ cpu: '1', type: 'E', byte: '88', bit: '0', status: '0', label: 'RMV', text: 'Silomat front positioning proximity' },
				{ cpu: '1', type: 'E', byte: '88', bit: '1', status: '0', label: 'RMH', text: 'Silomat back positioning proximity' },	
				{ cpu: '1', type: 'E', byte: '88', bit: '2', status: '0', label: 'RES', text: 'Silomat lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '88', bit: '3', status: '0', label: 'REH', text: 'Silomat higher position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '88', bit: '4', status: '0', label: 'RCVH', text: 'Silomat centering device closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '88', bit: '5', status: '0', label: 'REAV', text: 'Silomat front centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '88', bit: '6', status: '0', label: 'REAH', text: 'Silomat back centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '88', bit: '7', status: '0', label: 'REP', text: 'Silomat centering device ready' }]	
			},
			{
			label: 'EB89',
			bits: [
				{ cpu: '1', type: 'E', byte: '89', bit: '0', status: '0', label: 'IV', text: 'Inverter enabled' },
				{ cpu: '1', type: 'E', byte: '89', bit: '1', status: '0', label: 'TJ1', text: 'Inverter ON' },	
				{ cpu: '1', type: 'E', byte: '89', bit: '2', status: '0', label: 'S1', text: 'Aut./Man. mode switch key' },	
				{ cpu: '1', type: 'E', byte: '89', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '89', bit: '4', status: '0', label: 'DB32', text: 'Data introduction enabled 1' },	
				{ cpu: '1', type: 'E', byte: '89', bit: '5', status: '0', label: 'DBHZ', text: 'Data introduction enabled 2' },	
				{ cpu: '1', type: 'E', byte: '89', bit: '6', status: '0', label: 'EHP', text: 'Transfer stall position check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '89', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7323-1BH01-0AA00',
		bytes: [
			{
			label: 'EB90',
			bits: [
				{ cpu: '1', type: 'E', byte: '90', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '90', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '90', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '90', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '90', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '90', bit: '5', status: '0', label: 'TCR', text: 'Cable-reel ON' },	
				{ cpu: '1', type: 'E', byte: '90', bit: '6', status: '0', label: 'AH', text: 'Shuttle travelling motors circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '90', bit: '7', status: '0', label: 'MTC', text: 'Silomat motors circuit breaker' }]	
			},
			{
			label: 'AB48',
			bits: [
				{ cpu: '1', type: 'A', byte: '48', bit: '0', status: '0', label: 'KBA', text: 'Shuttle travelling ON' },
				{ cpu: '1', type: 'A', byte: '48', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '48', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '48', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '48', bit: '4', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '48', bit: '5', status: '0', label: 'T10F', text: 'Shuttle travelling motor brake' },	
				{ cpu: '1', type: 'A', byte: '48', bit: '6', status: '0', label: 'LA', text: 'Alarm lamp' },	
				{ cpu: '1', type: 'A', byte: '48', bit: '7', status: '0', label: 'LC', text: 'System ready lamp' }]	
			}],
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7322-1BH01-0AA00',
		bytes: [
			{
			label: 'AB49',
			bits: [
				{ cpu: '1', type: 'A', byte: '49', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '49', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '49', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '49', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '49', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '49', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '49', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '49', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			},
			{
			label: 'AB50',
			bits: [
				{ cpu: '1', type: 'A', byte: '50', bit: '0', status: '0', label: 'T10', text: 'Shuttle travelling' },
				{ cpu: '1', type: 'A', byte: '50', bit: '1', status: '0', label: 'T2', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '50', bit: '2', status: '0', label: 'TRA', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '50', bit: '3', status: '0', label: 'TRB', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '50', bit: '4', status: '0', label: 'KCS', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '50', bit: '5', status: '0', label: 'KCV', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '50', bit: '6', status: '0', label: 'KCH', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '50', bit: '7', status: '0', label: 'TCR', text: 'Silomat cable-reel' }]	
			}],
		}
		
		];
	return data;
}
/* IO SH12 */
function Rack_SH12() {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB91',
			bits: [
				{ cpu: '1', type: 'E', byte: '91', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '91', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '91', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '91', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '91', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '91', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '91', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '91', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB92',
			bits: [
				{ cpu: '1', type: 'E', byte: '92', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '92', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '92', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '92', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '92', bit: '4', status: '0', label: 'FEMV', text: 'Silomat on shuttle front position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '92', bit: '5', status: '0', label: 'FEMH', text: 'Silomat on shuttle back position photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '92', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '92', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'EB93',
			bits: [
				{ cpu: '1', type: 'E', byte: '93', bit: '0', status: '0', label: 'RMV', text: 'Silomat front positioning proximity' },
				{ cpu: '1', type: 'E', byte: '93', bit: '1', status: '0', label: 'RMH', text: 'Silomat back positioning proximity' },	
				{ cpu: '1', type: 'E', byte: '93', bit: '2', status: '0', label: 'RES', text: 'Silomat lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '93', bit: '3', status: '0', label: 'REH', text: 'Silomat higher position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '93', bit: '4', status: '0', label: 'RCVH', text: 'Silomat centering device closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '93', bit: '5', status: '0', label: 'REAV', text: 'Silomat front centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '93', bit: '6', status: '0', label: 'REAH', text: 'Silomat back centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '93', bit: '7', status: '0', label: 'REP', text: 'Silomat centering device ready' }]	
			},
			{
			label: 'EB94',
			bits: [
				{ cpu: '1', type: 'E', byte: '94', bit: '0', status: '0', label: 'IV', text: 'Inverter enabled' },
				{ cpu: '1', type: 'E', byte: '94', bit: '1', status: '0', label: 'TJ1', text: 'Inverter ON' },	
				{ cpu: '1', type: 'E', byte: '94', bit: '2', status: '0', label: 'S1', text: 'Aut./Man. mode switch key' },	
				{ cpu: '1', type: 'E', byte: '94', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '94', bit: '4', status: '0', label: 'DB32', text: 'Data introduction enabled 1' },	
				{ cpu: '1', type: 'E', byte: '94', bit: '5', status: '0', label: 'DBHZ', text: 'Data introduction enabled 2' },	
				{ cpu: '1', type: 'E', byte: '94', bit: '6', status: '0', label: 'EHP', text: 'Transfer stall position check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '94', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7323-1BH01-0AA00',
		bytes: [
			{
			label: 'EB95',
			bits: [
				{ cpu: '1', type: 'E', byte: '95', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '95', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '95', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '95', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '95', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '95', bit: '5', status: '0', label: 'TCR', text: 'Cable-reel ON' },	
				{ cpu: '1', type: 'E', byte: '95', bit: '6', status: '0', label: 'AH', text: 'Shuttle travelling motors circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '95', bit: '7', status: '0', label: 'MTC', text: 'Silomat motors circuit breaker' }]	
			},
			{
			label: 'AB51',
			bits: [
				{ cpu: '1', type: 'A', byte: '51', bit: '0', status: '0', label: 'KBA', text: 'Shuttle travelling ON' },
				{ cpu: '1', type: 'A', byte: '51', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '51', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '51', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '51', bit: '4', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'A', byte: '51', bit: '5', status: '0', label: 'T10F', text: 'Shuttle travelling motor brake' },	
				{ cpu: '1', type: 'A', byte: '51', bit: '6', status: '0', label: 'LA', text: 'Alarm lamp' },	
				{ cpu: '1', type: 'A', byte: '51', bit: '7', status: '0', label: 'LC', text: 'System ready lamp' }]	
			}],
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7322-1BH01-0AA00',
		bytes: [
			{
			label: 'AB52',
			bits: [
				{ cpu: '1', type: 'A', byte: '52', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '52', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '52', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '52', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '52', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '52', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '52', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '52', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			},
			{
			label: 'AB53',
			bits: [
				{ cpu: '1', type: 'A', byte: '53', bit: '0', status: '0', label: 'T10', text: 'Shuttle travelling' },
				{ cpu: '1', type: 'A', byte: '53', bit: '1', status: '0', label: 'T2', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '53', bit: '2', status: '0', label: 'TRA', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '53', bit: '3', status: '0', label: 'TRB', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '53', bit: '4', status: '0', label: 'KCS', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '53', bit: '5', status: '0', label: 'KCV', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '53', bit: '6', status: '0', label: 'KCH', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '53', bit: '7', status: '0', label: 'TCR', text: 'Silomat cable-reel' }]	
			}],
		}
		
		];
	return data;
}