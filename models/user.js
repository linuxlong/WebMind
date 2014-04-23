var UserDefine = require( "./userDefine" );
module.exports = function( db, callback){
	var User = db.define( UserDefine.table, UserDefine.fields );
	return callback();
};
