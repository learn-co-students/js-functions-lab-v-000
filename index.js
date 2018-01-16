// write your code below!

function happyHolidays(){
  return "Happy holidays!";
}

function happyHolidaysTo(name) {
  if (typeof name === "undefined"){
    name = "Savannah";
  }
  return "Happy holidays, " + name + "!";
}

function happyHolidayTo(holiday, name){
  if (typeof holiday === "undefined"){
    holiday = "Christmas";
  }
  if (typeof name === "undefined"){
    name = "Savannah";
  }
  return "Happy " + holiday + ", " + name + "!";
}

function holidayCountdown(holiday, days){
  if (typeof holiday === "undefined"){
    holiday = "Christmas";
  }
  return "It's " + days + " days until " + holiday + "!";
}
