/**
 * Reverses the strings and filters all non-alphabetic characters
 * @param {string} str 
 * @returns {string}
 */

function reverseLetter(str) {
    return str.split('').filter(char => /[a-z]/i.test(char)).reverse().join('');
}