/**
 * Calculates the difference between the input matrix diagonals
 * @param {number[][]} arr 
 * @returns {number}
 */
function diagonalDifference(arr) {
    return Math.abs(arr.reduce((acc, n, i) => acc + n[i] - n[n.length - i - 1], 0));
}