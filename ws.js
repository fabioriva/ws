var express = require('express');
var logger = require('morgan');
var compress = require('compression')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var flash = require('connect-flash');
var auth = require('./lib/auth.js');

var app = express();
//var router = express.Router();
var ws = require('http').Server(app);

app.set('PORT', process.env.port || 8080);
app.set('title', 'Sotefin Web Service');
app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(compress());								// compression middleware
app.use(express.static(__dirname + '/public'));		// serve static content
app.use(bodyParser());								// parses json, x-www-form-urlencoded, and multipart/form-data
app.use(cookieParser('s3cr3tpa55w0rd'));			// pass the secret for signed cookies
app.use(session({ cookie: { maxAge: 1000 * 60 * 60 }, store: new RedisStore }));		// populates req.session
app.use(flash());
//app.use(app.router);								// <--- this line is removed in express 4.x

/* Routes */
require('./routes/main')(app, auth);				// webservice main routes
require('./routes/kamla')(app, auth);				// kamla nagar routes
require('./routes/arlozorov')(app, auth);			// arlozorov routes
require('./routes/ibank')(app, auth);				// iron bank routes
require('./routes/ipark')(app, auth);				// i-park routes
	
/* Error 404 */
app.get('*', function (req, res) { 
	res.send('<p>Can\'t GET  ' + req.originalUrl + '</p><hr><p>http://www.sotefinservice.com</p>', 404);
});

ws.listen(app.get('PORT'));

/* socket.io */
var io = require('socket.io').listen(ws);
io.on('connection', function( socket) {
	console.log('socket.io: client id ' + socket.id);
});