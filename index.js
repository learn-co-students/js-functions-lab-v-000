// write your code below!

//1a) happyHolidays declaration
function happyHolidays() {
  return "Happy holidays!"
}

//1b) happyHolidays expression
var happyHolidays = function() {
  return "Happy holidays!"
};

//2a) happyHolidaysTo declaration
function happyHolidaysTo(name) {
  if (typeof name === "undefined") {
    name = "you";
  }
  return "Happy Holidays," + " " + name + "!";
}

//2b) happyHolidaysTo expression
var happyHolidaysTo = function(name) {
  if (typeof name === "undefined") {
    name = "you";
  }
  return "Happy holidays," + " " + name + "!";
};

//3a) happyHolidayTo declaration
function happyHolidayTo(holiday, name) {
  return "Happy" + " " + holiday + ", " + name + "!";
}

//3b) happyHolidayTo expression
var happyHolidayTo = function(holiday, name) {
  return "Happy" + " " + holiday + ", " + name + "!";
};

//4a) holidayCountdown declaration
function holidayCountdown(holiday, days) {
  return "It's " + days + " days until " + holiday + "!";
}

//4b) holidayCountdown expression
var holidayCountdown = function(holiday, days) {
  return "It's " + days + " days until " + holiday + "!";
};