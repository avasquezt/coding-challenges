/**
 * Calculates the sum of all the numbers in the input string
 * @param {string} s 
 * @returns {number}
 */

function sumOfIntegersInString(s){
    return s.split(/\D/).reduce((acc, n) => acc + Number(n), 0);
}