
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
var timerId;
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
  clearInterval(timerId)
  timerId = intervalTrigger()
  start = new moment()
  $("#start-btn").css("display", "none");
  disable();
  enablePause();
  enableEnd();
//End Button
function endSession () {
  clearInterval(timerId)
  secondsPassed = 0;
  end = new moment()
  duration = moment.duration(end.diff(start))
  console.log(duration)
  disable()
  enableStart();
};
// Pause time
function pause() {
  clearInterval(timerId)
  $("#start-btn").css("display", "none");
  disable();

}
// Resume time
function resume() {
  timerID = intervalTrigger()
  disable()
}
// ***********************************************************
// Click Handlers
// ***********************************************************
$("#start-btn").off().on('click', startSession)
$("#end-btn").off().on('click', endSession)

// ***********************************************************
// Environment for disabling buttons to stop idiots from pressing shit they shouldnt
// ***********************************************************
function disable(id){
  if(!id) {
  var buttonId = this.id;
} else var buttonId = id
  document.getElementById("buttonId").disabled = true
}
function enableStart() {
  $("#start-btn").disabled = false;
}
function enableEnd() {
  $("#end-btn").disabled = false;
}
function enableResume() {
  $("#resume-btn").disabled = false;
}
function enablePause() {
  $("#pause-btn").disabled = false;
}
