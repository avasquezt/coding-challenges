/**
 * Verifies if the input character is a letter
 * @param {string} character 
 * @returns {boolean}
 */
function isItLetter(character) {
    return /[a-z]/i.test(character);
}