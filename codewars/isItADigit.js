/**
 * Checks if the given object is a digit
 * @returns {boolean}
 */
String.prototype.digit = function() {
    return /^\d$/.test(this);
};