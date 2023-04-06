/**
 * Calculates the solution of the Josephus problem with k = 2
 * @param {number} n 
 * @returns {number}
 */
function circleSlash(n) {
    return 2*(n - 2 ** Math.floor(Math.log2(n))) + 1;
}