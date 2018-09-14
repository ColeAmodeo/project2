var db = require("../models");

module.exports = function(app) {

  //get total_time on all projects. 
app.get("/api/sessions", function(req,res){ 
  console.log(req);

  db.Session.sum("time_worked").then(totalSum => {
    console.log("\n the sum is " + totalSum);
  });
});


// get total_time on specific projects  (duplicate api get)
app.get("/api/sessions/:projectid/:otherid", function(req, res) {
  var proj_id = req.params.projectid;

  if (proj_id) { 
    db.Session.sum("time_worked", {
      where: 
      {
        ProjectId: proj_id 
      }
    }).then(function(timeByProjectId){
      res.json("ProjectID: " + timeByProjectId); 
    });
  };
}); 
//show all sessions on a given project: 

app.get("/api/sessions/:projectid", function(req,res) {
var proj_id = req.params.projectid; 
db.Session.findAll({
  where: 
    {
      ProjectId: proj_id
    }
}).then(function(res){ 
  //discuss how we want to be able to build all of these out. 
  var timeProject = []; 
  var totalTime = 0; 
  for (var i = 0; i < res.length; i++) {

  timeProject += res[i].dataValues
  totalTime += res[i].time_worked;
  console.log(res[i].dataValues)

  }
console.log("total time worked on project: " + totalTime); 

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

//can also get staff names working on a specific project. 
});

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
//create staff members using info from front end
app.post("/api/staff", function(req,res) {

  db.Staff.create(req.body).then(function(dbStaff){
    res.json(dbStaff); 
  });
}); 
//create new project using info from front end 
app.post("/api/project", function(req,res){

  db.Project.create(req.body).then(function(dbProject){
    res.json(dbProject); 
  })
})

//update password
app.put("/api/staff/passwordchange/:id", function (req,res) {
    var newPass = req.body.password
    db.Staff.update(
      {
        password: newPass
      },
      {
        where:{ id: req.params.id }
      })

})




}; 


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
