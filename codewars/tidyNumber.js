/**
 * Checks if the input number digits are in ascending order
 * @param {number} n 
 * @returns {boolean}
 */

function tidyNumber(n){
    n = String(n).split('');
    return n.slice(1).every((m, i) => m >= n[i]);
}