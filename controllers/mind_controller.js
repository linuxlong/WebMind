//author: Longer
//Use MySQL origin SQL statement
var express = require( 'express' );
var bodyParser = require('body-parser');
var mysql = require( 'mysql' );
var router = express.Router();
var pool = mysql.createPool({
	    host : 'sendo',
	    user : 'webmind',
	    password : 'webmind',
	    database : 'webmind'
	});

function mapping( rows,fields ){
	var mindRows = [];
	for( var i = 0; i < rows.length; i++ ){
	    var oneMind = {};
	    for( var j = 0; j < fields.length; j++ ){
		var fieldObj = fields[j];
		var fieldName = fieldObj["name"];
		var fieldVal = rows[i][ fieldName ];
		oneMind[ fieldName ] = fieldVal; 
	    }
	    mindRows.push(oneMind);
	}
    return mindRows;
}

function list( req,res ){
    var sql = "select id,name,date_format(create_time,'%Y-%m-%d %k:%i:%s') create_time, date_format(modify_time,'%Y-%m-%d %k:%i:%s') modify_time,context from minds";
    pool.query( sql, function( err,rows,fields ){
	if( err ) throw err;
		var mindRows = mapping( rows,fields );
		res.render( 'minds',{ mindRows : mindRows });		
    });
}


function add( req,res ){
	var mindVo = { id : "",name : "",context : ""};
	res.render( 'mindAdd', {mindVo:mindVo} );		
}

function addPost( req,res ){
    console.log( "/add" );
    var mindVo = req.body;
    console.log( mindVo );
    var param = [];
    param.push( mindVo.name );
    param.push( mindVo.context );
    console.log( param );
    var sql = "insert into minds( name,context,create_time,modify_time) values( ?,?,now(),now() )";
    sql = mysql.format( sql,param );
    pool.query( sql,function( err,result ){
	if( err ) throw err;
	var mindRows = [];
	console.log( result );
	res.render( 'mindAdd',{ mindVo: mindVo });		
    });
    
}

function modify( req,res ){
    var id = req.params.id;
    if( id ){
	var sql = "select id,name,date_format(create_time,'%Y-%m-%d %k:%i:%s') create_time, date_format(modify_time,'%Y-%m-%d %k:%i:%s') modify_time,context from minds where id = ?";
	sql = mysql.format( sql, id );
	pool.query( sql,function( err,rows,fields ){
	    if( err ) throw err;
	    var mindRows = mapping( rows,fields );
	    var mindVo = mindRows[0];
	    console.log( mindVo );
	    res.render( 'mindAdd',{ mindVo: mindVo });		
	});
    } else {
	res.render( 'minds');		
    }
}

module.exports = {
	add : add,
	list : list,
	addPost : addPost,
	modify : modify
};
