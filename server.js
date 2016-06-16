var express=require("express"),
	app=express(),
	path=require('path');

app.use(express.static(path.join(__dirname,'/public/')));

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'/public/index.html'));
});

app.listen('1111',function(req,res) {
	console.log("server listening at 1111");
})