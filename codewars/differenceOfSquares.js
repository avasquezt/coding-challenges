/**
 * Calculates the differences between the sum of the squares of the first n natural numbers and the square of their sum
 * @param {number} n 
 * @returns {number}
 */
function differenceOfSquares(n){
    return (n * (n + 1) / 2) ** 2 - (n * (n + 1) * (2 * n + 1)) / 6;
}