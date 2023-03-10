/**
 * Encrypts the input string by shifting its chars by the requested number of positions
 * @param {string} text 
 * @param {number} rule 
 * @returns {string}
 */
function encrypt(text, rule) {
    return text.replace(/./g, char => String.fromCharCode((char.charCodeAt(0) + rule) % 256));
};