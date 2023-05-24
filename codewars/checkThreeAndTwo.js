/**
 * Checks if the input array contains three and two ocurrences of each element
 * @param {string} array 
 * @returns {boolean}
 */
function checkThreeAndTwo(array) {
  return Object.values(array.reduce((c, char) => (c[char] = 1 + (c[char] || 0), c), {})).every(n => [3,2].includes(n));
}