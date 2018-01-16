// write your code below!
function happyHolidays() {
  var string = "Happy holidays!";
  return string;
}

function happyHolidaysTo (name) {
  var name = name;
  var string = "Happy holidays, ";
  return string + name + "!";
}

function happyHolidayTo (holiday, name){
  var holiday = holiday;
  var name = name;
  return `Happy ${holiday}, ${name}!`;
}

function holidayCountdown (holiday, num_days){
  var holiday = holiday
  var days = num_days
  return `It's ${days} days until ${holiday}!`
}

