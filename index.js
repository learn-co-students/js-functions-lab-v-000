// write your code below!
function happyHolidays() {
  return "Happy holidays!";
}

function happyHolidaysTo(name) {
  var phrase = happyHolidays().replace(happyHolidays().charAt(6),"H").slice(0,-1) + `, ${name}`;
  return phrase;
}

function happyHolidayTo(holiday, name) {
  var phrase = `Happy ${holiday}, ${name}`;
  return phrase;
}

function holidayCountdown(holiday, days) {
  var phrase = `It's ${days} days until ${holiday}!`;
  return phrase;
}