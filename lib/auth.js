/**
 * Module dependencies.
 */
var redis = require('redis');
var hash = require('./pass.js').hash;

var client = redis.createClient({
	port: 6379,			// default
	host: '127.0.0.1'	// localhost
});

/**
 * Authentication with username and a password
 *
 * @param {String} username
 * @param {String} password
 * @param {Function} callback
 * @api public
 */

exports.login = function (username, password, fn) {
	if (3 == arguments.length) {
		client.get('username:' + username + ':uid', function (err, uid) {
			if (err) return fn(err);
			if (!uid) return fn(null, false, 'No user found.');
			client.get('uid:' + uid + ':password', function (err, real_password) {
				if (err) return fn(err);
				if (password != real_password) return fn(null, false, 'Oops ! wrong password.');
				client.get('uid:' + uid + ':auth', function (err, secret) {
					if (err) return fn(err);
					fn (null, { uid: uid, secret: secret });
				});
			});
		});
	}
};
/**
 * Authorization
 *
 * @param {Array} roles - user roles
 * @api public
 */
 
exports.isAuthorized = function (uid, fn) {
	client.get('uid:' + uid + ':role', function (err, role) {
		if (err) return fn(err);
		var authorization = role != null ? role : 'service';		
		fn (null, { role: authorization != 'admin' ? 'disabled' : '' });
	});
}

exports.isAuthenticated = function (roles) {
	var url_login = '/login';
	var url_logout = '/logout';
	return function(req, res, next) {
		if (!req.signedCookies['ws_user']) {
			return res.redirect(url_login);		
		}
		var cuid = req.signedCookies['ws_user'].uid;
		var cauth = req.signedCookies['ws_user'].secret;
		client.get('auth:' + cauth, function (err, uid) {
			if (err) return fn(err);
			client.get('uid:' + uid + ':auth', function (err, auth) {
				if (err) return fn(err);
				if (auth != cauth) return res.redirect(url_logout);
				userRole(uid, roles, function (authorized) { 
					if (!authorized) return res.redirect(url_logout);
					//userInfo(uid);
					next();
				});
			});
		});
	}
};
/**
 * Authorization with uid and pid
 *
 * @param {Integer} uid - user Id
 * @param {Integer} pid - park Id
 * @api public
 */
 
function userRole (uid, roles, done) {
	var results = [];
	roles.forEach(function(role) {
		client.sismember('uid:' + uid + ':roles', role, function (err, authorized) {
			results.push(authorized);
			//console.log(results.length, roles.length);
			if (results.length == roles.length) {
				//console.log('done', results);
				done(results.some(isAuthorized));
			};
			
		})
	});
}

function isAuthorized (element, index, array) {
	if (element) return element;
}

/**
 * Load user info
 *
 * @param {Integer} uid - user Id
 * @api public
 */

function userInfo (uid) {
	client.multi()
		.get('uid:' + uid + ':username')
		.get('uid:' + uid + ':password')
		.exec(function (err, replies) {
			replies.forEach(function (reply, index) {
				console.log('Reply ' + index + ': ' + reply.toString());
			});
		});
}