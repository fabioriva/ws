var express = require('express');
var https = require('https');
var http = require('http');

var logger = require('morgan');
var compress = require('compression')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var flash = require('connect-flash');
var auth = require('./lib/auth.js');

var app = express();

/* Http */
var ws = http.createServer(app);
ws.listen(8080);

/* Https */
//var pk = fs.readFileSync('./privatekey.pem');
//var pc = fs.readFileSync('./certificate.pem');
//var options = { key: pk, cert: pc };
//var wss = https.createServer(options, app).listen(443);
//wss.listen(443);

app.set('title', 'Sotefin Web Service');
app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(compress());								// compression middleware
app.use(express.static(__dirname + '/public'));		// serve static content
app.use(bodyParser());								// parses json, x-www-form-urlencoded, and multipart/form-data
app.use(cookieParser('s3cr3tpa55w0rd'));			// pass the secret for signed cookies
app.use(session({ store: new RedisStore }));		// populates req.session
app.use(flash());
//app.use(app.router);								// <--- this line is removed in express 4.x

/* Routes */
require('./routes/main')(app, auth);				// webservice main routes
require('./routes/kamla')(app, auth);				// kamla nagar (index) routes
//require('./routes/kamla_left')(app, auth);		// kamla nagar left side routes
//require('./routes/kamla_right')(app, auth);		// kamla nagar right side routes
require('./routes/arlozorov')(app, auth);			// arlozorov routes

/* Error 404 */
app.get('*', function (req, res) { res.send('<p>Can\'t GET  ' + req.originalUrl + '</p>', 404); });

/* socket.io */
var io = require('socket.io').listen(ws);
io.on('connection', function(socket){
	console.log('socket.io: id ' + socket.id);
});