/**
 * Encrypts the input text by replacing the first char of every word with its unicode value and exchanges their second and last char
 * @param {string} text 
 * @returns {string}
 */
var encryptThis = function(text) {
    return text.replace(/\b(\w)(\w)(\w*)(\w)\b/g, "$1$4$3$2").replace(/\b\w/g, char => char.charCodeAt(0));
}