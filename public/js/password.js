$(document).ready(function(){

    var db = require("../../models")

    var username = $("email").replace(/\s+/g, ''); 
    var password = $("password")

    $(document).on("click", "password", getPassword);


    function getPassword() {
        $.get("/api/login/staff/:id", function(req,res){

            db.Staff.findOne({
                where: { 
                    staff_id: req.params.id
                }
            }).then(function(user){
                if (req.body.password === password) {
                res.sendFile(path.join(__dirname, "../staff.html"))
                } else {
                    alert("Please enter a proper username and password"); 
                }
            })
       
        })
    }

    app.get("/api/login/staff/:id", function(req,res) {
 
        db.Staff.findOne({
          where: {
            staff_id: req.params.id
          }
        }).then(function(user){
          if (req.body.password === )
        })
      
      })
       
});