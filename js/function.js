function happyHolidays{
  return "Happy Holidays!!";

}

function happyHolidaysWithName(name){
  return "Happy Holidays," + name;

}

function happyAnyHoliday(holiday, name){
  return "Happy "+holiday+", " + name;

}

function happyCountdown(holiday, days){
  return "It's"+ days+ "days till "+holiday;

}




Write a function named holidayCountDown. This function should accept two parameters, the holiday name and number of days till that holiday. The function should return the string "It's _days_ till _holiday!"