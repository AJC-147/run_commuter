// ______________________________________________________________________________
// DEPENDENCIES - npm packages + API keys
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//require("dotenv").config();  
var express = require("express");
var exphbs = require("express-handlebars");
var serveStatic = require("serve-static")
var bodyParser = require("body-parser");
var db = require("./models");

//var path = require("path");
//var keys = require("./keys.js");
//var request = require("request");
//var google = (keys.google.id);
//var darksky = (keys.darksky.id);



// ______________________________________________________________________________
// EXPRESS - server setup
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var app = express(); //we're making an express server
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 3000;

// Express app will handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//previous build static server below
//app.use(serveStatic("./public/", {"index": ["index.html"]}));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//______________________________________________________________________________
//ROUTER - Connecting to .js data in routing folder
// ----
require("./controllers/runnerController")(app);
//require("./controllers/runController")(app);
//app.use(route2);
//app.use(route1);


// ______________________________________________________________________________
//LISTENER - start server + Sequelize connection
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

db.sequelize.sync().then(function() { 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
});