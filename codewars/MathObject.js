/**
 * Math object's round, ceil and floor methods
 */

/**
 * Rounds the input number to the closer integer
 * @param {number} number 
 * @returns {number}
 */
Math.round = function(number) {
  return  (number + 0.5) >>> 0;
};

/**
 * Rounds up the input number
 * @param {number} number 
 * @returns {number}
 */
Math.ceil = function(number) {
  return number % 1 ? (number + 1) >>> 0 : number;
};

/**
 * Rounds down the input number
 * @param {number} number 
 * @returns {number}
 */
Math.floor = function(number) {
  return number >>> 0;
};