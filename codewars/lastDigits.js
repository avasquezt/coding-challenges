/**
 * Returns the required number of last digits of the input number
 * @param {number} n 
 * @param {number} d 
 * @returns {number[]}
 */
function lastDigit(n, d) {
  return d > 0 ? String(n % (10 ** d)).padStart((10 ** d) < n ? d : 0, '0').split('').map(Number) : [];
}