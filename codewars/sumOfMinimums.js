/**
 * Calculates the sum of the minimum values in each subarray
 * @param {number[][]} arr 
 * @returns {number}
 */

function sumOfMinimums(arr) {
    return arr.reduce((acc, n) => acc + Math.min(...n), 0);
}