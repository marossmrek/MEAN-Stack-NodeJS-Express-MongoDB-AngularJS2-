const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const cors       = require('cors');
const passport   = require('passport');
const mongoose   = require('mongoose');
const users      = require('./routes/users.js');
const config     = require('./config/database.js');

// express app inicialization
const app = express();

//connection to db
mongoose.connect(config.database);
//on connected
mongoose.connection.on('connected', function(){
	console.log("Connection on db " + config.database);
});
//on error
mongoose.connection.on('error', function(e){
	console.log("database error " + e);
});

//CORS middleware
app.use(cors());

//BodyParser middlewar
app.use(bodyParser.json());

//set up routing
app.use('/users',users); 

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//start, dummy request to homepage
app.get('', function(req, res){
	res.send("Invalid endpoint");
})

//server listen 
app.listen(3000, function(){
	console.log("App listen on port number 3000");
})