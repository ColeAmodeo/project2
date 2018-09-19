$(document).ready(function(){
    $("#myBtn1").click(function(){
        console.log("this is working");
        $("#myModal1").modal();
       
        
    });
});

$(document).ready(function(){
    $("#myBtn2").click(function(){
        console.log("this is working");
        $("#myModal2").modal();
       
    });
});

$(document).ready(function(){
    $("#end-btn").click(function(){
        console.log("end session modalworks");
        $("#endSessionModal").modal();
    });
});

$(document).ready(function(){
    $("#changePassword").click(function(){
        console.log("session Works");
        $("#myModalPassword").modal(); 
    });
});