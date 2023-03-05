/**
 * Returns a greeting for the user
 * @param {string} name 
 * @returns {string}
 */
var greet = function(name) {
    return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
};