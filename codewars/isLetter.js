/**
 * Checks if the string is a letter
 * @returns {boolean}
 */
String.prototype.isLetter = function() {
    return /^[a-z]$/i.test(this);
}