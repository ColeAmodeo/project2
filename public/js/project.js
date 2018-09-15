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
        $.post("/api/projects", projectInfo)
        .then(getProjects, console.log("you added a project succesfully"));

    }
    //get projects from the api to produce them for the staff account. 
    function getProjects() {
        $.get("/api/projects", function(info){
            var row = []; 

            for (var i; i < info.length; i++) {

                row += info.project_desc; 
                console.log(info.project_desc)

                //likely want to add these to the dropdown. or need to come up with another solution for this. 
            }
            console.log(row); 
        })
    }
})