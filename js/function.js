//Write a function named happyHolidays. This function should not accept any parameters and should return the string "Happy Holidays!!".
function happyHolidays() {
  return "Happy Holidays!!";
}

//Write a function named happyHolidaysWithName. This function should accept a parameter of the name of the person you want to wish happy holidays, and return the string "Happy Holidays, _name_"
function happyHolidaysWithName(name) {
  return "Happy Holidays, " + name;
}

//Write a function named happyAnyHoliday. This function should accept two parameters, the holiday you want to wish them well for, and the name of the person you're wishing well. This function should return the string "Happy _holiday_, _name_"
function happyAnyHoliday(holiday, name) {
  return "Happy " + holiday + " " + name;
}

//Write a function named holidayCountDown. This function should accept two parameters, the holiday name and number of days till that holiday. The function should return the string "It's _days_ till _holiday!"

function holidayCountDown(holiday, days) {
  return "It's " + days + " days till " + holiday + "!";
}