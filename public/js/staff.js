$(document).ready(function(){
    
    var staffSelect = $("#staff")

    $("#staffForm").on("submit", staffSubmission);
    
    function staffSubmission(e) {
        e.preventDefault();
        var staffId = 500; 
        var staffName = $("#newStaffName").val(); 
        var staffRole = $("#newStaffRole").val(); 
        var staffRate = $("#wage").val();
        var password = $("#passwordInput").val(); 
        var totalTime = 0; 

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

function getStaff() {
    $.get("api/staff", function(info){
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
