/**
 * Finds all occurrences of the requested number in the input array and returns their indexes
 * @param {number[]} array 
 * @param {number} n 
 * @returns {number[]}
 */
const findAll = (array, n) => array.reduce((r, e, i) => e == n ? r.concat(i) : r, []);