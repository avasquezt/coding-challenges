/**
 * Inverts the case of each letter in the input string
 * @param {string} s 
 * @returns {string}
 */
function alternateCase(s) {
    return s.replace(/[a-z]/ig, char => char == char.toLowerCase() ? char.toUpperCase() : char.toLowerCase());
}