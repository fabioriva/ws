/*
 * Devices entity
 */
var utility = require('./Tools');

exports.Devices = Devices();

exports.readDevices = function (byteIni, byteLen, data) {

	var d = Devices();	
	var x = byteIni;

	for (var i=0; i<d.devices.length; i++) {
	    
		d.devices[i].id = utility.BytesToInt(data[x+0], data[x+1]);
	    d.devices[i].mode = operatingMode(utility.BytesToInt(data[x+2], data[x+3]));
	    d.devices[i].stall = utility.BytesToInt(data[x+4], data[x+5]);
	    d.devices[i].card = utility.BytesToInt(data[x+6], data[x+7]);
	    d.devices[i].size = utility.BytesToInt(data[x+8], data[x+9]);
	    d.devices[i].position = utility.BytesToInt(data[x+10], data[x+11]);
	    d.devices[i].destination = utility.BytesToInt(data[x+12], data[x+13]);
	    
	    var m = 1;
	    for (var l=0; l<d.devices[i].lamps.length; l++) {

			var status = data[x+14] & m;
			d.devices[i].lamps[l].status = (status ? true : false);
			m *= 2;
		}
		m = 1;
	    for (var l=0; l<d.devices[i].infos.length; l++) {

			status = data[x+15] & m;
			d.devices[i].infos[l].status = (status ? true : false);
			m *= 2;
		}	
		x += 16;
	}
	// Exit Queue
	d.exit_queue[0].card = utility.BytesToInt(data[390], data[391]);
	d.exit_queue[1].card = utility.BytesToInt(data[392], data[393]);
	d.exit_queue[2].card = utility.BytesToInt(data[394], data[395]);
	d.exit_queue[3].card = utility.BytesToInt(data[396], data[397]);
	d.exit_queue[4].card = utility.BytesToInt(data[398], data[399]);
	
	d.exit_queue[5].card = utility.BytesToInt(data[400], data[401]);
	d.exit_queue[6].card = utility.BytesToInt(data[402], data[403]);
	d.exit_queue[7].card = utility.BytesToInt(data[404], data[405]);
	d.exit_queue[8].card = utility.BytesToInt(data[406], data[407]);
	d.exit_queue[9].card = utility.BytesToInt(data[408], data[409]);

	return d;
}

