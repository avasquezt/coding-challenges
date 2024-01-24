/**
 * Rounds the input number to the required precision
 * @param {number} number 
 * @param {number} precision 
 * @returns {number}
 */
Math.roundTo = function (number, precision) {
    return Math.round(number * 10 ** precision) / (10 ** precision)
}