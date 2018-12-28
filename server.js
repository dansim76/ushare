//initialize Node.js package

var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');

var publicPath = path.join(__dirname,"client/public")


var env = require("dotenv").load()


//initialize express.js server and port
var app = express();
var PORT = process.env.PORT || 8080;

//initialize sequelize models
var db = require('./models')

//data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//load static files
//app.use(express.static(publicPath))
app.use(express.static("public"))

//impmort routes
// require("./routes/user-routes.js")(app);
// require("./routues/api-routes.js")(app);

//start express.js server

models.sequelize.sync({force: false}).then(function(){
 app.listen(PORT, function(err){
     if(!err){
         console.log("app is listening")
     }
     else{
        console.log(err);
     }
 })


})


app.listen(PORT,() => 
console.log('app is listening on port ${PORT}')
);
// db.sequelize.sync().then(function(){
//     app.listen(PORT,() => 
//         console.log('app is listening on port ${PORT}')
//     );
// })
