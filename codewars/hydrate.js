/**
 * Calculates the sum of all the numbers in the input string and returns a message based on the result
 * @param {string} s 
 * @returns {string}
 */
function hydrate(s) {
    return `${n = s.match(/\d+/g).reduce((r, n) => r += Number(n), 0)} glass${n > 1 ? 'es' : ''} of water`;
}