const express = require('express');
const router  = express.Router();

//register
router.get('/register', function(req, res, next){
	res.send("REGISTER");
});

//auth
router.post('/autehticate', function(req, res, next){
	res.send("authenticate");
});

//profile
router.get('/profile', function(req, res, next){
	res.send("profile");
});

//validate
router.get('/validate', function(req, res, next){
	res.send("validate");
});

module.exports = router;