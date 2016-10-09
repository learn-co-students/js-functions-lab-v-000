// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return "Happy holidays, " + name + "!";
}

function happyHolidayTo(holiday, name) {
  return "Happy " + holiday + ", " + name + "!";
}

function holidayCountdown(holiday, days) {
  if (typeof holiday === "undefined"){
    holiday = "random";
  }
  return "It\'s " + days + " days until " + holiday + "!";
}
