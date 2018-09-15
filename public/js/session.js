$(document).ready(function(){

    var timeWorked = 5
    $("#timeWorked"); 
    var taskDesc = "front end setup"
    $("#taskCompletedDesc");
    var StaffId = 1
    $("value");
    var ProjectId = 2
    $("projectValue"); 

    $("#modalConfirmation").on("click", sessionSubmission) 

    function sessionSubmission() {
            // dont need right now until we confirm the button. 
            // event.preventDefault(); 

        if (timeWorked.length === 0 || taskDesc.length === 0) { 
            alert("error, something happened, please try again")
        } else { 
            newSubmission({
                project_desc: taskDesc,
                time_worked: timeWorked,
                ProjectId: ProjectId, 
                //projectId will have to be associated with dropdown
                StaffId: StaffId
                //staffId will have to be associated with login
            })
        } 
    }
    
    function newSubmission(submissionInfo) {
        $.ajax({
            type: "POST",
            url: "/api/sessions",
            data: submissionInfo,
          }).done(console.log("you successfully added a submission"))
          .fail(console.log("uh oh something went wrong when tryin to post"))
        };

    sessionSubmission(); 
})