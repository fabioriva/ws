/*
 * I/O entity
 */
var utility = require('./Tools');

exports.Rack_1 = Rack_IO1();
exports.Rack_2 = Rack_IO2();

exports.readIo = function (byteIni, byteLen, data, RACK) {

	var r = RACK;
	var x = byteIni;
	var io = JSON.parse(JSON.stringify(r));
	
	for (var c=0; c<r.cards.length; c++) {
		
		for (var b=0; b<r.cards[c].bytes.length; b++) {	
	
			var m = 1;
			for (var i=0; i<r.cards[c].bytes[b].bits.length; i++) {
		   
				var status = data[x] & m;
				r.cards[c].bytes[b].bits[i].status = (status ? 1 : 0);
				m *= 2;
	
				io.cards[c].bytes[b].bits[i].cpu = r.cards[c].bytes[b].bits[i].cpu;
				io.cards[c].bytes[b].bits[i].type = r.cards[c].bytes[b].bits[i].type;
				io.cards[c].bytes[b].bits[i].byte = r.cards[c].bytes[b].bits[i].byte;
				io.cards[c].bytes[b].bits[i].bit = r.cards[c].bytes[b].bits[i].bit;
				io.cards[c].bytes[b].bits[i].status = r.cards[c].bytes[b].bits[i].status;
				delete io.cards[c].bytes[b].bits[i].label;
				delete io.cards[c].bytes[b].bits[i].text;
			}
			x += 1;
		}
	}
	return io;
}

