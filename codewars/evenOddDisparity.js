/**
 * Calculates the difference between the count of even numbers and the count of odd numbers in the input array
 * @param {number[]} a 
 * @returns {number}
 */
function solve(a){
    return a.reduce((r, n) => r + (isNaN(n) ? 0 : (n % 2 == 0 ? 1 : -1)), 0);
};