$(document).ready(function(){
    
    $("#inputForm").on("submit", getPassword);
    
    
    function getPassword(event){
        var username = $("#username").val(); 
        var pass = $("#password").val(); 
        var authInput = { username: username, pass: pass}; 
        console.log(username, pass, authInput); 
         event.preventDefault(); 

        $.ajax({
        type: "POST",
        url: "/api/staff/authenticateUser",
        data: authInput
        }).then(function(user){

            if (user) {
                sessionStorage.setItem("staffid", user.id);
                console.log(user.id); 
                window.location.href = "localhost:8000/admin.html";
            } else { 
                alert("Please enter a proper username and password"); 
            }
        })    

}; 



    
//     function getPassword() {
//         console.log("PW: function getPassword has been run")
        

//             console.log("PW: get call run")
//             db.Staff.findOne({
//                 where: { 
//                     staff_name: username
//                     password: password
//                 }
//             }).then(function(user){
//                 console.log(user); 
//                 if (user.password === pass) {

//                 res.sendFile(path.join(__dirname, "../staff.html"))
//                 sessionStorage.setItem(user.staff_id);

//                 } else {
//                     alert("Please enter a proper username and password"); 
//                 }
//             })
       
//         })
//     }
}); 
