var passport = require("../config/passport");
var path = require("path");
var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function (app) {

    app.post("/api/signup", function (req, res) {
        console.log(req.body);
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function () {
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            console.log(err);
            res.json(err);
        });
    });


    app.get("/members", function (req, res) {
        db.User.findAll({
                where: {
                    email: req.user.email
                }
            })
            .then(function (dbUser) {
                console.log(dbUser);
                var data = {
                    User: dbUser
                    //            runners: dbrunners,
                    //            runs: dbruns
                };
                console.log(req.user)
                return res.render("members", data);

                // INCLUDE ERROR HANDLING: IF NO DATA, REDIRECT TO LOGIN

            });
    });


    //WORKING ROUTE from runController.js in old project files
    //    app.get("/runner", function(res,req) {
    //        db.Run.findAll({
    //            include: [db.Runner],
    //            order: [
    //                ["dateTime", "ASC"]
    //            ]
    //        }).then(function(dbRuns) {
    //            
    //            var data = {
    //                runs: dbRuns
    //            };
    //            return res.render("dashboard", data);
    //        });
    //    
    //});

};
