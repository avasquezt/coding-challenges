/**
 * Applies the operations to the numbers in the input string
 * @param {string} str 
 * @returns {string}
 */
function calculate(str) {
    return String(eval(str.replace(/plus/g, '+').replace(/minus/g, '-')));
}