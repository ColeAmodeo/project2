// importing moment package
var moment = require('moment');
moment().format();
// Creating environment for timer function
var x;
var y;
var duration;
// On start button, grab a beginning value of time.
// On end session button, grab an ending value of time.
// Send this duration to the database relative to the staff ID
function startSession () {
  x = new moment()
}
function endSession () {
  y = new moment()
  duration = moment.duration(x.diff(y))
  console.log(duration)
}

//  returns duration object with the duration between x and y
