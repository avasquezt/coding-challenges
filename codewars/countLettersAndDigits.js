/**
 * Counts the number of letters and digits in the input string
 * @param {string} input 
 * @returns {number}
 */
function countLettersAndDigits(input) {
  return (input.match(/[a-z0-9]/ig)||[]).length;
}