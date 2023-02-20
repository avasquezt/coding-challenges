/**
 * Returns whether a is smaller than, bigger than, or equal to b, as a string
 * @param {number} a 
 * @param {number} b 
 * @returns {string}
 */

function noIfsNoButs(a, b) {
    return a > b && `${a} is greater than ${b}` || a < b && `${a} is smaller than ${b}` || `${a} is equal to ${b}`;
}