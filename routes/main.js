// ../routes/main.js

module.exports = function (app, auth) {
	// home page
	app.get('/', function(req, res) {
		res.render('home', {
			auth: req.signedCookies['ws_user'] ? true : false,
			title: app.get('title')
		});
	});
	// home page
	app.get('/home', function(req, res) {
		res.render('home', {
			auth: req.signedCookies['ws_user'] ? true : false,
			title: app.get('title')
		});
	});
	// about page
	app.get('/about', function(req, res) {
		res.render('about', {
			auth: req.signedCookies['ws_user'] ? true : false,
			title: app.get('title')
		});
	});
	// index page
	app.get('/index', function(req, res) {
		res.render('index', {
			auth: req.signedCookies['ws_user'] ? true : false,
			title: app.get('title')
		});
	});
	// show the login form
	app.get('/login', function(req, res) {
		res.render('login', {
			auth: req.signedCookies['ws_user'] ? true : false,
			message: req.flash('info'),		
			title: app.get('title')
		});
	})
	// process the login form
	app.post('/login', function(req, res) {
		var username = 'string' == typeof req.body.username ? req.body.username : '';
		var password = 'string' == typeof req.body.password ? req.body.password : '';
		auth.login(username, password, function (err, user, info) {
			if (info) {
				req.flash('info', info);
				res.redirect('/login');	
			}
			if (user) {
				var minutes = 60000 * 60;
				res.cookie('ws_user', user, {  maxAge: minutes, signed: true });
//				res.cookie('ws_user', user, {  maxAge: 60000, secret: '652725', signed: true });
				switch (user.uid) {
					//case 1000: admin user select aps
					case '1001':	// wsadmin
						res.redirect('/index');
						break;
					case '1002':	// service sms
					case '1005':	// admin smsadmin
						res.redirect('/kamla/index');
						break;
					case '1003':	// service Estapar
						//res.send('<h1>I-Park Florianopolis</h1><p>Sotefin Web Service : Reserved space, under construction.</p><a href="/logout">Back</a>');
						res.redirect('/ipark/index');
						break;
					case '1004':	// service samson
					case '1006':	// admin samsonadmin
						res.redirect('/ibank/index');
						break;
					case '1007':	// service parkomat
					case '1007':	// admin
						res.redirect('/arlozorov/index');
						break;
				}
			}
		});
	});
	/*
	app.post('/login', auth.authenticate('local-login', {
		successReturnToOrRedirect : '/', 	// redirect to the secure profile section
		failureRedirect : '/login', 		// redirect back to the signup page if there is an error
		failureFlash : true 				// allow flash messages
	}));
	*/
	// logout
	app.get('/logout', function(req, res) {
		res.clearCookie('ws_user');
		res.redirect('/');
	});

};
