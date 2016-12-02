// write your code below!
function happyHolidays() {
  return "Happy holidays!";
}

happyHolidays();

function happyHolidaysTo(name) {
  return "Happy holidays, " + name + "!";
}
 happyHolidaysTo("Joe");

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`;
}
 happyHolidayTo("Halloween", "Joe");

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`;
}
holidayCountdown("Christmas", 24);
