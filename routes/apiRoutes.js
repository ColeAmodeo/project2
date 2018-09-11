var db = require("../models");

module.exports = function(app) {
 //ADMIN
  //admin GET calls

  // Get all examples

  //get all tracked time

  //get tracked time by service

  //get tracked time by staff member


//STAFF

 //staff GET calls 
  //your tracked time

  //staff PUT calls
  
  //start timer
  //end timer 
  //change project
  //change service



  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
