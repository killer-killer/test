var express=require("express"),
	mongoose=require("mongoose"),
	config=require('./config');

module.exports=function(app){
	var db=mongoose.connection;
	mongoose.connect('mongodb://'+config.db.host+'/'+config.db.name);
	db.on('error',function(){
		console.log('could not connect to database');
	});
	db.once('open',function(){
		console.log('connected to database successfully');
	});
}