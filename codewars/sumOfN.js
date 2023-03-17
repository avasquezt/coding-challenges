/**
 * Calculates the sequence of sums from 0 to the requested number
 * @param {number} n 
 * @returns {number}
 */
function sumOfN(n) {
    return Array.from(Array(Math.abs(n) + 1), (_, i) => (i ? Math.sign(n) : 1) * (i * (i + 1)) / 2);
};