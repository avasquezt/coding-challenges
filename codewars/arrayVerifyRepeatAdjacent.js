/**
 * Counts the number of groups of 2 or more repeating characters in the input string
 * @param {string} s 
 * @returns {number}
 */
function repeatAdjacent(s) {
    return (s.match(/((\w)\2+){2,}/g) || []).filter(e => !/^(.)\1*$/.test(e)).length;
}

function repeatAdjacent(s) {
    return (s.match(/((.)\2+(?!\2)){2,}/g)||[]).length
}