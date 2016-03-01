function happyHolidays(){
  return "Happy Holidays!!";
}

function happyHolidaysWithName(name){
  if(typeof name === 'undefined'){
    name = "You";
  }
  return "Happy Holidays, " + name + "!!";
}

function happyAnyHoliday(name,holiday){
  if(typeof name === 'undefined'){
    name = "You";
  }
  if (typeof holiday === 'undefined'){
    holiday = "Holidays"
  }
  return "Happy " + holiday + " " +name + "!!"; 
}

function holidayCountDown(holiday,days){
  if (typeof days === 'undefined'){
    return "I'm not a mind reader, I can't work with an undefined number";
  }
  if(typeof holiday === 'undefined'){
    holiday = "the holidays";
  }
  return days + " days until " + holiday; 
}