$(document).ready(function(){

    var db = require("../../models")

    var username = $("email").replace(/\s+/g, ''); 
    var pass = $("password")

    $(document).on("click", "password", getPassword);


    function getPassword() {
        $.get("/api/login/staff/:id", function(req,res){

            db.Staff.findOne({
                where: { 
                    staff_name: username
                }
            }).then(function(user){
                if (user.password === pass) {
                res.sendFile(path.join(__dirname, "../staff.html"))
                } else {
                    alert("Please enter a proper username and password"); 
                }
            })
       
        })
    }
}); 
