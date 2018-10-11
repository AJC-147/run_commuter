var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/members");
  });
 
    //can be in controller
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });
    
    
    app.get("/members", function(req, res) {
  db.User.findAll()
    .then(function(dbUser) {
      var data = {
            User: dbUser,
//            runners: dbrunners,
//            runs: dbruns
        };
      return res.render("members", data);
    });
});


  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    }
    else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

};
