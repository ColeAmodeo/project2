document.ready(function(){

    var projectDesc = $("projectDescription")
    var expectedTime = $("expectTime")


    $("#project_button").on("click", projectSubmission)

    function projectSubmission(event) {
        event.preventDefault(); 

        if(projectDesc === 0 || expectedTime === 0) {
            alert("make sure you have entered your Project information correctly")
        } else {
            createProject({
                project_desc: projectDesc, 
                expected_time: expectedTime
            })
        }
    }
    function createProject(projectInfo) {
        $.post("/api/project", projectInfo)
        .then(
            console.log("you added a project succesfully"));

    }
})