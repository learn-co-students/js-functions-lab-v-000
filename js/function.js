function happyHolidays() {
  return "Happy Holidays!!";
}

function happyHolidays(name = "you") {
  return "Happy Holidays, " + name;
}

function happyAnyHoliday(holiday = "holiday", name = "you") {
  return "Happy " + holiday + " " + name;
}

function holidayCountDown(holiday = "Mystery Holiday", days) {
  return "It's " + days + "days till " + holiday + "!";
}