/**
 * Calculates the sum of the squares of each element
 * @param {number[]} arr 
 * @returns {number}
 */
const sumSquares = arr => arr.reduce((r, n) => r + n ** 2, 0);