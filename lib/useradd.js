var redis = require("redis")
,  client = redis.createClient()
,  crypto = require('crypto');
var argv = process.argv.slice(2);

var user = argv[0];
var pass = argv[1];
var role = argv[2];

if (!user || !pass || !role) throw new Error("pass arguments username password role");

userAdd (user, pass, role);
	
function userAdd (username, password, role) {
	// to do check if username is already present
	client.get('global:nextUserId', function (err, key) {
		if (!key) client.set('global:nextUserId', '1000');
		client.incr('global:nextUserId');	// get unique ID
		client.get('global:nextUserId', function (err, uid) {
			hash('foobar', function(err, salt, hash){
				if (err) throw err;
				client.set('uid:' + uid + ':username', username);
				client.set('uid:' + uid + ':password', password);
				client.set('uid:' + uid + ':role', role);
				//client.set('uid:' + uid + ':salt', salt);
				//client.set('uid:' + uid + ':hash', hash);
				client.set('username:' + username + ':uid', uid); // useful to get user ID from username
				client.set('uid:' + uid + ':auth', salt);
				client.set('auth:' + salt, uid);
				client.keys('*', function (err, keys) {
					if (err) throw err;
					keys.forEach(function(key, index) {
						client.get(key, function (err, value) {
							if (err) throw err;
							console.log(index, key, value);
							process.exit(0);
						});
					});
				});
			});			
		});
	});
};

/**
 * Bytesize.
 */
var len = 128;

/**
 * Iterations. ~300ms
 */
var iterations = 12000;

/**
 * Hashes a password with optional `salt`, otherwise
 * generate a salt for `pass` and invoke `fn(err, salt, hash)`.
 *
 * @param {String} password to hash
 * @param {String} optional salt
 * @param {Function} callback
 * @api public
 */

function hash (pwd, salt, fn) {
	if (3 == arguments.length) {
		crypto.pbkdf2(pwd, salt, iterations, len, function(err, hash){
			fn(err, hash.toString('base64'));
		});
	} else {
		fn = salt;
		crypto.randomBytes(len, function(err, salt){
			if (err) return fn(err);
			salt = salt.toString('base64');
			crypto.pbkdf2(pwd, salt, iterations, len, function(err, hash){
				if (err) return fn(err);
				fn (null, salt, hash.toString('base64'));
			});
		});
	}
};



