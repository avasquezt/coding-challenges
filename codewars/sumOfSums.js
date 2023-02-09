/**
 * Calculates the summation of the results of the summations of each number up to the input value
 * @param {number} n 
 * @returns {number}
 */
function sumOfSums(n) {
    const x = (n ** 3n + 3n * n ** 2n + 2n * n) / 6n;
    return x * (x + 1n) / 2n;
}