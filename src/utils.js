exports.getDaysInMonth = (month, year) => {
	// Here January is 1 based
	//Day 0 is the last day in the previous month
	return new Date(year, month, 0).getDate();
}

exports.getCurrentMonthName = (value) => {
	const date = value ? new Date(value) : new Date();
	const month = date.toLocaleString('default', { month: 'long' });
	return month;
}

exports.getYearList = () => {
	const now = new Date().getUTCFullYear();
	return Array(now - (now - 30)).fill('').map((value, index) => now - index);
}