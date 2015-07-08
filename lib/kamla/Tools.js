var math = require('math');

/*
 *	Utility functions
 */

exports.IntToBytes = function (i, b) {

	b[0] = i & 0xFF;
	b[1] = (i >> 8) & 0xFF;
	return i;
}

exports.BytesToInt = function (b1, b2) {

	return (b1 << 8)|b2;
}

exports.BytesToLong = function (b1, b2, b3, b4) {
    
    return (b1<<24)|(b2<<16)|(b3<<8)|b4;
}

/*
 *	Date Time functions
 */

exports.getPlcDate = function (days) {
    var d = new Date(1990, 0, 1);   
    d.setDate(d.getDate()+days);
    //return dateFormat(d, "d/mm/yyyy");
    return d;
}

exports.getPlcTime = function (msec) {
    var h = math.floor(msec/3600000);
    var m = math.floor((msec%3600000)/60000);
    var s = math.floor(((msec%3600000)%60000)/1000);
    var ms = math.floor(((msec%3600000)%60000)%1000);
    var d = new Date(1990, 0, 1, h, m, s, ms);
    //return dateFormat(d, "h:MM:ss.l");// TT");
    return d;
}
