var db = require("../models");
var passport = require("../config/passport");



module.exports = function(app) {
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
      res.json("/members");
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