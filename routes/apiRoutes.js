var db = require("../models");

module.exports = function(app) {

  //get total_time on a all projects. 
  app.get("/api/sessions", function(req,res){ 
    console.log(req);

    db.Session.sum("time_worked").then(sum => {
      console.log("\n the sum is " + sum);
    });
  })
 //ADMIN
  //admin GET calls

  //get total_time on specific projects 
app.get("/api/sessions/:projectid", function(req, res) {
  var proj_id = req.params.projectid;

  if (proj_id) { 
    db.Session.sum("time_worked", {
      where: {
        ProjectId: proj_id 
      }
    }).then(function(dbSession){
      res.json(dbSession); 
  });

  } 
})

//get total_time on specific projects for a specific staff member
app.get("/api/sessions/:staffid/:projectid", function(req, res) {
  var proj_id = req.params.projectid;
  var staff_id = req.params.staffid;
  
  db.Session.sum("time_worked", {
    where: {
      ProjectId: proj_id, 
      StaffId: staff_id
    }
  }).then(function(dbSession){
    res.json(dbSession)
  })
});

}; 

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



//   app.get("/api/examples", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };
