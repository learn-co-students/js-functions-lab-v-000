// write your code below!
function happyHolidays() {
  return "Happy holidays!";
}

function happyHolidaysTo(name) {
  // var phrase = "Happy holidays" + `, ${name}`;
  // return phrase;
  return `Happy holidays, ${name}!`;
}

function happyHolidayTo(holiday, name) {
  var phrase = `Happy ${holiday}, ${name}!`;
  return phrase;
}

function holidayCountdown(holiday, days) {
  var phrase = "It's "+`${days}`+"days until"+` ${holiday}!`;
  return phrase;
}