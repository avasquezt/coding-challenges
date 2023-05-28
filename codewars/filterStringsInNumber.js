/**
 * Filters the non number characters in the input string and returns the value
 * @param {string} value 
 * @returns {number}
 */
var filterString = function(value) {
    return +value.replace(/\D/g, '');
}