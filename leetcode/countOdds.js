/**
 * Counts the number of odd numbers within the input range
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    return Math.trunc((high - low) / 2) + (low % 2 || high % 2 ? 1 : 0);
};