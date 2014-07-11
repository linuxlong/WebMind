//author: Longer
//Use module ORM
var settings = require('../config/settings');

module.exports = {
	list : function( req,res,next ){
		req.models.mind.find( function( err, minds ){
			if( err ){ throw err; }
			res.render( 'minds', { minds : minds } );
		});
	},
	get : function( req,res,next ){
		var id = req.params.id;
		console.log( "mind id:" + id );
		if( id ){
			req.models.mind.get( id, function(err,mindVo ){
				res.render( 'mindAdd', { mindVo : mindVo } );
			});		
		} else {
			var mindVo = { id : "",name : "",mail : "" }
			res.render( 'mindAdd', { mindVo : mindVo } );
		}
	},
	add : function( req,res,next ){
		var mindVo = req.body;
		var id = mindVo.id
		if( id ){
			req.models.mind.get( id, function(err,mindPo ){
				mindPo.save( mindVo,function( err,vo ){
					console.log( "after save po:" + vo );
					res.render( 'mindAdd', { mindVo : vo } );
				}); 
			});		
		} else {
			req.models.mind.create( mindVo,function( err,mindVo ){
				console.log( mindVo );
				res.render( 'mindAdd', { mindVo : mindVo } );
			});
		} 
	},
    del : function( req,res,next ){
		var id = req.params.id;
		req.models.mind.get( id, function(err,mindPo ){
			var minds = [];
			if( mindPo  ){
				mindPo.remove( function( err ){
					if( err ) throw err;
					res.render( 'minds', { minds : minds } );
				});
			} else {
				res.render( 'minds', { minds : minds } );
			}
		});		
	},
	edit : function( req,res,next ){
		var id = req.params.id;
		res.render( 'mindInfo.html' ); 
	}
};
