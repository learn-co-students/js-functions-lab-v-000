// write your code below!
function happyHolidays() {
  return "Happy holidays!";
}

function happyHolidaysTo(name) {
  if (typeof name === "undefined") {
    name = "you";
  }
  return "Happy holidays, " + name + "!";
}

function happyHolidayTo(holiday, name) {
  if (typeof holiday === "undefined") {
    holiday = "holiday";
  }
  if (typeof name === "undefined") {
    name = "you";
  }
    return "Happy " + holiday + ", " + name + "!";
}

function holidayCountdown(holiday, days) {
  if (typeof holiday === "undefined") {
    holiday = "holiday";
  }
  if (typeof days === "undefined") {
    days = 1;
  }
    return "It's " + days + " days until " + holiday + "!";
}
