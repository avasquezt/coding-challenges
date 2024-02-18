/**
 * Calculates the input array average
 * @param {number[]} scores 
 * @returns {number}
 */
function average(scores) {
    return Math.round(scores.reduce((r, n) => r + n)/scores.length);
}