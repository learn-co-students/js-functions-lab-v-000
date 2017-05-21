// write your code below!
//var name = "Dani";

//function happyHolidays(string){
  //return "Happy holidays!"
//};

//function happyHolidaysTo(name){
  //return "Happy holidays, you!"
//};

//function happyHolidayTo(holiday, name){
  //return "Happy Independence Day, you!"
//};

//function holidayCountdown(holiday, days){
  //return "It's 20 days until Mother's Day!"
//};
function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!` // Now I know this `` is the correct way to interpolate in JS
}

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`
}
