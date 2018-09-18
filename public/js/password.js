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
                location.href="/admin";
            } else { 
                alert("Please enter a proper username and password"); 
            }
        })    

    }; 
    
}); 
