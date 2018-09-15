$(document).ready(function(){

//get variables for creating new staff
var staffId = 500;
var staffName = "Kevin Christian"
// $("#staffName")
var staffRole = "Soul Plane Pilot"
// $("#staffRole")
var staffRate = 100.00
// $("#staffRate")
var password = "newpassword"
// $("#password")
var totalTime = 1000; 
//the listener will create an object on click with the information above
//will likely need to be a click button
$(document).on("click", "#staffSubmitBtn", staffSubmission);

function staffSubmission() {
    // event.preventDefault();

    if(staffName.length === 0 || staffRole.length === 0 || staffRate.length === 0 || password.length === 0) {
        alert("You must add complete details in order to create a staff member");
    } else {
        newStaff({
            staff_id: staffId,
            staff_name: staffName,
            staff_role: staffRole,
            staff_rate: staffRate,
            total_time: totalTime, 
            password: password
        });
    }

}
function newStaff(staffInfo) {
    $.post("/api/staff", staffInfo)
    //once there has been a post, we will need to getStaff again which will again pull all staff from via the api
    .then(getStaff, console.log("it made it to this point, which is great"))

}

//connect this function with charts.js c
function getStaff() {
    $.get("api/staff", function(info){
        var staffArr = [];

        for (var i = 0; i < info.length; i++) {
            staffArr += info.staff_name + " ";
            staffArr += info.staff_role + " ";
            staffArr += info.staff_rate + " ";

        }
        console.log("staff Arr: " + staffArr);
    });

}

// need to create a function that creates rows for all the inputs.


// staffSubmission();

})
