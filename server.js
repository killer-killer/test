var express=require("express"),
	app=express(),
	path=require('path');

app.use(express.static(path.join(__dirname,'/public/')));

require('./server/config/express')(app);
require('./server/config/routes').init(app);

app.listen('1111',function(req,res) {
	console.log("server listening at 1111");
});