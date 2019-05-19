// write your code below!
var happyHolidaysMessage = "Happy holidays!"

function happyHolidays() {
  return happyHolidaysMessage
}

function happyHolidaysTo(name) {
  return happyHolidaysMessage.slice(0, -1) + `, ${name}` + happyHolidaysMessage.slice(-1)
}

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`
}
