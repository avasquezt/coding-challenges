/**
 * Repeats each digit in the input string a number of times equals to its value
 * @param {string} s 
 * @returns {string}
 */
function explode(s) {
    return s.replace(/\d/g, c => c.repeat(Number(c)));
}