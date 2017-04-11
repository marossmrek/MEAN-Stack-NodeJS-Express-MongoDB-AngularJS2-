const express  = require('express');
const router   = express.Router();
const passport = require('passport');
const jwt      = require('jsonwebtoken');
const User     = require('../models/users');

//register
router.post('/register', function(req, res, next){
	
	let newUser = new User({
		name:req.body.name,
		email:req.body.email,
		username:req.body.username,
		password:req.body.password
	});

	User.addUser(newUser, function(err, user){
		if(err){
			res.json({success: false, msg:"User registration failed"});
		} else {
			res.json({success:true, msg:"Registration success"});
		}
	});
});

//auth
router.post('/autehticate', function(req, res, next){
	res.send("authenticate");
});

//profile
router.get('/profile', function(req, res, next){
	res.send("profile");
});

module.exports = router;