/**
 * Counts the number of sign changes in the input array
 * @param {number[]} arr 
 * @returns {number}
 */
function catchSignChange(arr) {
    return arr.slice(1).reduce((r, n, i) => r += Math.sign(n || 1) != Math.sign(arr[i] || 1), 0);
}