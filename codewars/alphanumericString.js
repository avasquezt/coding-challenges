/**
 * Validates if the input string is alphanumeric
 * @param {string} string 
 * @returns {boolean}
 */
function alphanumeric(string){
    return !/[\W_]|^$/.test(string);
}