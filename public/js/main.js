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
function enableStart() {
  $("#start-btn").removeAttr('disabled');
  $("#start-btn").css('opacity', '1')
}
function enableEnd() {
  $("#end-btn").removeAttr('disabled');
  $("#end-btn").css('opacity', '1')
}
function enableResume() {
  $("#resume-btn").removeAttr('disabled');
  $("#resume-btn").css('opacity', '1')
}
function enablePause() {
  $("#pause-btn").removeAttr('disabled');
  $("#pause-btn").css('opacity', '1');
}
