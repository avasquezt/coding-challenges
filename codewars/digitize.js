/**
 * Returns a list of the individual digits of the input number
 * @param {number} n 
 * @returns {number[]}
 */
function digitize(n) {
    return String(n).split('').map(Number);
}