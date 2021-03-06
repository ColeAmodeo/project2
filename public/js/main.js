$(document).ready(function(){

moment().format();
// ***********************************************************
// Creating environment for timer function
// ***********************************************************
var start;
var startDate;
var end;
var duration;
var minutes = 0;
var hours = 0;
var secondsPassed = 0;
var pauseStart;
var pauseEnd;
var pausedTime = 0;
var timerId;
// ***********************************************************
// Setting certain buttons to disabled on page load
// ***********************************************************
disableEnd();
$("#pause-btn").attr('disabled', 'disabled').fadeTo("slow", 0.5)
$("#resume-btn").attr('disabled', 'disabled').fadeTo("slow", 0.5)
// ***********************************************************
// Timer Logic
// ***********************************************************
function timer() {
  secondsPassed = parseInt(secondsPassed + 1);
  console.log(secondsPassed)
  // Time calculations for hours, minutes and seconds
  if (secondsPassed === 60) {
    secondsPassed = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  // Display the result in the element with id="display"
  $("#display").text(hours + "h " + minutes + "m " + secondsPassed + "s ")
};
function intervalTrigger() {
  return window.setInterval(timer, 1000)
};
// ***********************************************************
//      BUTTON TRIGGER FUNCTIONS
// ***********************************************************
//Start button
function startSession () {
  pausedTime = 0;
  secondsPassed = 0;
  timerId = intervalTrigger()
  start = new moment()
  startDate = start._d
  enablePause();
  enableEnd();
};
//End Button
function endSession () {
  clearInterval(timerId)
  end = new moment()
  console.log("The session was paused for: " + pausedTime + "s")
  duration = (moment.duration(end.diff(start))._data.seconds - pausedTime)
  console.log("This session was: " + duration + "s and took place on " + startDate)
  enableStart();
  disablePause();
};
// Pause time
function pause() {
  clearInterval(timerId)
  pauseStart = new moment()
  enableResume();
  disableEnd();
}
// Resume time
function resume() {
  timerId = intervalTrigger()
  pauseEnd = new moment()
  var breakTime = moment.duration(pauseEnd.diff(pauseStart))._data.seconds
  enablePause();
  enableEnd();
  return pausedTime += breakTime
}

// ***********************************************************
// Click Handlers
// ***********************************************************
$("#start-btn").off().on('click', startSession)
$("#end-btn").off().on('click', endSession)
$("#pause-btn").off().on('click', pause)
$("#resume-btn").off().on('click', resume)
$(".controls").on('click', disableThis)
// ***********************************************************
// Environment for disabling buttons to stop idiots from pressing things they shouldnt
// ***********************************************************
function disableThis(){
  $(this).fadeTo("slow", 0.5)
  $(this).attr('disabled','disabled');
}
function disableEnd(){
  $("#end-btn").attr('disabled', 'disabled').fadeTo("slow", 0.5)
}
function disablePause(){
  $("#pause-btn").attr('disabled', 'disabled').fadeTo("slow", 0.5)
}
function enableStart() {
  $("#start-btn").removeAttr('disabled');
  $("#start-btn").fadeTo("slow", 1)
}
function enableEnd() {
  $("#end-btn").removeAttr('disabled');
  $("#end-btn").fadeTo("slow", 1)
}
function enableResume() {
  $("#resume-btn").removeAttr('disabled');
  $("#resume-btn").fadeTo("slow", 1)
}
function enablePause() {
  $("#pause-btn").removeAttr('disabled');
  $("#pause-btn").fadeTo("slow", 1)
}


  $.ajax({
   type: "GET",
   url: "/api/projects"
}).then(function(result){
  renderProjectList(result);

})

function renderProjectList(result) {

  var projectRow = [];

  for (var i = 0; i < result.length; i++) {
    projectRow.push(dropdown(result[i]));

  }
  $("#projectDropdown").empty();
  $("#projectDropdown").append(projectRow);
  $("#projectDropdown").val(result[i].id);

}


function dropdown(result) {
  var listOption = $("<option>");
  listOption.attr("value", result.id);
  listOption.text(result.project_desc);
  return listOption;
}
//********************************************************
//MOVED OVER FROM SESSION.JS
//******************************************************** */
$("#sessionForm").on("submit", sessionSubmission)


var StaffId = 0;
var timeWorked = "";
var taskDesc = "";
var ProjectId = 0;


function sessionSubmission(e) {
  e.preventDefault();

    staffId = sessionStorage.getItem("staffid");
    timeWorked = duration;
    taskDesc = $("#taskInfo").val();
    projectId = $("#projectDropdown").val();

    console.log("Staff id:" + staffId);
    console.log("time worked: " + timeWorked);
    console.log("task description: " + taskDesc);
    console.log("projectId: " + projectId);


    if (timeWorked.length === 0 || taskDesc.length === 0) {
        alert("error, something happened, please try again")
    } else {
        newSubmission({
            task_completion_desc: taskDesc,
            time_worked: timeWorked,
            ProjectId: projectId,
            project_id: projectId,
            //projectId will have to be associated with dropdown
            StaffId: staffId,
            date: '2018-09-12 00:00:00'
            //staffId will have to be associated with login
        })
    }
}

function newSubmission(submissionInfo) {
    $.ajax({
        type: "POST",
        url: "/api/sessions",
        data: submissionInfo,
      }).done(
        $("#endSessionModal").modal("toggle"),
        $("#taskInfo").empty(),
        console.log("you successfully added a submission")
      )
      .fail(console.log("uh oh something went wrong when tryin to post"))
    };


// *************************************************************
                    // LOGOUT FUNCTION
// *************************************************************
$("#logout").on("click", function() {
  window.location.href="/"
  console.log("logout button works");
})
  })
