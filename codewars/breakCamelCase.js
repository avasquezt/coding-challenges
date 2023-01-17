/**
 * Breaks up camel casing, using a space between words
 * @param {string} string 
 * @returns {string}
 */

function solution(string) {
    return string.replace(/[A-Z]/g, char => ' ' + char);
}