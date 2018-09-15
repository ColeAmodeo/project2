var db = require("../models");

module.exports = function(app) {

  //get total_time on all projects. 
app.get("/api/sessions", function(req,res){ 
  console.log(req);
// add all as json elements in api/sessions
  db.Session.findAll({
  }).then(function(jsonSession){
    res.json(jsonSession);
  });
  //sum the total time worked in the session.
  db.Session.sum("time_worked").then(totalSum => {
    console.log("\n the sum is " + totalSum);
  });
});

app.get("/api/staff", function(req,res){
  db.Staff.findAll({
  }).then(function(jsonStaff){
    res.json(jsonStaff);
  });
});

app.get("/api/projects", function(req,res){
  db.Project.findAll({
  }).then(function(jsonProject){
    res.json(jsonProject)
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

  console.log("REQ BODY: " + req.body); 
  
  db.Staff.create(req.body).then(function(dbStaff){
    console.log("REQ BODY: " + req.body); 
    res.json(dbStaff); 
  });
}); 



//end timer and add as a session. 
app.post("/api/session/", function(req, res){
  
  db.Session.crate(req.body).then(function(dbSession){
    res.json(dbSession);
  });
}); 

//update password
app.put("/api/staff/passwordchange/:id", function(req) {
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

