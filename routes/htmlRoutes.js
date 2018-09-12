var db = require("../models");
var path = require("path")
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
  app.get("/staff", function(req, res) {
    res.sendFile(path.join(__dirname, "../staff.html"))
  })
};
