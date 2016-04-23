function happyHolidays() {
  return "Happy Holidays!!";
}

function happyHolidaysWithName(name){
  if (typeof name === "undefined") {
    var name = "you schmuck";
  }
  return "Happy Holidays " + name + "!!";
}

function happyAnyHoliday(holiday,name){
  return "Happy " + holiday + "," "name"; 
}

function holidayCountDown(holiday, daysLeft){
  return "It's " + daysleft + " till " + holiday; 
}