/* IO EL1 */
function Rack_IO1 () {

	//this.data = [
	//var data = [
	return {
	
	cards: [
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
				{ cpu: '1', type: 'E', byte: '0', bit: '7', status: '0', label: 'AD', text: 'Card Reader' }]	
			},
			{
			label: 'EB1',
			bits: [
				{ cpu: '1', type: 'E', byte: '1', bit: '0', status: '0', label: 'FE1', text: '' },
				{ cpu: '1', type: 'E', byte: '1', bit: '1', status: '0', label: 'FE2', text: 'Data enable 1' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '2', status: '0', label: 'KEZE', text: 'Data enable 2' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '3', status: '0', label: '', text: 'System ON' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '4', status: '0', label: 'KXPE', text: 'Control confirmation push-button' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '5', status: '0', label: 'S1', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '6', status: '0', label: 'S1', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '1', bit: '7', status: '0', label: 'S1', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB2',
			bits: [
				{ cpu: '1', type: 'E', byte: '2', bit: '0', status: '0', label: 'AMT1', text: 'Exit door closed' },
				{ cpu: '1', type: 'E', byte: '2', bit: '1', status: '0', label: 'EOT1', text: 'Exit door opened' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '2', status: '0', label: 'EZT1', text: 'Exit door safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '3', status: '0', label: 'AMT2', text: 'Exit door motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '4', status: '0', label: 'EOT2', text: 'Exit barrier closed' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '5', status: '0', label: 'EZT2', text: 'Exit barrier opened' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '6', status: '0', label: 'AMM12', text: 'Exit barrier safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '2', bit: '7', status: '0', label: 'AMM34', text: 'Exit barrier motor circuit breaker' }]	
			},
			{
			label: 'EB3',
			bits: [
				{ cpu: '1', type: 'E', byte: '3', bit: '0', status: '0', label: 'EFA1', text: 'Vehicle present in exit' },
				{ cpu: '1', type: 'E', byte: '3', bit: '1', status: '0', label: 'EFB1', text: '' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '2', status: '0', label: 'EFA2', text: 'Manual/Automatic' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '3', status: '0', label: 'EFB2', text: '' },	
				{ cpu: '1', type: 'E', byte: '3', bit: '4', status: '0', label: 'ATV', text: '' },	
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
				{ cpu: '1', type: 'E', byte: '4', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '4', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '4', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			},
			{
			label: 'EB5',
			bits: [
				{ cpu: '1', type: 'E', byte: '5', bit: '0', status: '0', label: 'EOM1', text: 'Vehicle right width check photo-sensor' },
				{ cpu: '1', type: 'E', byte: '5', bit: '1', status: '0', label: 'EZM1', text: 'Vehicle left width check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '2', status: '0', label: 'EOM2', text: 'Door motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '3', status: '0', label: 'EZM2', text: 'Inverter 1 ON' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '4', status: '0', label: 'EOM3', text: '' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '5', status: '0', label: 'EZM3', text: 'Elevator door level position check photo sensor' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '6', status: '0', label: 'EOM4', text: 'Elevator level position check photo sensor' },	
				{ cpu: '1', type: 'E', byte: '5', bit: '7', status: '0', label: 'EZM4', text: 'Elevator bottom level position check photo sensor' }]	
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
				{ cpu: '1', type: 'E', byte: '7', bit: '0', status: '0', label: 'IV', text: 'Flap higher position limitswitch' },
				{ cpu: '1', type: 'E', byte: '7', bit: '1', status: '0', label: 'MTC', text: 'Flap lower position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '2', status: '0', label: 'AH', text: 'Flap motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '3', status: '0', label: 'RSI', text: 'Locking device open position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '4', status: '0', label: 'DB32', text: 'Locking device closed position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '5', status: '0', label: 'DBHZ', text: 'Locking device motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '6', status: '0', label: '', text: 'Vehicle wheel front position limitswitch' },	
				{ cpu: '1', type: 'E', byte: '7', bit: '7', status: '0', label: 'UC', text: 'Vehicle wheel back position limitswitch' }]	
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
				{ cpu: '1', type: 'E', byte: '8', bit: '0', status: '0', label: 'ACR', text: 'Entry door closed limitswitch' },
				{ cpu: '1', type: 'E', byte: '8', bit: '1', status: '0', label: 'TCR', text: 'Entry door opened limitswitch' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '2', status: '0', label: 'ASH', text: 'Entry door safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '3', status: '0', label: 'AF9', text: 'Entry door motor circuit breaker' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '4', status: '0', label: 'S3', text: 'Entry barrier closed limitswitch' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '5', status: '0', label: 'RTA12', text: 'Entry barrier opened limitswitch' },	
				{ cpu: '1', type: 'E', byte: '8', bit: '6', status: '0', label: 'KBA', text: 'Entry barrier safety photo-sensor' },
				{ cpu: '1', type: 'E', byte: '8', bit: '7', status: '0', label: 'FDSQA', text: 'Entry barrier motor circuit breaker' }]	
			},
			{
			label: 'EB9',
			bits: [
				{ cpu: '1', type: 'E', byte: '9', bit: '0', status: '0', label: '', text: 'Vehicle height 3 photo-sensor' },
				{ cpu: '1', type: 'E', byte: '9', bit: '1', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '2', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '3', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '5', status: '0', label: 'FDR', text: '' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '6', status: '0', label: 'FTL', text: 'Front side transfer stall check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '9', bit: '7', status: '0', label: 'APE', text: 'Back side transfer stall check photo-sensor' }]	
			},
			{
			label: 'EB10',
			bits: [
				{ cpu: '1', type: 'E', byte: '10', bit: '0', status: '0', label: 'EZE', text: 'Entry door closed limitswitch' },
				{ cpu: '1', type: 'E', byte: '10', bit: '1', status: '0', label: 'EOE', text: 'Entry door opened limitswitch' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '2', status: '0', label: 'FBE', text: 'Entry door safety photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '3', status: '0', label: 'FPE', text: 'Vehicle present' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '4', status: '0', label: 'FLA', text: 'Vehicle max front length check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '5', status: '0', label: 'FLP', text: 'Vehicle max back length check photo-sensor' },	
				{ cpu: '1', type: 'E', byte: '10', bit: '6', status: '0', label: 'RXE', text: 'Radar' },
				{ cpu: '1', type: 'E', byte: '10', bit: '7', status: '0', label: 'FTA1', text: 'Vehicle max height check photo-sensor' }]	
			},
			{
			label: 'EB11',
			bits: [
				{ cpu: '1', type: 'E', byte: '11', bit: '0', status: '0', label: 'FTA2', text: 'Inverter 1 ON' },
				{ cpu: '1', type: 'E', byte: '11', bit: '1', status: '0', label: '', text: 'Elevator hoisting feedback' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '2', status: '0', label: '', text: 'Elevator hoisting motor brake circut breaker' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '3', status: '0', label: '', text: 'Elevator hoisting motor circut breaker' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '4', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '5', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '6', status: '0', label: '', text: '' },	
				{ cpu: '1', type: 'E', byte: '11', bit: '7', status: '0', label: 'POD', text: 'Vehicle height 2 check photo-sensor' }]	
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
				{ cpu: '1', type: 'A', byte: '4', bit: '0', status: '0', label: 'TD', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '4', bit: '1', status: '0', label: 'KQA', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '2', status: '0', label: '', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '3', status: '0', label: 'KBA1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '4', status: '0', label: '', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '5', status: '0', label: 'KXPE', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '6', status: '0', label: '', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '4', bit: '7', status: '0', label: 'KEM', text: '6-digit display' }]	
			},
			{
			label: 'AB5',
			bits: [
				{ cpu: '1', type: 'A', byte: '5', bit: '0', status: '0', label: 'SMA1', text: '' },
				{ cpu: '1', type: 'A', byte: '5', bit: '1', status: '0', label: 'SMB1', text: '' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '2', status: '0', label: 'SMA2', text: 'Exit door motor' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '3', status: '0', label: 'SMB2', text: 'Exit barrier close' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '4', status: '0', label: 'SMA3', text: 'Exit barrier open' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '5', status: '0', label: 'SMB3', text: '' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '6', status: '0', label: 'SMA4', text: 'Alarm ON lamp' },	
				{ cpu: '1', type: 'A', byte: '5', bit: '7', status: '0', label: 'SMB4', text: 'System ready lamp' }]	
			},
			{
			label: 'AB6',
			bits: [
				{ cpu: '1', type: 'A', byte: '6', bit: '0', status: '0', label: 'T10', text: '' },
				{ cpu: '1', type: 'A', byte: '6', bit: '1', status: '0', label: 'T2', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '2', status: '0', label: 'TRA', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '3', status: '0', label: 'TRB', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '4', status: '0', label: 'KCS', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '6', bit: '5', status: '0', label: 'KCV', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '6', status: '0', label: 'KCH', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '6', bit: '7', status: '0', label: 'TCR', text: 'Silomat cable-reel' }]	
			},
			{
			label: 'AB7',
			bits: [
				{ cpu: '1', type: 'A', byte: '7', bit: '0', status: '0', label: 'L1', text: 'Entry door close' },
				{ cpu: '1', type: 'A', byte: '7', bit: '1', status: '0', label: 'L2', text: 'Entry door open' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '2', status: '0', label: 'L3', text: 'Exit door close' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '3', status: '0', label: 'L4', text: 'Exit door open' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '4', status: '0', label: 'L5', text: 'Description' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '5', status: '0', label: 'RFE', text: 'Traffic light green lamp' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '6', status: '0', label: 'RLN', text: 'Traffic light red lamp' },	
				{ cpu: '1', type: 'A', byte: '7', bit: '7', status: '0', label: 'RBE', text: '' }]	
			}]
		},
		// Card 5
		{
		nr: '5',
		type: '6ES7322-1BH01-0AA00',
		bytes: [
			{
			label: 'AB8',
			bits: [
				{ cpu: '1', type: 'A', byte: '8', bit: '0', status: '0', label: 'LKE', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '8', bit: '1', status: '0', label: 'LEE', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '2', status: '0', label: 'LBE', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '3', status: '0', label: 'RDY', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '4', status: '0', label: 'RST', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '5', status: '0', label: '', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '6', status: '0', label: 'LA', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '8', bit: '7', status: '0', label: 'LC', text: '6-digit display' }]	
			},
			{
			label: 'AB9',
			bits: [
				{ cpu: '1', type: 'A', byte: '9', bit: '0', status: '0', label: 'A', text: '6-digit display' },
				{ cpu: '1', type: 'A', byte: '9', bit: '1', status: '0', label: 'B', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '2', status: '0', label: 'C', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '3', status: '0', label: 'D', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '4', status: '0', label: 'AD1', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '5', status: '0', label: 'AD2', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '6', status: '0', label: 'AD3', text: '6-digit display' },	
				{ cpu: '1', type: 'A', byte: '9', bit: '7', status: '0', label: 'STR', text: '6-digit display' }]	
			},
			{
			label: 'AB10',
			bits: [
				{ cpu: '1', type: 'A', byte: '10', bit: '0', status: '0', label: 'SMTA1', text: 'Elevator hoisting' },
				{ cpu: '1', type: 'A', byte: '10', bit: '1', status: '0', label: 'SMTB1', text: 'Elevator hoisting brake 1' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '2', status: '0', label: 'SMTA2', text: '' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '3', status: '0', label: 'SMTB2', text: '' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '4', status: '0', label: '', text: 'Flap up' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '5', status: '0', label: '', text: 'Flap down' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '6', status: '0', label: 'SZE', text: 'Locking pin close' },	
				{ cpu: '1', type: 'A', byte: '10', bit: '7', status: '0', label: 'SOE', text: 'Locking pin open' }]	
			},
			{
			label: 'AB11',
			bits: [
				{ cpu: '1', type: 'A', byte: '11', bit: '0', status: '0', label: 'STA1', text: '' },
				{ cpu: '1', type: 'A', byte: '11', bit: '1', status: '0', label: 'STB1', text: 'Silomat travelling' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '2', status: '0', label: 'STA2', text: 'Silomat motors forward' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '3', status: '0', label: 'STB2', text: 'Silomat motors backward' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '4', status: '0', label: 'STV', text: 'Silomat hoisting' },
				{ cpu: '1', type: 'A', byte: '11', bit: '5', status: '0', label: '', text: 'Silomat front centering' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '6', status: '0', label: '', text: 'Silomat back centering' },	
				{ cpu: '1', type: 'A', byte: '11', bit: '7', status: '0', label: '', text: 'Silomat cable-reel' }]	
			}]
		}]
	}	
}

/* IO EL2 */
function Rack_IO2 () {

	//this.data = [
	//var data = [
	return {
	
	cards: [
		// Card 1
		{
		nr: '1',
		type: '131-4BF00-0AA00',
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
			}]
		},
		// Card 2
		{
		nr: '2',
		type: '131-4BF00-0AA00',
		bytes: [
			{
			label: 'EB13',
			bits: [
				{ cpu: '1', type: 'E', byte: '13', bit: '0', status: '0', label: '', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '13', bit: '1', status: '0', label: '', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '2', status: '0', label: 'EPZV', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '3', status: '0', label: 'EPZH', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '4', status: '0', label: 'FEMV', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '5', status: '0', label: 'FEMH', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '6', status: '0', label: 'FTXV', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '13', bit: '7', status: '0', label: 'FTXH', text: 'Function mode switch selector' }]	
			}]
		},
		// Card 3
		{
		nr: '3',
		type: '131-4BF00-0AA00',
		bytes: [
			{
			label: 'EB14',
			bits: [
				{ cpu: '1', type: 'E', byte: '14', bit: '0', status: '0', label: 'AMC', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '14', bit: '1', status: '0', label: 'ECA', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '2', status: '0', label: 'ECB', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '3', status: '0', label: 'FRDX', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '4', status: '0', label: 'FRSX', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '5', status: '0', label: 'EXD', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '6', status: '0', label: 'EXH', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '14', bit: '7', status: '0', label: 'UC', text: 'Function mode switch selector' }]	
			}]
		},
		// Card 4
		{
		nr: '4',
		type: '131-4BF00-0AA00',
		bytes: [
			{
			label: 'EB15',
			bits: [
				{ cpu: '1', type: 'E', byte: '15', bit: '0', status: '0', label: 'FE3', text: 'Hex keyboard' },
				{ cpu: '1', type: 'E', byte: '15', bit: '1', status: '0', label: 'KEXPV', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '2', status: '0', label: 'ASBK1', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '3', status: '0', label: 'ASBK2', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '4', status: '0', label: 'SBK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '5', status: '0', label: '', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '6', status: '0', label: '', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'E', byte: '15', bit: '7', status: '0', label: '', text: 'Function mode switch selector' }]	
			}]
		},
		// Card 5
		{
		nr: '5',
		type: '132-4BF00-0AA00',
		bytes: [
			{
			label: 'AB12',
			bits: [
				{ cpu: '1', type: 'A', byte: '12', bit: '0', status: '0', label: 'SCA', text: 'Hex keyboard' },
				{ cpu: '1', type: 'A', byte: '12', bit: '1', status: '0', label: 'SCB', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '2', status: '0', label: 'SBK1', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '3', status: '0', label: 'SBK2', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '4', status: '0', label: 'T10F', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '5', status: '0', label: 'TDF', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '6', status: '0', label: '', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'A', byte: '12', bit: '7', status: '0', label: 'LC', text: 'Function mode switch selector' }]	
			}]
		},
		// Card 6
		{
		nr: '6',
		type: '132-4BF00-0AA00',
		bytes: [
			{
			label: 'AB13',
			bits: [
				{ cpu: '1', type: 'A', byte: '13', bit: '0', status: '0', label: 'A', text: 'Hex keyboard' },
				{ cpu: '1', type: 'A', byte: '13', bit: '1', status: '0', label: 'B', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '2', status: '0', label: 'C', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '3', status: '0', label: 'D', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '4', status: '0', label: 'OK', text: 'Hex keyboard' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '5', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '6', status: '0', label: 'S2', text: 'Function mode switch selector' },	
				{ cpu: '1', type: 'A', byte: '13', bit: '7', status: '0', label: 'S2', text: 'Function mode switch selector' }]	
			}]
		}]
	//];
	//return data;
	}
}
