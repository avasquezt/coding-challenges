/**
 * Cheks if the input number is Automorphic (the squared numbers ends with the same input number)
 * @param {number} n 
 * @returns {string}
 */

function automorphic(n){
    return String(n ** 2).endsWith(n) ? 'Automorphic' : 'Not!!';
}