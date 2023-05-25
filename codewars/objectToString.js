/**
 * Generates a human readable string from the input object key/value pairs
 * @param {Object} pairs 
 * @returns {string}
 */
function solution(pairs){
  return Object.entries(pairs).map(e => e[0] + ' = ' + e[1]).join(',');
}