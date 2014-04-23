var path       = require('path');

var settings = {
  path       : path.normalize(path.join(__dirname, '..')),
  port       : process.env.NODE_PORT || 3000,
  database   : {
    protocol : "mysql", // or "mysql"
    query    : { pool: true },
	pool	 : true,
    host     : "sendo",
    database : "webmind",
    user     : "webmind",
    password : "webmind"
  }
};

module.exports = settings;
