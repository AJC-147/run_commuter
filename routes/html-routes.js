//var path = require("path");
var passport = require("../config/passport");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

//  app.get("/", function(req, res) {
//    if (req.user) {
//      res.redirect("/members");
//    }
//    res.sendFile(path.join(__dirname, "../public/signup.html"));
//  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login"); //do we need to specify views/index?
  });

//  app.get("/members", isAuthenticated, function(req, res) {
//    res.sendFile(path.join(__dirname, "../public/members.html"));
//  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
};