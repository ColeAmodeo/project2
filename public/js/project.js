$(document).ready(function(){

    var projDiv = $("#projectDiv"); 
    
    $("#projectForm").on("submit", projectSubmission)
    
    getProjects(); 
    
    
    function projectSubmission(e) {
        e.preventDefault(); 

        var projectDesc = $("#newProject").val(); 
        var expectedTime = $("#cost").val(); 

        console.log(projectDesc);
        console.log(expectedTime);

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

        $.ajax({
                type: "POST",
                url: "/api/projects",
                data: projectInfo
              })
              
        //add getProjects after
        .done(console.log("you added a project succesfully"));
        //add getProjects 

    }
    function getProjects() { 
        $.get("/api/projects", addProjects)

    }
    //get projects from the api to produce them for the staff account. 
    function addProjects(info) {

        var projectArr = [];         

        for (var i = 0; i < info.length; i++) {
            projectArr.push(projDropdown(info[i]));
        }
        projDiv.empty(); 
        console.log("project arr: ", projectArr); 
        projDiv.append(projectArr)
        console.log("PROJECT DIV..." +  JSON.stringify(projDiv)); 


            //likely want to add these to the dropdown. or need to come up with another solution for this. 
    }
    
    function projDropdown(project) { 
        var list = $("<option>"); 
        list.attr("value", project.id)
        console.log("PROJECT ID: " + project.id); 
        list.text(project.project_desc); 
        console.log("PROJECT DESC " + project.project_desc);
        console.log("list: ", list); 
        return list; 
    }
    // projectSubmission(); 
})