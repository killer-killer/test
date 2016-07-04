var mongoose=require('mongoose'),
	Schema=mongoose.schema,
	registerSchema=	new Schema({
		userName:String,
		email:String,
		password:String
	}),
	register=mongoose.model('register',registerSchema);
module.exports=register;