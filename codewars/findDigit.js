/**
 * Finds the requested digit of the input number
 * @param {number} num 
 * @param {number} nth 
 * @returns {number}
 */
var findDigit = function(num, nth){
  return nth > 0 ? Math.trunc(Math.abs(num) / 10 ** (nth - 1)) % 10 : -1;
}