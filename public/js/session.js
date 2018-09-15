$(document).ready(function(){

    var timeWorked = $("#timeWorked"); 
    var taskDesc = $("#taskCompletedDesc");
    var StaffId = $("value");
    var ProjectId = $("projectValue"); 

    $("#modalConfirmation").on("click", sessionSubmission) {

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
    };
})