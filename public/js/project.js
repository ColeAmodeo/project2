$(document).ready(function(){

    var projectDesc = "Facebook UX Build"
    $("projectDescription")
    var expectedTime = 2500
    $("expectTime")


    $("#project_button").on("click", projectSubmission)

    function projectSubmission() {
        //no event happening at the moment. 
        // event.preventDefault(); 

        if(projectDesc.length === 0 || expectedTime.length === 0) {
            alert("make sure you have entered your Project information correctly")
        } else {
            createProject({
                project_desc: projectDesc, 
                expected_time: expectedTime
            })
        }
    }
    function createProject(projectInfo) {
        console.log("PROJECT INFO: ", projectInfo);
        // $.post("/api/projects", function() {
            $.ajax({
                type: "POST",
                url: "/api/projects",
                data: projectInfo
              })
              
        //add getProjects after
        .done(console.log("you added a project succesfully"));
        //add getProjects 

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
    // projectSubmission(); 
})