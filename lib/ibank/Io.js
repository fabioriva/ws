/*
 * I/O entity
 */
var utility = require('./Tools');

exports.Rack_T1 = Rack_T1();
exports.Rack_T2 = Rack_T2();
exports.Rack_M1 = Rack_M1();
exports.Rack_M2 = Rack_M2();

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

/* IO Tower 1 */
function Rack_T1 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB20',
			bits: [
				{ cpu: '1', type: 'E', byte: '20', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '20', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '20', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '20', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '20', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '20', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '20', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '20', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB21',
			bits: [
				{ cpu: '1', type: 'E', byte: '21', bit: '0', status: '0', label: 'FTV', text: 'Stall V1 check photo-sensor' },
				{ cpu: '1', type: 'E', byte: '21', bit: '1', status: '0', label: 'FTH', text: 'Stall H1 check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '21', bit: '2', status: '0', label: 'EOM', text: 'Locking pin opened limitswitch' },	
				{ cpu: '1', type: 'E', byte: '21', bit: '3', status: '0', label: 'EZM', text: 'Locking pin closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '21', bit: '4', status: '0', label: 'FEMV', text: 'Silomat on center position photo-sensor front side' },	
				{ cpu: '1', type: 'E', byte: '21', bit: '5', status: '0', label: 'FEMH', text: 'Silomat on center position photo-sensor back side' },	
				{ cpu: '1', type: 'E', byte: '21', bit: '6', status: '0', label: 'FTXV', text: 'Tower safety photo-sensor front side' },	
				{ cpu: '1', type: 'E', byte: '21', bit: '7', status: '0', label: 'FTXH', text: 'Tower safety photo-sensor back side' }]	
			},
			{
			label: 'EB22',
			bits: [
				{ cpu: '1', type: 'E', byte: '22', bit: '0', status: '0', label: 'RMV', text: 'Silomat front positioning proximity' },
				{ cpu: '1', type: 'E', byte: '22', bit: '1', status: '0', label: 'RMH', text: 'Silomat back positioning proximity' },	
				{ cpu: '1', type: 'E', byte: '22', bit: '2', status: '0', label: 'RES', text: 'Silomat lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '22', bit: '3', status: '0', label: 'REH', text: 'Silomat higher position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '22', bit: '4', status: '0', label: 'RCVH', text: 'Silomat centering device closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '22', bit: '5', status: '0', label: 'REAV', text: 'Silomat front centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '22', bit: '6', status: '0', label: 'REAH', text: 'Silomat back centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '22', bit: '7', status: '0', label: 'REP', text: 'Silomat centering device ready' }]	
			},
			{
			label: 'EB23',
			bits: [
				{ cpu: '1', type: 'E', byte: '23', bit: '0', status: '0', label: 'IV1', text: 'Inverter 1 enabled' },
				{ cpu: '1', type: 'E', byte: '23', bit: '1', status: '0', label: 'IV2', text: 'Inverter 2 enabled' },	
				{ cpu: '1', type: 'E', byte: '23', bit: '2', status: '0', label: 'S1', text: 'Manual/Automatic' },	
				{ cpu: '1', type: 'E', byte: '23', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '23', bit: '4', status: '0', label: 'DB32', text: 'Data enable 1' },	
				{ cpu: '1', type: 'E', byte: '23', bit: '5', status: '0', label: 'DBHZ', text: 'Data enable 2' },	
				{ cpu: '1', type: 'E', byte: '23', bit: '6', status: '0', label: 'FTH2', text: 'Stall H2 check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '23', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7323-1BH01-0AA00',
		bytes: [
			{
			label: 'EB24',
			bits: [
				{ cpu: '1', type: 'E', byte: '24', bit: '0', status: '0', label: 'EFR', text: 'Maximum right position check' },
				{ cpu: '1', type: 'E', byte: '24', bit: '1', status: '0', label: 'EFL', text: 'Maximum left position check' },	
				{ cpu: '1', type: 'E', byte: '24', bit: '2', status: '0', label: 'EHP', text: 'Door horizontal position check' },	
				{ cpu: '1', type: 'E', byte: '24', bit: '3', status: '0', label: 'EXPV', text: 'Door vertical position check' },	
				{ cpu: '1', type: 'E', byte: '24', bit: '4', status: '0', label: 'ASBK2', text: 'travelling motor brake circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '24', bit: '5', status: '0', label: 'TCR', text: 'Silomat cable-reel ON' },	
				{ cpu: '1', type: 'E', byte: '24', bit: '6', status: '0', label: 'AH', text: 'Tower travelling motors circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '24', bit: '7', status: '0', label: 'MTC', text: 'Silomat motors circuit breaker' }]	
			},
			{
			label: 'EB25',
			bits: [
				{ cpu: '1', type: 'E', byte: '25', bit: '0', status: '0', label: 'EFA', text: 'Maximum top position check' },
				{ cpu: '1', type: 'E', byte: '25', bit: '1', status: '0', label: 'EFB', text: 'Maximum bottom position check' },	
				{ cpu: '1', type: 'E', byte: '25', bit: '2', status: '0', label: 'EXV', text: 'Level position check' },	
				{ cpu: '1', type: 'E', byte: '25', bit: '3', status: '0', label: 'FDBK', text: 'Hoisting feedback' },	
				{ cpu: '1', type: 'E', byte: '25', bit: '4', status: '0', label: 'ASBK', text: 'Hoisting motor brake circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '25', bit: '5', status: '0', label: 'RTA', text: 'Hoisting motors circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '25', bit: '6', status: '0', label: 'TJ2', text: 'Inverter 2 line contactor' },	
				{ cpu: '1', type: 'E', byte: '25', bit: '7', status: '0', label: 'AMM', text: 'Locking pin motor circuit breaker' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7322-1BL00-0AA00',
		bytes: [
			{
			label: 'AB20',
			bits: [
				{ cpu: '1', type: 'A', byte: '20', bit: '0', status: '0', label: 'KBA1', text: 'Hoisting motors' },
				{ cpu: '1', type: 'A', byte: '20', bit: '1', status: '0', label: 'SBK1', text: 'Hoisting motors brake' },	
				{ cpu: '1', type: 'A', byte: '20', bit: '2', status: '0', label: 'SMA', text: 'Locking pin motor close' },	
				{ cpu: '1', type: 'A', byte: '20', bit: '3', status: '0', label: 'SMB', text: 'Locking pin motor open' },	
				{ cpu: '1', type: 'A', byte: '20', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '20', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '20', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '20', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'AB21',
			bits: [
				{ cpu: '1', type: 'A', byte: '21', bit: '0', status: '0', label: 'KBA2', text: 'Travelling motors' },
				{ cpu: '1', type: 'A', byte: '21', bit: '1', status: '0', label: 'SBK2', text: 'Hoisting motors brake' },	
				{ cpu: '1', type: 'A', byte: '21', bit: '2', status: '0', label: 'T10F', text: 'Travelling motors brake' },	
				{ cpu: '1', type: 'A', byte: '21', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '21', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '21', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '21', bit: '6', status: '0', label: 'LA', text: 'Alarm ON lamp' },	
				{ cpu: '1', type: 'A', byte: '21', bit: '7', status: '0', label: 'LC', text: 'System ready lamp' }]	
			},
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
				{ cpu: '1', type: 'A', byte: '23', bit: '0', status: '0', label: 'T10', text: 'Tower travelling' },
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

/* IO Tower 2 */
function Rack_T2 () {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB26',
			bits: [
				{ cpu: '1', type: 'E', byte: '26', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '26', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '26', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '26', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '26', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '26', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '26', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '26', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB27',
			bits: [
				{ cpu: '1', type: 'E', byte: '27', bit: '0', status: '0', label: 'FTV', text: 'Stall V1 check photo-sensor' },
				{ cpu: '1', type: 'E', byte: '27', bit: '1', status: '0', label: 'FTH', text: 'Stall H1 check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '27', bit: '2', status: '0', label: 'EOM', text: 'Locking pin opened limitswitch' },	
				{ cpu: '1', type: 'E', byte: '27', bit: '3', status: '0', label: 'EZM', text: 'Locking pin closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '27', bit: '4', status: '0', label: 'FEMV', text: 'Silomat on center position photo-sensor front side' },	
				{ cpu: '1', type: 'E', byte: '27', bit: '5', status: '0', label: 'FEMH', text: 'Silomat on center position photo-sensor back side' },	
				{ cpu: '1', type: 'E', byte: '27', bit: '6', status: '0', label: 'FTXV', text: 'Tower safety photo-sensor front side' },	
				{ cpu: '1', type: 'E', byte: '27', bit: '7', status: '0', label: 'FTXH', text: 'Tower safety photo-sensor back side' }]	
			},
			{
			label: 'EB28',
			bits: [
				{ cpu: '1', type: 'E', byte: '28', bit: '0', status: '0', label: 'RMV', text: 'Silomat front positioning proximity' },
				{ cpu: '1', type: 'E', byte: '28', bit: '1', status: '0', label: 'RMH', text: 'Silomat back positioning proximity' },	
				{ cpu: '1', type: 'E', byte: '28', bit: '2', status: '0', label: 'RES', text: 'Silomat lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '28', bit: '3', status: '0', label: 'REH', text: 'Silomat higher position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '28', bit: '4', status: '0', label: 'RCVH', text: 'Silomat centering device closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '28', bit: '5', status: '0', label: 'REAV', text: 'Silomat front centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '28', bit: '6', status: '0', label: 'REAH', text: 'Silomat back centering limitswitch' },	
				{ cpu: '1', type: 'E', byte: '28', bit: '7', status: '0', label: 'REP', text: 'Silomat centering device ready' }]	
			},
			{
			label: 'EB29',
			bits: [
				{ cpu: '1', type: 'E', byte: '29', bit: '0', status: '0', label: 'IV1', text: 'Inverter 1 enabled' },
				{ cpu: '1', type: 'E', byte: '29', bit: '1', status: '0', label: 'IV2', text: 'Inverter 2 enabled' },	
				{ cpu: '1', type: 'E', byte: '29', bit: '2', status: '0', label: 'S1', text: 'Manual/Automatic' },	
				{ cpu: '1', type: 'E', byte: '29', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '29', bit: '4', status: '0', label: 'DB32', text: 'Data enable 1' },	
				{ cpu: '1', type: 'E', byte: '29', bit: '5', status: '0', label: 'DBHZ', text: 'Data enable 2' },	
				{ cpu: '1', type: 'E', byte: '29', bit: '6', status: '0', label: 'FTH2', text: 'Stall H2 check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '29', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7323-1BH01-0AA00',
		bytes: [
			{
			label: 'EB30',
			bits: [
				{ cpu: '1', type: 'E', byte: '30', bit: '0', status: '0', label: 'EFR', text: 'Maximum right position check' },
				{ cpu: '1', type: 'E', byte: '30', bit: '1', status: '0', label: 'EFL', text: 'Maximum left position check' },	
				{ cpu: '1', type: 'E', byte: '30', bit: '2', status: '0', label: 'EHP', text: 'Door horizontal position check' },	
				{ cpu: '1', type: 'E', byte: '30', bit: '3', status: '0', label: 'EXPV', text: 'Door vertical position check' },	
				{ cpu: '1', type: 'E', byte: '30', bit: '4', status: '0', label: 'ASBK2', text: 'travelling motor brake circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '30', bit: '5', status: '0', label: 'TCR', text: 'Silomat cable-reel ON' },	
				{ cpu: '1', type: 'E', byte: '30', bit: '6', status: '0', label: 'AH', text: 'Tower travelling motors circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '30', bit: '7', status: '0', label: 'MTC', text: 'Silomat motors circuit breaker' }]	
			},
			{
			label: 'EB31',
			bits: [
				{ cpu: '1', type: 'E', byte: '31', bit: '0', status: '0', label: 'EFA', text: 'Maximum top position check' },
				{ cpu: '1', type: 'E', byte: '31', bit: '1', status: '0', label: 'EFB', text: 'Maximum bottom position check' },	
				{ cpu: '1', type: 'E', byte: '31', bit: '2', status: '0', label: 'EXV', text: 'Level position check' },	
				{ cpu: '1', type: 'E', byte: '31', bit: '3', status: '0', label: 'FDBK', text: 'Hoisting feedback' },	
				{ cpu: '1', type: 'E', byte: '31', bit: '4', status: '0', label: 'ASBK', text: 'Hoisting motor brake circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '31', bit: '5', status: '0', label: 'RTA', text: 'Hoisting motors circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '31', bit: '6', status: '0', label: 'TJ2', text: 'Inverter 2 line contactor' },	
				{ cpu: '1', type: 'E', byte: '31', bit: '7', status: '0', label: 'AMM', text: 'Locking pin motor circuit breaker' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7322-1BL00-0AA00',
		bytes: [
			{
			label: 'AB26',
			bits: [
				{ cpu: '1', type: 'A', byte: '26', bit: '0', status: '0', label: 'KBA1', text: 'Hoisting motors' },
				{ cpu: '1', type: 'A', byte: '26', bit: '1', status: '0', label: 'SBK1', text: 'Hoisting motors brake' },	
				{ cpu: '1', type: 'A', byte: '26', bit: '2', status: '0', label: 'SMA', text: 'Locking pin motor close' },	
				{ cpu: '1', type: 'A', byte: '26', bit: '3', status: '0', label: 'SMB', text: 'Locking pin motor open' },	
				{ cpu: '1', type: 'A', byte: '26', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '26', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '26', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '26', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'AB27',
			bits: [
				{ cpu: '1', type: 'A', byte: '27', bit: '0', status: '0', label: 'KBA2', text: 'Travelling motors' },
				{ cpu: '1', type: 'A', byte: '27', bit: '1', status: '0', label: 'SBK2', text: 'Hoisting motors brake' },	
				{ cpu: '1', type: 'A', byte: '27', bit: '2', status: '0', label: 'T10F', text: 'Travelling motors brake' },	
				{ cpu: '1', type: 'A', byte: '27', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '27', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '27', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '27', bit: '6', status: '0', label: 'LA', text: 'Alarm ON lamp' },	
				{ cpu: '1', type: 'A', byte: '27', bit: '7', status: '0', label: 'LC', text: 'System ready lamp' }]	
			},
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
				{ cpu: '1', type: 'A', byte: '29', bit: '0', status: '0', label: 'T10', text: 'Tower travelling' },
				{ cpu: '1', type: 'A', byte: '29', bit: '1', status: '0', label: 'T2', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '29', bit: '2', status: '0', label: 'TRA', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '29', bit: '3', status: '0', label: 'TRB', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '29', bit: '4', status: '0', label: 'KCS', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '29', bit: '5', status: '0', label: 'KCV', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '29', bit: '6', status: '0', label: 'KCH', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '29', bit: '7', status: '0', label: 'TCR', text: 'Silomat cable-reel' }]	
			}]
		}
		
		];
	return data;
}

/* IO Main 1 */
function Rack_M1() {

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
				{ cpu: '1', type: 'E', byte: '0', bit: '0', status: '0', label: 'A', text: 'Hex keyboard (Card Reader)' },
				{ cpu: '1', type: 'E', byte: '0', bit: '1', status: '0', label: 'B', text: 'Hex keyboard (Card Reader)' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '2', status: '0', label: 'C', text: 'Hex keyboard (Card Reader)' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '3', status: '0', label: 'D', text: 'Hex keyboard (Card Reader)' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '4', status: '0', label: 'STR', text: 'Card Reader' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '5', status: '0', label: 'OK', text: 'Hex keyboard (Card Reader)' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '6', status: '0', label: 'DAT', text: 'Card Reader' },	
				{ cpu: '1', type: 'E', byte: '0', bit: '7', status: '0', label: 'FLP2', text: 'Vehicle back length check photo-sensor' }]	
			},
			{
			label: 'EB1',
			bits: [
				{ cpu: '1', type: 'E', byte: '1', bit: '0', status: '0', label: 'A', text: 'Hex keyboard (Card Reader)' },
				{ cpu: '1', type: 'E', byte: '1', bit: '1', status: '0', label: 'B', text: 'Hex keyboard (Card Reader)' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '2', status: '0', label: 'C', text: 'Hex keyboard (Card Reader)' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '3', status: '0', label: 'D', text: 'Hex keyboard (Card Reader)' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '4', status: '0', label: 'STR', text: 'Card Reader' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '5', status: '0', label: 'OK', text: 'Hex keyboard (Card Reader)' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '6', status: '0', label: 'DAT', text: 'Card Reader' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '7', status: '0', label: 'FLP2', text: 'Vehicle back length check photo-sensor' }]	
			},
			{
			label: 'EB2',
			bits: [
				{ cpu: '1', type: 'E', byte: '2', bit: '0', status: '0', label: 'A', text: 'Hex keyboard (Card Reader)' },
				{ cpu: '1', type: 'E', byte: '2', bit: '1', status: '0', label: 'B', text: 'Hex keyboard (Card Reader)' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '2', status: '0', label: 'C', text: 'Hex keyboard (Card Reader)' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '3', status: '0', label: 'D', text: 'Hex keyboard (Card Reader)' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '4', status: '0', label: 'STR', text: 'Card Reader' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '5', status: '0', label: 'OK', text: 'Hex keyboard (Card Reader)' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '6', status: '0', label: 'DAT', text: 'Card Reader' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '7', status: '0', label: 'FLP2', text: 'Vehicle back length check photo-sensor' }]	
			},
			{
			label: 'EB3',
			bits: [
				{ cpu: '1', type: 'E', byte: '3', bit: '0', status: '0', label: 'A', text: 'Hex keyboard (Card Reader)' },
				{ cpu: '1', type: 'E', byte: '3', bit: '1', status: '0', label: 'B', text: 'Hex keyboard (Card Reader)' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '2', status: '0', label: 'C', text: 'Hex keyboard (Card Reader)' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '3', status: '0', label: 'D', text: 'Hex keyboard (Card Reader)' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '4', status: '0', label: 'STR', text: 'Card Reader' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '5', status: '0', label: 'OK', text: 'Hex keyboard (Card Reader)' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '6', status: '0', label: 'DAT', text: 'Card Reader' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '7', status: '0', label: 'FLP2', text: 'Vehicle back length check photo-sensor' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7322-1BL00-0AA00',
		bytes: [
			{
			label: 'AB0',
			bits: [
				{ cpu: '1', type: 'A', byte: '0', bit: '0', status: '0', label: 'LKA', text: 'Enter code lamp' },
				{ cpu: '1', type: 'A', byte: '0', bit: '1', status: '0', label: 'LEA', text: 'Error lamp' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '2', status: '0', label: 'LBA', text: 'In operation lamp' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '3', status: '0', label: 'RDY', text: 'Card reader' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '4', status: '0', label: 'RST', text: 'Card reader' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '6', status: '0', label: 'LA', text: 'Alarm lamp' },	
				{ cpu: '1', type: 'A', byte: '0', bit: '7', status: '0', label: 'RBE', text: '+24Vdc card reader' }]	
			},
			{
			label: 'AB1',
			bits: [
				{ cpu: '1', type: 'A', byte: '1', bit: '0', status: '0', label: 'LKB', text: 'Enter code lamp' },
				{ cpu: '1', type: 'A', byte: '1', bit: '1', status: '0', label: 'LEB', text: 'Error lamp' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '2', status: '0', label: 'LBB', text: 'In operation lamp' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '3', status: '0', label: 'RDY', text: 'Card reader' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '4', status: '0', label: 'RST', text: 'Card reader' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '6', status: '0', label: 'LA', text: 'Alarm lamp' },	
				{ cpu: '1', type: 'A', byte: '1', bit: '7', status: '0', label: 'RBE', text: '+24Vdc card reader' }]	
			},
			{
			label: 'AB2',
			bits: [
				{ cpu: '1', type: 'A', byte: '2', bit: '0', status: '0', label: 'LKC', text: 'Enter code lamp' },
				{ cpu: '1', type: 'A', byte: '2', bit: '1', status: '0', label: 'LEC', text: 'Error lamp' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '2', status: '0', label: 'LBC', text: 'In operation lamp' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '3', status: '0', label: 'RDY', text: 'Card reader' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '4', status: '0', label: 'RST', text: 'Card reader' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '6', status: '0', label: 'LA', text: 'Alarm lamp' },	
				{ cpu: '1', type: 'A', byte: '2', bit: '7', status: '0', label: 'RBE', text: '+24Vdc card reader' }]	
			},
			{
			label: 'AB3',
			bits: [
				{ cpu: '1', type: 'A', byte: '3', bit: '0', status: '0', label: 'LKE', text: 'Enter code lamp' },
				{ cpu: '1', type: 'A', byte: '3', bit: '1', status: '0', label: 'LEE', text: 'Error lamp' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '2', status: '0', label: 'LBE', text: 'In operation lamp' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '3', status: '0', label: 'RDY', text: 'Card reader' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '4', status: '0', label: 'RST', text: 'Card reader' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '5', status: '0', label: 'LC1', text: '' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '6', status: '0', label: 'LC2', text: 'Alarm lamp' },	
				{ cpu: '1', type: 'A', byte: '3', bit: '7', status: '0', label: 'RBE', text: '+24Vdc card reader' }]	
			}],
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB4',
			bits: [
				{ cpu: '1', type: 'E', byte: '4', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '4', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '5', status: '0', label: 'S1', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '6', status: '0', label: 'S1', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '7', status: '0', label: 'S1', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB5',
			bits: [
				{ cpu: '1', type: 'E', byte: '5', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '5', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '5', status: '0', label: 'S1', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '6', status: '0', label: 'S1', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '7', status: '0', label: 'S1', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB6',
			bits: [
				{ cpu: '1', type: 'E', byte: '6', bit: '0', status: '0', label: '', text: '' },
				{ cpu: '1', type: 'E', byte: '6', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '3', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '6', bit: '7', status: '0', label: '', text: '' }]	
			},
			{
			label: 'EB7',
			bits: [
				{ cpu: '1', type: 'E', byte: '7', bit: '0', status: '0', label: 'EMA', text: 'VGA manual mode' },
				{ cpu: '1', type: 'E', byte: '7', bit: '1', status: '0', label: 'EMB', text: 'VGB manual mode' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '2', status: '0', label: 'EMC', text: 'VGC manual mode' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '3', status: '0', label: 'RSI', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '4', status: '0', label: 'SABC', text: 'VG A/B/C selection key' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '5', status: '0', label: 'SABC', text: 'VG A/B/C selection key' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '7', status: '0', label: 'UC', text: 'Control confirmation push-button' }]	
			}]
		}
		
		];
	return data;
}

/* IO Main 2 */
function Rack_M2() {

	//this.data = [
	var data = [
		// Card 1
		{
		nr: '1',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB8',
			bits: [
				{ cpu: '1', type: 'E', byte: '8', bit: '0', status: '0', label: 'IV', text: 'Inverter enabled' },
				{ cpu: '1', type: 'E', byte: '8', bit: '1', status: '0', label: 'EPA', text: 'Pilomat higher position' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '2', status: '0', label: 'RX', text: 'Radar' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '5', status: '0', label: 'S1', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '6', status: '0', label: 'S1', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '7', status: '0', label: 'S1', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB9',
			bits: [
				{ cpu: '1', type: 'E', byte: '9', bit: '0', status: '0', label: 'MDR', text: 'Turntable positioning sensor' },
				{ cpu: '1', type: 'E', byte: '9', bit: '1', status: '0', label: 'MDL', text: 'Turntable positioning sensor' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '2', status: '0', label: 'EDR', text: 'Turntable positioning sensor' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '3', status: '0', label: 'EDL', text: 'Turntable positioning sensor' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '4', status: '0', label: 'EPB', text: 'Pilomat lower position' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '5', status: '0', label: 'ECA', text: 'Flap higher position' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '6', status: '0', label: 'ECB', text: 'Flap lower position' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '7', status: '0', label: 'AMC', text: 'Flap motor circuit breaker' }]	
			},
			{
			label: 'EB10',
			bits: [
				{ cpu: '1', type: 'E', byte: '10', bit: '0', status: '0', label: 'EPZV', text: 'Vehicle wheel front position limitswitch' },
				{ cpu: '1', type: 'E', byte: '10', bit: '1', status: '0', label: 'EPZH', text: 'Vehicle wheel back position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '2', status: '0', label: 'FLP', text: 'Vehicle back length check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '3', status: '0', label: 'FPE', text: 'Vehicle presence photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '4', status: '0', label: 'FDR', text: 'Vehicle right door check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '5', status: '0', label: 'FDL', text: 'Vehicle left door check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '6', status: '0', label: 'FTA1', text: 'Vehicle max height check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '7', status: '0', label: 'FTA2', text: 'Vehicle height check photo-sensor' }]	
			},
			{
			label: 'EB11',
			bits: [
				{ cpu: '1', type: 'E', byte: '11', bit: '0', status: '0', label: 'EZE', text: 'Inner door closed limitswitch' },
				{ cpu: '1', type: 'E', byte: '11', bit: '1', status: '0', label: 'EOE', text: 'Inner door opened limitswitch' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '2', status: '0', label: 'FBE', text: 'Inner door safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '3', status: '0', label: 'APE', text: 'Inner door motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '4', status: '0', label: 'EBZE', text: 'Outer door closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '5', status: '0', label: 'EBOE', text: 'Outer door opened limitswitch' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '6', status: '0', label: 'FBBE', text: 'Outer door safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '7', status: '0', label: 'APBE', text: 'Outer door motor circuit breaker' }]	
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB12',
			bits: [
				{ cpu: '1', type: 'E', byte: '12', bit: '0', status: '0', label: 'IV', text: 'Inverter enabled' },
				{ cpu: '1', type: 'E', byte: '12', bit: '1', status: '0', label: 'EPA', text: 'Pilomat higher position' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '2', status: '0', label: 'RX', text: 'Radar' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '5', status: '0', label: 'S1', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '6', status: '0', label: 'S1', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '12', bit: '7', status: '0', label: 'S1', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB13',
			bits: [
				{ cpu: '1', type: 'E', byte: '13', bit: '0', status: '0', label: 'MDR', text: 'Turntable positioning sensor' },
				{ cpu: '1', type: 'E', byte: '13', bit: '1', status: '0', label: 'MDL', text: 'Turntable positioning sensor' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '2', status: '0', label: 'EDR', text: 'Turntable positioning sensor' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '3', status: '0', label: 'EDL', text: 'Turntable positioning sensor' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '4', status: '0', label: 'EPB', text: 'Pilomat lower position' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '5', status: '0', label: 'ECA', text: 'Flap higher position' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '6', status: '0', label: 'ECB', text: 'Flap lower position' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '7', status: '0', label: 'AMC', text: 'Flap motor circuit breaker' }]	
			},
			{
			label: 'EB14',
			bits: [
				{ cpu: '1', type: 'E', byte: '14', bit: '0', status: '0', label: 'EPZV', text: 'Vehicle wheel front position limitswitch' },
				{ cpu: '1', type: 'E', byte: '14', bit: '1', status: '0', label: 'EPZH', text: 'Vehicle wheel back position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '2', status: '0', label: 'FLP', text: 'Vehicle back length check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '3', status: '0', label: 'FPE', text: 'Vehicle presence photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '4', status: '0', label: 'FDR', text: 'Vehicle right door check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '5', status: '0', label: 'FDL', text: 'Vehicle left door check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '6', status: '0', label: 'FTA1', text: 'Vehicle max height check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '7', status: '0', label: 'FTA2', text: 'Vehicle height check photo-sensor' }]	
			},
			{
			label: 'EB15',
			bits: [
				{ cpu: '1', type: 'E', byte: '15', bit: '0', status: '0', label: 'EZE', text: 'Inner door closed limitswitch' },
				{ cpu: '1', type: 'E', byte: '15', bit: '1', status: '0', label: 'EOE', text: 'Inner door opened limitswitch' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '2', status: '0', label: 'FBE', text: 'Inner door safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '3', status: '0', label: 'APE', text: 'Inner door motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '4', status: '0', label: 'EBZE', text: 'Outer door closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '5', status: '0', label: 'EBOE', text: 'Outer door opened limitswitch' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '6', status: '0', label: 'FBBE', text: 'Outer door safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '7', status: '0', label: 'APBE', text: 'Outer door motor circuit breaker' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: '6ES7321-1BL00-0AA00',
		bytes: [
			{
			label: 'EB16',
			bits: [
				{ cpu: '1', type: 'E', byte: '16', bit: '0', status: '0', label: 'IV', text: 'Inverter enabled' },
				{ cpu: '1', type: 'E', byte: '16', bit: '1', status: '0', label: 'EPA', text: 'Pilomat higher position' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '2', status: '0', label: 'RX', text: 'Radar' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '5', status: '0', label: 'S1', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '6', status: '0', label: 'S1', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '16', bit: '7', status: '0', label: 'S1', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB17',
			bits: [
				{ cpu: '1', type: 'E', byte: '17', bit: '0', status: '0', label: 'MDR', text: 'Turntable positioning sensor' },
				{ cpu: '1', type: 'E', byte: '17', bit: '1', status: '0', label: 'MDL', text: 'Turntable positioning sensor' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '2', status: '0', label: 'EDR', text: 'Turntable positioning sensor' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '3', status: '0', label: 'EDL', text: 'Turntable positioning sensor' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '4', status: '0', label: 'EPB', text: 'Pilomat lower position' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '5', status: '0', label: 'ECA', text: 'Flap higher position' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '6', status: '0', label: 'ECB', text: 'Flap lower position' },	
				{ cpu: '1', type: 'E', byte: '17', bit: '7', status: '0', label: 'AMC', text: 'Flap motor circuit breaker' }]	
			},
			{
			label: 'EB18',
			bits: [
				{ cpu: '1', type: 'E', byte: '18', bit: '0', status: '0', label: 'EPZV', text: 'Vehicle wheel front position limitswitch' },
				{ cpu: '1', type: 'E', byte: '18', bit: '1', status: '0', label: 'EPZH', text: 'Vehicle wheel back position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '2', status: '0', label: 'FLP', text: 'Vehicle back length check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '3', status: '0', label: 'FPE', text: 'Vehicle presence photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '4', status: '0', label: 'FDR', text: 'Vehicle right door check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '5', status: '0', label: 'FDL', text: 'Vehicle left door check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '6', status: '0', label: 'FTA1', text: 'Vehicle max height check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '18', bit: '7', status: '0', label: 'FTA2', text: 'Vehicle height check photo-sensor' }]	
			},
			{
			label: 'EB19',
			bits: [
				{ cpu: '1', type: 'E', byte: '19', bit: '0', status: '0', label: 'EZE', text: 'Inner door closed limitswitch' },
				{ cpu: '1', type: 'E', byte: '19', bit: '1', status: '0', label: 'EOE', text: 'Inner door opened limitswitch' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '2', status: '0', label: 'FBE', text: 'Inner door safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '3', status: '0', label: 'APE', text: 'Inner door motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '4', status: '0', label: 'EBZE', text: 'Outer door closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '5', status: '0', label: 'EBOE', text: 'Outer door opened limitswitch' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '6', status: '0', label: 'FBBE', text: 'Outer door safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '19', bit: '7', status: '0', label: 'APBE', text: 'Outer door motor circuit breaker' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: '6ES7322-1BL00-0AA00',
		bytes: [
			{
			label: 'AB4',
			bits: [
				{ cpu: '1', type: 'A', byte: '4', bit: '0', status: '0', label: 'SCA', text: 'Flap motor up' },
				{ cpu: '1', type: 'A', byte: '4', bit: '1', status: '0', label: 'SCB', text: 'Flap motor down' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '2', status: '0', label: 'TD', text: 'Turntable motor' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '3', status: '0', label: 'SP', text: 'Inner door line' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '4', status: '0', label: 'SZ', text: 'Inner door close' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '5', status: '0', label: 'SO', text: 'Inner door open' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '6', status: '0', label: 'SBZ', text: 'Outer door close' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '7', status: '0', label: 'SBO', text: 'Outer door open' }]	
			},
			{
			label: 'AB5',
			bits: [
				{ cpu: '1', type: 'A', byte: '5', bit: '0', status: '0', label: 'L1', text: 'Light panel' },
				{ cpu: '1', type: 'A', byte: '5', bit: '1', status: '0', label: 'L2', text: 'Light panel' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '2', status: '0', label: 'L3', text: 'Light panel' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '3', status: '0', label: 'L4', text: 'Light panel' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '4', status: '0', label: 'L5', text: 'Light panel' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '5', status: '0', label: 'RFE', text: 'Traffic light' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '6', status: '0', label: 'RLN', text: 'Light control' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '7', status: '0', label: 'KBA', text: 'Inverter enable' }]	
			},
			{
			label: 'AB6',
			bits: [
				{ cpu: '1', type: 'A', byte: '6', bit: '0', status: '0', label: 'SCA', text: 'Flap motor up' },
				{ cpu: '1', type: 'A', byte: '6', bit: '1', status: '0', label: 'SCB', text: 'Flap motor down' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '2', status: '0', label: 'TD', text: 'Turntable motor' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '3', status: '0', label: 'SP', text: 'Inner door line' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '4', status: '0', label: 'SZ', text: 'Inner door close' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '5', status: '0', label: 'SO', text: 'Inner door open' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '6', status: '0', label: 'SBZ', text: 'Outer door close' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '7', status: '0', label: 'SBO', text: 'Outer door open' }]	
			},
			{
			label: 'AB7',
			bits: [
				{ cpu: '1', type: 'A', byte: '7', bit: '0', status: '0', label: 'L1', text: 'Light panel' },
				{ cpu: '1', type: 'A', byte: '7', bit: '1', status: '0', label: 'L2', text: 'Light panel' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '2', status: '0', label: 'L3', text: 'Light panel' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '3', status: '0', label: 'L4', text: 'Light panel' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '4', status: '0', label: 'L5', text: 'Light panel' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '5', status: '0', label: 'RFE', text: 'Traffic light' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '6', status: '0', label: 'RLN', text: 'Light control' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '7', status: '0', label: 'KBA', text: 'Inverter enable' }]	
			}],
		},
		// Card 5
		{
		nr: '5',
		type: '6ES7322-1BL00-0AA00',
		bytes: [
			{
			label: 'AB8',
			bits: [
				{ cpu: '1', type: 'A', byte: '8', bit: '0', status: '0', label: 'SCA', text: 'Flap motor up' },
				{ cpu: '1', type: 'A', byte: '8', bit: '1', status: '0', label: 'SCB', text: 'Flap motor down' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '2', status: '0', label: 'TD', text: 'Turntable motor' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '3', status: '0', label: 'SP', text: 'Inner door line' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '4', status: '0', label: 'SZ', text: 'Inner door close' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '5', status: '0', label: 'SO', text: 'Inner door open' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '6', status: '0', label: 'SBZ', text: 'Outer door close' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '7', status: '0', label: 'SBO', text: 'Outer door open' }]	
			},
			{
			label: 'AB9',
			bits: [
				{ cpu: '1', type: 'A', byte: '9', bit: '0', status: '0', label: 'L1', text: 'Light panel' },
				{ cpu: '1', type: 'A', byte: '9', bit: '1', status: '0', label: 'L2', text: 'Light panel' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '2', status: '0', label: 'L3', text: 'Light panel' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '3', status: '0', label: 'L4', text: 'Light panel' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '4', status: '0', label: 'L5', text: 'Light panel' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '5', status: '0', label: 'RFE', text: 'Traffic light' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '6', status: '0', label: 'RLN', text: 'Light control' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '7', status: '0', label: 'KBA', text: 'Inverter enable' }]	
			},
			{
			label: 'AB10',
			bits: [
				{ cpu: '1', type: 'A', byte: '10', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '10', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			},
			{
			label: 'AB11',
			bits: [
				{ cpu: '1', type: 'A', byte: '11', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '11', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			}],
		}
		];
	return data;
}
