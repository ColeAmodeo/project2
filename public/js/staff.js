$(document).ready(function(){
    
    var staffSelect = $("#staff")
    var staffId = 500; 
    var staffName = "";
    var staffRole = ""; 
    var staffRate = "";
    var password = ""; 
    var totalTime = 0; 

    
    $("#staffForm").on("submit", checkForDuplicateId);
    
    function staffSubmission(e) {
 
        console.log("stage 2"); 
        // staffId = 500; 
        // staffName = $("#newStaffName").val(); 
        // staffRole = $("#newStaffRole").val(); 
        // staffRate = $("#wage").val();
        // password = $("#passwordInput").val(); 
        // totalTime = 0; 
        console.log(staffId, + staffName +  staffRole +  staffRate + totalTime + password);

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
    .then(getStaff, alert("You successfully added a staff"))

}

function checkForDuplicateId(staffName) {
    staffName.preventDefault(); 

    staffId = 500; 
    staffName = $("#newStaffName").val(),
    staffRole = $("#newStaffRole").val(), 
    staffRate = $("#wage").val(), 
    password = $("#passwordInput").val() 
    
    console.log("staffName: " + staffName)
    console.log("checkForDups: ", + staffName +  staffRole +  staffRate + password);

    var input = { username: staffName}; 
    $.ajax({
        type: "POST",
        url: "/api/staff/duplicateUser", 
        data: input

    }).then(function(user){
        console.log("the user: ", user); 
        if (user === 0) {
            staffSubmission(); 
            console.log("no user:  has tripped"); 
        } else {
            alert("This user already exists, please try another user"); 
        }
    })
}; 

function getStaff() {
    $.get("/api/staff", function(info){
        var staffArr = [];

        for (var i = 0; i < info.length; i++) {
           staffArr.push(newStaffRow(info[i]));

        }
        staffSelect.empty(); 
        staffSelect.append(staffArr)
        staffSelect.val()
        console.log("staff Arr: " + staffArr);
    });

}

function newStaffRow(data) {
    var list = $("<option>");
    list.attr("value", data.staff_id);
    list.text(data.staff_name)
    return list; 
}


// need to create a function that creates rows for all the inputs.


// staffSubmission();

})
