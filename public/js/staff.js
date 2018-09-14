$(document).ready(function(){

//get variables for creating new staff

var staffName = "Kevin Murphy"
// $("#staffName")
var staffRole = "Developer"
// $("#staffRole")
var staffRate = 55.00
// $("#staffRate")
var password = "newpassword"
// $("#password")

//the listener will create an object on click with the information above
$(document).on("submit", "#staffSubmitBtn", staffSubmission); 

function staffSubmission(event) {
    event.preventDefault(); 

    if(staffName.length === 0 || staffRole.length === 0 || staffRate.length === 0 || password.length === 0) {
        alert("You must add complete details in order to create a staff member");
    } else {
        newStaff({
            staff_name: staffName, 
            staff_role: staffRole, 
            staff_rate: staffRate,
            password: password
        });
    }

}
function newStaff(staffInfo) {
    //this will post all data from above function 
    $.post("/api/staff", staffInfo)
    //once there has been a post, we will need to getStaff again which will again pull all staff from via the api
    .then(console.log("it made it to this point, which is great"))



}

// function getStaff() {
//     $.get("api/staff", function(res){
//         (console.l)
//     })
//     )
// }

//need to create a function that creates rows for all the inputs. 


staffSubmission(); 
console.log("well at least something happened STAFF.js file, and thats good!")

})