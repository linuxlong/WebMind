//author: Longer
//Use module ORM
var settings = require('../config/settings');

module.exports = {
	list : function( req,res,next ){
		req.models.user.find( function( err, users ){
			if( err ){ throw err; }
			res.render( 'users', { users : users } );
		});
	},
	get : function( req,res,next ){
		var id = req.params.id;
		console.log( "user id:" + id );
		if( id ){
			req.models.user.get( id, function(err,userVo ){
				res.render( 'userAdd', { userVo : userVo } );
			});		
		} else {
			var userVo = { id : "",name : "",mail : "" }
			res.render( 'userAdd', { userVo : userVo } );
		}
	},
	add : function( req,res,next ){
		var userVo = req.body;
		var id = userVo.id
		if( id ){
			req.models.user.get( id, function(err,userPo ){
				userPo.save( userVo,function( err,vo ){
					console.log( "after save po:" + vo );
					res.render( 'userAdd', { userVo : vo } );
				}); 
			});		
		} else {
			req.models.user.create( userVo,function( err,userVo ){
				console.log( userVo );
				res.render( 'userAdd', { userVo : userVo } );
			});
		} 
	},
    del : function( req,res,next ){
		var id = req.params.id;
		req.models.user.get( id, function(err,userPo ){
			var users = [];
			if( userPo  ){
				userPo.remove( function( err ){
					if( err ) throw err;
					res.render( 'users', { users : users } );
				});
			} else {
				res.render( 'users', { users : users } );
			}
		});		
	}
};
