var orm      = require('orm');
var settings = require('../config/settings');
var user = require( './userDefine' );
var mind = require( './mindDefine' );

function setup(db, callback) {
	db.define( user.table, user.fields );
	db.define( mind.table, mind.fields );
	return callback(null, db);

}
var connection = null;
module.exports = function (callback) {
	if( connection != null ) callback( null,connection );
  orm.connect(settings.database, function (err, db) {
    if (err) return callback(err);
	connection = db;
    db.settings.set('instance.returnAllErrors', true);
    setup( connection , callback);
  });
};
