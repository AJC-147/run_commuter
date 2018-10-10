var express = require("express");
var router = express.Router();
var db = require("../models");

var passport = require("../config/passport");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app) {

app.get("/", function(req,res) {
    res.redirect("/login");
});

app.get("/runner", function(res,req) {
        db.Run.findAll({
            include: [db.Runner],
            order: [
                ["dateTime", "ASC"]
            ]
        }).then(function(dbRuns) {
            
            var data = {
                runs: dbRuns
            };
            return res.render("dashboard", data);
        });
    
});

};