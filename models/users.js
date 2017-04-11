const mongoose   = require('mongoose');
const bcrypt     = require('bcryptjs');
const config     = require('../config/database');


// schema and models
const UserSchema  = mongoose.Schema({
		name: {
			type: String
		},

		email : {
			type:String,
			require:true
		},

		username: {
			type:String,
			reuire:true
		},

		password : {
			type:String,
			require:true
		}
});

const User  = mongoose.model("User", UserSchema);
module.exports = User;


// finding user by ID function
module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
};

//finding user by name function
module.exports.getUserByUsername = function(name, callback){
    User.findOne({username:name}, callback);
};

//hash password and save user to the db
module.exports.addUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        if(err) throw err;
	        newUser.password = hash;
	        newUser.save(callback); 
	    });
	});
};