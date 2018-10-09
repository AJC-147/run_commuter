// ______________________________________________________________________________
// DEPENDENCIES - npm packages + API keys
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
require("dotenv").config();  
var express = require("express");
var exphbs = require("express-handlebars");
var serveStatic = require("serve-static")
var bodyParser = require("body-parser");
//var db = require("./models"); //comment this out before database gets connected

//var path = require("path");
//var keys = require("./keys.js");
//var request = require("request");
//var google = (keys.google.id);



// ______________________________________________________________________________
// EXPRESS - server setup
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var app = express(); //we're making an express server
var PORT = process.env.PORT || 3000;

// Express app will handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//______________________________________________________________________________
//ROUTER - Connecting to .js data in routing folder
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//previous build static server below
//app.use(serveStatic("./public/", {"index": ["index.html"]}));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ______________________________________________________________________________
//LISTENER - start server + Sequelize connection
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//UNCOMMENT BELOW ONCE DB CONNECTED
//db.sequelize.sync().then(function() { 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
//}); // END OF DB CONNECTION