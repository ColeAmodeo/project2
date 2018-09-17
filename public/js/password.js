$(document).ready(function(){

    var db = require("../../models")

    
    $(document).on("click", "password", getPassword);
    
    
    function getPassword() {

        var username = $("#username").replace(/\s+/g, ''); 
        var pass = $("#password").val(); 

        $.get("/api/staff/", function(req,res){

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