function Devices () {    
//    this.data = {
	var data = {
	devices: [
	{
	    id: 1,
	    name: 'Elevator 1',
	    mode: '---',
	    stall: 0,
	    card: 0,
	    size: 0,
	    position: 0,
	    destination: 0,
	    lamps: [
		{ id: 1, status: false, label: 'System Enabled' },
		{ id: 2, status: false, label: 'System Ready' },
		{ id: 3, status: false, label: 'Alarm' }
	    ],
		infos: [
		{ id: 1, status: false, label: 'Inbound cycle' },
		{ id: 2, status: false, label: 'Outbound cycle' }
	    ]
	},
	{
	    id: 2,
	    name: 'Elevator 2',
	    mode: '---',
	    stall: 0,
	    card: 0,
	    size: 0,
	    position: 0,
	    destination: 0,
	    lamps: [
		{ id: 1, status: false, label: 'System Enabled' },
		{ id: 2, status: false, label: 'System Ready' },
		{ id: 3, status: false, label: 'Alarm' }
	    ],
		infos: [
		{ id: 1, status: false, label: 'Inbound cycle' },
		{ id: 2, status: false, label: 'Outbound cycle' }
	    ]
	},
	{
	    id: 3,
	    name: 'Elevator 3',
	    mode: '---',
	    stall: 0,
	    card: 0,
	    size: 0,
	    position: 0,
	    destination: 0,
	    lamps: [
		{ id: 1, status: false, label: 'System Enabled' },
		{ id: 2, status: false, label: 'System Ready' },
		{ id: 3, status: false, label: 'Alarm' }
	    ],
		infos: [
		{ id: 1, status: false, label: 'Inbound cycle' },
		{ id: 2, status: false, label: 'Outbound cycle' }
	    ]
	},
	{
	    id: 4,
	    name: 'Shuttle 1',
	    mode: '---',
	    stall: 0,
	    card: 0,
	    size: 0,
	    position: 0,
	    destination: 0,
	    lamps: [
		{ id: 1, status: false, label: 'System Enabled' },
		{ id: 2, status: false, label: 'System Ready' },
		{ id: 3, status: false, label: 'Alarm' }
	    ],
		infos: [
		{ id: 1, status: false, label: 'Inbound cycle' },
		{ id: 2, status: false, label: 'Outbound cycle' }
	    ]
	},
	{
	    id: 5,
	    name: 'Shuttle 2',
	    mode: '---',
	    stall: 0,
	    card: 0,
	    size: 0,
	    position: 0,
	    destination: 0,
	    lamps: [
		{ id: 1, status: false, label: 'System Enabled' },
		{ id: 2, status: false, label: 'System Ready' },
		{ id: 3, status: false, label: 'Alarm' }
	    ],
		infos: [
		{ id: 1, status: false, label: 'Inbound cycle' },
		{ id: 2, status: false, label: 'Outbound cycle' }
	    ]
	},
	{
	    id: 6,
	    name: 'Shuttle 3',
	    mode: '---',
	    stall: 0,
	    card: 0,
	    size: 0,
	    position: 0,
	    destination: 0,
	    lamps: [
		{ id: 1, status: false, label: 'System Enabled' },
		{ id: 2, status: false, label: 'System Ready' },
		{ id: 3, status: false, label: 'Alarm' }
	    ],
		infos: [
		{ id: 1, status: false, label: 'Inbound cycle' },
		{ id: 2, status: false, label: 'Outbound cycle' }
	    ]
	},
	{
	    id: 7,
	    name: 'Shuttle 4',
	    mode: '---',
	    stall: 0,
	    card: 0,
	    size: 0,
	    position: 0,
	    destination: 0,
	    lamps: [
		{ id: 1, status: false, label: 'System Enabled' },
		{ id: 2, status: false, label: 'System Ready' },
		{ id: 3, status: false, label: 'Alarm' }
	    ],
		infos: [
		{ id: 1, status: false, label: 'Inbound cycle' },
		{ id: 2, status: false, label: 'Outbound cycle' }
	    ]
	},
	{
	    id: 8,
	    name: 'Shuttle 5',
	    mode: '---',
	    stall: 0,
	    card: 0,
	    size: 0,
	    position: 0,
	    destination: 0,
	    lamps: [
		{ id: 1, status: false, label: 'System Enabled' },
		{ id: 2, status: false, label: 'System Ready' },
		{ id: 3, status: false, label: 'Alarm' }
	    ],
		infos: [
		{ id: 1, status: false, label: 'Inbound cycle' },
		{ id: 2, status: false, label: 'Outbound cycle' }
	    ]
	},
	{
	    id: 9,
	    name: 'Shuttle 6',
	    mode: '---',
	    stall: 0,
	    card: 0,
	    size: 0,
	    position: 0,
	    destination: 0,
	    lamps: [
		{ id: 1, status: false, label: 'System Enabled' },
		{ id: 2, status: false, label: 'System Ready' },
		{ id: 3, status: false, label: 'Alarm' }
	    ],
		infos: [
		{ id: 1, status: false, label: 'Inbound cycle' },
		{ id: 2, status: false, label: 'Outbound cycle' }
	    ]
	},
	{
	    id: 10,
	    name: 'Shuttle 7',
	    mode: '---',
	    stall: 0,
	    card: 0,
	    size: 0,
	    position: 0,
	    destination: 0,
	    lamps: [
		{ id: 1, status: false, label: 'System Enabled' },
		{ id: 2, status: false, label: 'System Ready' },
		{ id: 3, status: false, label: 'Alarm' }
	    ],
		infos: [
		{ id: 1, status: false, label: 'Inbound cycle' },
		{ id: 2, status: false, label: 'Outbound cycle' }
	    ]
	},
	{
	    id: 11,
	    name: 'Shuttle 8',
	    mode: '---',
	    stall: 0,
	    card: 0,
	    size: 0,
	    position: 0,
	    destination: 0,
	    lamps: [
		{ id: 1, status: false, label: 'System Enabled' },
		{ id: 2, status: false, label: 'System Ready' },
		{ id: 3, status: false, label: 'Alarm' }
	    ],
		infos: [
		{ id: 1, status: false, label: 'Inbound cycle' },
		{ id: 2, status: false, label: 'Outbound cycle' }
	    ]
	},
	{
	    id: 12,
	    name: 'Shuttle 9',
	    mode: '---',
	    stall: 0,
	    card: 0,
	    size: 0,
	    position: 0,
	    destination: 0,
	    lamps: [
		{ id: 1, status: false, label: 'System Enabled' },
		{ id: 2, status: false, label: 'System Ready' },
		{ id: 3, status: false, label: 'Alarm' }
	    ],
		infos: [
		{ id: 1, status: false, label: 'Inbound cycle' },
		{ id: 2, status: false, label: 'Outbound cycle' }
	    ]
	},
	{
	    id: 13,
	    name: 'Shuttle 10',
	    mode: '---',
	    stall: 0,
	    card: 0,
	    size: 0,
	    position: 0,
	    destination: 0,
	    lamps: [
		{ id: 1, status: false, label: 'System Enabled' },
		{ id: 2, status: false, label: 'System Ready' },
		{ id: 3, status: false, label: 'Alarm' }
	    ],
		infos: [
		{ id: 1, status: false, label: 'Inbound cycle' },
		{ id: 2, status: false, label: 'Outbound cycle' }
	    ]
	},
	{
	    id: 14,
	    name: 'Shuttle 11',
	    mode: '---',
	    stall: 0,
	    card: 0,
	    size: 0,
	    position: 0,
	    destination: 0,
	    lamps: [
		{ id: 1, status: false, label: 'System Enabled' },
		{ id: 2, status: false, label: 'System Ready' },
		{ id: 3, status: false, label: 'Alarm' }
	    ],
		infos: [
		{ id: 1, status: false, label: 'Inbound cycle' },
		{ id: 2, status: false, label: 'Outbound cycle' }
	    ]
	},
	{
	    id: 15,
	    name: 'Shuttle 12',
	    mode: '---',
	    stall: 0,
	    card: 0,
	    size: 0,
	    position: 0,
	    destination: 0,
	    lamps: [
		{ id: 1, status: false, label: 'System Enabled' },
		{ id: 2, status: false, label: 'System Ready' },
		{ id: 3, status: false, label: 'Alarm' }
	    ],
		infos: [
		{ id: 1, status: false, label: 'Inbound cycle' },
		{ id: 2, status: false, label: 'Outbound cycle' }
	    ]
	}],
	exit_queue: [
		{ id: 1, card: 0, stall: 0 },
		{ id: 2, card: 0, stall: 0 },
		{ id: 3, card: 0, stall: 0 },
		{ id: 4, card: 0, stall: 0 },
		{ id: 5, card: 0, stall: 0 },
		{ id: 6, card: 0, stall: 0 },
		{ id: 7, card: 0, stall: 0 },
		{ id: 8, card: 0, stall: 0 },
		{ id: 9, card: 0, stall: 0 },
		{ id: 10, card: 0, stall: 0 },
		{ id: 11, card: 0, stall: 0 },
		{ id: 12, card: 0, stall: 0 },
		{ id: 13, card: 0, stall: 0 },
		{ id: 14, card: 0, stall: 0 },
		{ id: 15, card: 0, stall: 0 },
		{ id: 16, card: 0, stall: 0 },
		{ id: 17, card: 0, stall: 0 },
		{ id: 18, card: 0, stall: 0 },
		{ id: 19, card: 0, stall: 0 },
		{ id: 20, card: 0, stall: 0 }
		]

    };
    return data;
}

function operatingMode(id) {
	var mode = '';
	switch(id) {
		case 1 :
			mode = 'Manual';
			break;
		case 2 :
			mode = '------';
			break;
		case 3 :
			mode = 'Step/Step'
			break;
		case 4 :
			mode = 'Automatic';
			break;
		case 5 :
			mode = '------';
			break;
		case 6 :
			mode = 'Entry only';
			break;
		case 7 :
			mode = 'Exit only';
			break;
		case 8 :
			mode = '------';
			break;
		case 9 :
			mode = 'Data Intro';
			break;
		case 10 :
			mode = 'Data Reading';
			break;
		case 11 :
			mode = 'Emergency';
			break;
		case 12 :
			mode = 'Emergency';
			break;
		case 13 :
			mode = 'Emergency';
			break;
		case 14 :
			mode = 'Step/Step';
			break;
		case 15 :
			mode = 'Preset';
			break;
		case 16 :
			mode = '------';
			break;
		default:
			mode = '------';
			break;
	}
	return mode;
}