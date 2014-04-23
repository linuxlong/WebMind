var orm      = require('orm');
var settings = require('../config/settings');

function setup(db, callback) {
	db.load( './user',function(err){
		if( err ) callback( err );		
		return callback(null, db);
	});

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
