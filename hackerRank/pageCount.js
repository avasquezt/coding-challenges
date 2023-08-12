/**
 * Calculates the minimum number of pages of a book of the input size, that must be turned in order to arrive at the required page
 * @param {number} n 
 * @param {number} p 
 * @returns {number}
 */
function pageCount(n, p) {
    // Write your code here
    return Math.min(Math.ceil((p - 1)/ 2), Math.ceil((n - p - (n % 2)) / 2));
}