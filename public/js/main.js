
moment().format();
// Creating environment for timer function
var start;
var startDate;
var end;
var duration;
var minutes = 0;
var hours = 0;
var secondsPassed = 0;
var timerId;

// Timer Logic
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
//Start button
function startSession () {
  clearInterval(timerId)
  timerId = intervalTrigger()
  start = new moment()
};
//End Button
function endSession () {
 clearInterval(timerId)
 end = new moment()
 duration = moment.duration(end.diff(start))
 console.log(duration)
};

$("#start-btn").off().on('click', startSession)
$("#end-btn").off().on('click', endSession)
