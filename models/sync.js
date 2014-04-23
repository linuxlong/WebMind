var orm = require( "orm" );
var mysql = require( "mysql" );
var Sync = require( "sql-ddl-sync" ).Sync;

var UserDefine = require( "./userDefine" );
var settings = require( "../config/settings" );
orm.connect( "mysql://webmind:webmind@sendo/webmind",function( err,db ){
	if( err ) throw err;	

	console.log( db );
	var driver = db.driver;

	var sync = new Sync({
		dialect : "",
		driver : driver,
		debug : function( err ){
			console.log( '> %s',text  );
		}
	});

	sync.defineCollection( UserDefine.table,UserDefine.fields );

	sync.sync( function( err ){
		if( err ){
			console.log( "> Sync Error" );
		} else {
			console.log( "> Sync Done" );
		}	
	});
});
