$(document).ready(function(){

var username = ""; 
var pass = ""; 

    $("#admin").on("click", getPassword);
    $("#staff").on("click", getPass);

    //staff login 
    function getPass(event){
        event.preventDefault(); 

    username = $("#username1").val(); 
    pass = $("#password1").val(); 
    var authInput = { username: username, pass: pass };

        $.ajax({
            type: "POST",
            url: "/api/staff/authenticateUser",
            data: authInput

        }).then(function(user){
            if (user) {
                sessionStorage.setItem("staffid", user.id);
                location.href="/staff"
            } else {
                alert("please enter a proper username and password");
            }
        })
    }
    //admin login
    function getPassword(event){
        event.preventDefault(); 

        username = $("#username").val(); 
        pass = $("#password").val(); 
        var authInput = { username: username, pass: pass}; 

        console.log("Auth input: ", authInput)

        $.ajax({
        type: "POST",
        url: "/api/admin/authenticateUser",
        data: authInput
        }).then(function(user){

            if (user) {
                sessionStorage.setItem("adminId", user.id);
                location.href="/admin";

            } else { 
                alert("Please enter a proper username and password"); 
            }
        })    

    }; 
    
    $(document).on("click", "#submitPassword", resetPassword);

    function resetPassword(e) {
        e.preventDefault();

        var userId = sessionStorage.getItem("adminId")
        var oldPass = $("#oldPassword").val(); 
        var newPass1 =$("#newPassword1").val(); 
        var newPass2 = $("#newPassword2").val(); 

        var input = {
            oldPass: oldPass, 
            newPass: newPass1, 
            id: userId
        }
        console.log("INPUT REQ: ", input); 
        
        if (newPass1 !== newPass2) {
            
            alert("Your new password doesn't match!")

        } else {

            $.ajax({
                type: "POST",
                url: "/api/passwordchange/",
                data: input
                
            }).then(function(result){
                if (result) {
                alert("New password has been reset");
                $("#myModalPassword").modal("toggle"); 

                } else {
                    alert("Old password is incorrect")
                }
            })
        }
    }
        
}); 
