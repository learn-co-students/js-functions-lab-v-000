
function happyHolidays() {
	return "Happy holidays!";
}

function happyHolidaysTo(name="you") {
	if (typeof name === "udefined") {
		name = "you"
	}
	return `Happy holidays, ${name}!`;
}

function happyHolidayTo(holiday="Xmas", name="Andrew") {
	return `Happy ${holiday}, ${name}!`;
}

function holidayCountdown(holiday, days) {
	return `It's ${days} days until ${holiday}!`
}