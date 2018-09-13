var db = require("../models");

module.exports = function(app) {

  //get total_time on all projects. 
  app.get("/api/sessions", function(req,res){ 
    console.log(req);

    db.Session.sum("time_worked").then(totalSum => {
      console.log("\n the sum is " + totalSum);
    });
  })

  //get total_time on specific projects 
// app.get("/api/sessions/:projectid", function(req, res) {
//   var proj_id = req.params.projectid;

//   if (proj_id) { 
//     db.Session.sum("time_worked", {
//       where: {
//         ProjectId: proj_id 
//       }
//     }).then(function(timeByProjectId){
//       res.json("ProjectID: " + timeByProjectId); 
//   });

//   } 

//show all sessions on a given project: 

app.get("/api/sessions/:projectid", function(req,res) {
var proj_id = req.params.projectid; 
db.Session.findAll({
  where: 
    {
      ProjectId: proj_id
    }
}).then(function(res){ 
  var timeProject = []; 
  for (var i = 0; i < res.length; i++) {
  console.log(res[i].dataVAlues)
  }


})
})

//get all the sessions on a given project for a given staff member
app.get("/api/sessions/:staffid/:projectid", function(req,res){
  var proj_id = req.params.projectid;
  var staff_id = req.params.staffid;

  db.Session.findAll("time_worked", {
    where: {
      ProjectId: proj_id, 
      StaffId: staff_id
    }
  }).then(function(timeByStaffForProj){
  res.json(timeByStaffForProj)
}); 

//get total_time on specific projects for a specific staff member
app.get("/api/sessions/:staffid/:projectid", function(req, res) {
  var proj_id = req.params.projectid;
  var staff_id = req.params.staffid;
  
  db.Session.sum("time_worked", {
    where: {
      ProjectId: proj_id, 
      StaffId: staff_id
    }
  }).then(function(timeForStaffProj){
    res.json(timeForStaffProj)
  })
});

app.post("api/posts", function(req,res) { 
  db.Staff
})

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
