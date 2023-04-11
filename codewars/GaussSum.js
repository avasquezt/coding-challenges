/**
 * Calculates the sum of the numbers from zero up to the input number
 * @param {number} n 
 * @returns {number}
 */
function f(n){
    return Number.isInteger(n) && n > 0 ? n * (n + 1) / 2 : false;
};