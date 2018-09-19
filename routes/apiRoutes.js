var db = require("../models");

module.exports = function(app) {

  //get total_time on all projects. 
app.get("/api/sessions", function(req,res){ 

  // add all as json elements in api/sessions
  db.Session.findAll({
  }).then(function(jsonSession){
    res.json(jsonSession);
  });
  //sum the total time worked in the session.
  db.Session.sum("time_worked").then(function(totalSum) {

    console.log("\n the sum is " + totalSum);
    });
});

app.post("/api/admin/authenticateUser", function(req,res){
  var input = req.body;
  db.Staff.findOne({
    where: {
      staff_name: input.username,
      password: input.pass,
      staff_role: "Admin"
    }
  }).then(function(result){
   res.json(result); 
    
     
  })
});

app.post("/api/staff/authenticateUser", function (req, res){
  var input = req.body; 
  db.Staff.findOne({
    where: {
      staff_name: input.username,
      password: input.pass
    }
  }).then(function(result){
    res.json(result);
  })
})

app.post("/api/staff/duplicateUser", function(req,res){
  var input = req.body; 
  console.log(input); 
  db.Staff.count({
    where: {
      staff_name: input.username
    }
  }).then(function(result){
    res.json(result); 
    console.log("the result of the backend call: ",result); 
  })
})


app.get("/api/staff", function(req,res){
  db.Staff.findAll({
  }).then(function(jsonStaff){
    res.json(jsonStaff);
  });
});

app.get("/api/projects", function(req,res){

  var projectArray = []; 

  db.Project.findAll({
  }).then(function(jsonProject){
    for (var i = 0; i < jsonProject.length; i++) {
      projectArray.push(jsonProject[i].project_desc); 
    }

    res.json(jsonProject);

  });
});




// get total_time on specific projects  (duplicate api get)
// app.get("/api/sessions/:projectid/:otherid", function(req, res) {
//   var proj_id = req.params.projectid;

//   if (proj_id) { 
//     db.Session.sum("time_worked", {
//       where: 
//       {
//         ProjectId: proj_id 
//       }
//     }).then(function(timeByProjectId){

//       res.json(timeByProjectId); 
//     });
//   };
// }); 
//show all sessions on a given project: 

app.get("/api/sessions/:projectid", function(req,res) {
var proj_id = req.params.projectid; 
db.Session.findAll({
  where: 
    {
      ProjectId: proj_id
    }
}).then(function(result){ 
  //discuss how we want to be able to build all of these out. 
  var timeProject = []; 
  var totalTime = 0; 
  for (var i = 0; i < result.length; i++) {

  timeProject += result[i].dataValues
  totalTime += result[i].time_worked;
  console.log(result[i].dataValues)
  res.json(result); 

  
}
res.json(timeProject); 
console.log("total time worked on project: " + totalTime); 
console.log("time projcet: ", timeProject); 
console.log(timeProject); 
  })
})

//get all the sessions on a given project for a given staff member
app.get("/api/sessions/:staffid/:projectid", function(req,res){
  var proj_id = req.params.projectid;
  var staff_id = req.params.staffid;

  db.Session.findAll( {
    include: [db.Staff, db.Project],
    where: {
      ProjectId: proj_id, 
      StaffId: staff_id
    }
  }).then(function(result){

    totalTime = 0; 
    staffRate = result[0].dataValues.Staff.staff_rate; 
    staffName = result[0].dataValues.Staff.staff_name; 
    projectName = result[0].dataValues.Project.project_desc; 
    proj = result[0].dataValues.Project; 
    staf = result[0].dataValues.Staff; 
    newArray = []; 
    for (var i = 0; i < result.length; i++){
      totalTime += result[i].dataValues.time_worked;
  
    }
    res.json(result);
    console.log("=====");
    console.log("\n" + staffName + " has $" + (totalTime * staffRate) + ".00 billable hours for the Project: " + projectName);
  console.log("\nStaff Rate: $" + staffRate);
  console.log("\nTime Worked: " + totalTime + " hours")
  console.log("\nThere are currently " + (proj.expected_time - staf.total_time) + " hours of " + proj.expected_time + " hours left on the project");  
  console.log("\nYou are approximately $" + ((proj.expected_time - staf.total_time) * staffRate) + " under your budget");
  console.log("=====");
//can also get staff names working on a specific project. 
});

});

//get total_time on specific projects for a specific staff member
// app.get("/api/sessions/:staffid/:projectid", function(req, res) {
//   var proj_id = req.params.projectid;
//   var staff_id = req.params.staffid;
  
//   db.Session.sum("time_worked", {
//     where: {
//       ProjectId: proj_id, 
//       StaffId: staff_id
//     }
//   }).then(function(timeForStaffProj){
//     res.json(timeForStaffProj);

//   })
// });

//create staff members using info from front end
app.post("/api/staff", function(req,res) {

var staffInfo = req.body

  db.Staff.create(staffInfo).then(function(dbStaff){

    res.json(dbStaff); 
  });
}); 

//adds new projects to database/json
app.post("/api/projects", function(req,res){

  var projectInfo = req.body

  db.Project.create(projectInfo).then(function(dbProject){
    res.json(dbProject); 
  })
})

//end timer and add as a session. 
app.post("/api/sessions/", function(req, res){

  var sessionInfo = req.body;
  console.log("WELL WE MADE IT THIS FAR: "); 
  db.Session.create(sessionInfo).then(function(dbSession){
    res.json(dbSession);
  });
}); 


//update password
app.post("/api/passwordchange/", function(req, res) {
    var oldPass = req.body.oldPass
    var newPass = req.body.newPass;
    var newId = req.body.id;

    db.Staff

      db.Staff.update(
        { where:{ id: newId, password: oldPass}
        { password: newPass},

        }).then(function(result){
          res.json(result);
        })
})
          

//will need to track total hours worked on a specific project. 


}; 

