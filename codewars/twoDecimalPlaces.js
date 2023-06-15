/**
 * Rounds up the input number to two decimal numbers
 * @param {number} n 
 * @returns {number}
 */
function twoDecimalPlaces(n) {
  return Number(n.toFixed(2));
}

/**
 * Truncates the input number to two decimal numbers
 * @param {number} number 
 * @returns {number}
 */
function twoDecimalPlaces(number) {
  return Math.trunc(number * 100)/100;
}