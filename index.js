// write your code below!
function happyHolidays(){
  return "Happy holidays!";
}

function happyHolidaysTo(name){
  if (typeof name == undefined){
    var name = "you";
  }
  return "Happy holidays, " + name + "!";
}

function happyHolidayTo(holiday, name){
  if (typeof name == undefined){
    var name = "you";
  }
  if (typeof holiday == undefined){
    var holiday = "holiday";
  }
  return "Happy " + holiday + ", " + name + "!";
}

function holidayCountdown(holiday, days){
  if (typeof holiday == undefined){
    var holiday = "holiday";
  }
  return "It's " + days + " days " + "until " + holiday + "!";
}
