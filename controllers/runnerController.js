var db = require("../models");
var passport = require("../config/passport");
var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");
//var data = {
//  // runners: dbrunners,
//  // runs: dbruns
//}; //empty object or can add stuff to it



module.exports = function(app) {
    
      // app.get("/", function(req, res) {
  //   if (req.user) {
  //     res.redirect("/dashboard");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/dashboard");
    }
    //res.sendFile(path.join(__dirname, "./"));
    res.render("login"); //yes, only need the html page because nothing custom here
  });

  app.get("/dashboard", isAuthenticated, function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/dashboard.html"));
    res.render("dashboard", { athlete: data }); //see var data above, 
  });
    
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
      res.json("/dashboard");
    });
  
    app.post("/api/signup", function(req, res) {
      console.log(req.body);
      db.Runner.create({
        email: req.body.email,
        password: req.body.password
      }).then(function() {
        res.redirect(307, "/api/login");
      }).catch(function(err) {
        console.log(err);
        res.json(err);
      });
    });
  
    app.get("/logout", function(req, res) {
      req.logout();
      res.redirect("/");
    });
  
    app.get("/api/runner_data", function(req, res) {
      if (!req.runner) {
        res.json({});
      }
      else {
        res.json({
          email: req.runner.email,
          id: req.runner.id
        });
      }
    });
  
  };