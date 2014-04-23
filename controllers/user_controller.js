//author: Longer
//Use module ORM
var settings = require('../config/settings');

module.exports = {
	list : function( req,res,next ){
		req.models.user.find( function( err, users ){
			if( err ){
				throw err;
			}
			res.render( 'users', { users : users } );
		});
	},
	add : function( req,res,next ){

	},
	addPost : function( req,res,next ){

	},
	modify : function( req,res,next ){

	}
};
