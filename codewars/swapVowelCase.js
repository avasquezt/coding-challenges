/**
 * Capitalizes all vowels in the input string
 * @param {string} string 
 * @returns {string}
 */
function swap (string) {
    return string.replace(/[aeiou]/g, char => char.toUpperCase());
}