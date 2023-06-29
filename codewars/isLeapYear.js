/**
 * Checks if the given year is a leap year or not
 * @param {*} year 
 * @returns 
 */
function isLeapYear(year) {
  return year % 400 == 0 || (year % 100  != 0 && year % 4 == 0);
}