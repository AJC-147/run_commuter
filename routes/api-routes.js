var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    
    app.post("/api/login",  passport.authenticate("local"), function (req, res) {
        res.json("/members");
    });
    
    app.post("/api/create_runner", passport.authenticate("local"), function (req, res) {
        res.json("/create");
    });
    
    app.post("/api/runner_created", isAuthenticated, function (req, res) {
        res.json("/members");
    });


    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            res.json({});
        } else {
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });
    
    app.get("/api/runner_data", function (req, res) {
        if (!req.user || !req.runner) {
            res.json({});
        } else { 
            console.log(req.body);
            res.json({
                email: req.user.email,
                id: req.user.id,
                firstName: req.runner.firstName,
                lastName: req.runner.lastName,
                city: req.runner.city,
                sex: req.runner.sex,
                dob: req.runner.dob
            });
        }
    });

};
