
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
  startDate = start._d
  console.log(start)
  //disableThis();
  enablePause();
  enableEnd();
};
//End Button
function endSession () {
  clearInterval(timerId)
  secondsPassed = 0;
  end = new moment()
  duration = moment.duration(end.diff(start))._data.seconds

  console.log(duration)
  console.log("This session was: " + duration + "s and took place on " + startDate  )
  //disableThis()
  enableStart();
};
// Pause time
function pause() {
  clearInterval(timerId)
  disableThis();
  enableResume();

}
// Resume time
function resume() {
  timerID = intervalTrigger()
  disableThis();
  enablePause();
}
// ***********************************************************
// Click Handlers
// ***********************************************************
$("#start-btn").off().on('click', startSession)
$("#end-btn").off().on('click', endSession)
$("#pause-btn").off().on('click', pause)
$("#resume-btn").off().on('click', resume)
$(":button").on('click', disableThis)
// ***********************************************************
// Environment for disabling buttons to stop idiots from pressing shit they shouldnt
// ***********************************************************
function disableThis(){
  $(this).fadeTo("slow", 0.5)
  $(this).css('color', 'red')
  $(this).attr('disabled','disabled');
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
