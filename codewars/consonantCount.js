/**
 * Counts the number of consonants in the input string
 * @param {string} str 
 * @returns {number}
 */
function consonantCount(str) {
  return str.replace(/[^b-df-hj-np-tv-z]/ig, '').length;
}