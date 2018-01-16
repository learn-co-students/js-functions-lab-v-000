 
function happyHolidays(){
  return "Happy holidays!";
}

function happyHolidaysTo(name){
  if (typeof(name) === "undefined") {
    var name = "you";
  }
  return "Happy holidays, " + name  + "!";
}
 
function happyHolidayTo(holiday, name){
  return "Happy " + holiday + ", " + name + "!";
}

function holidayCountdown(name, days){
  return "It's " + days + " days until " + name + "!";
}

function daysToXmas(){
  var today = new Date();
  var xmas = new Date('December 25, 2017'); // Set date of xmas
  var msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
  var daysLeft = (xmas.getTime() - today.getTime());
  var daysLeft = Math.round((daysLeft) / msPerDay); 

  console.log("There are " + daysLeft + " days left until xmas.");
}

