/**
 * Validates the input IPv4 address string
 * @param {string} str 
 * @returns {boolean}
 */
function isValidIP(str) {
    return str.split('.').filter(n => !/(^0+\d+|\D|^$)/.test(n) && Number(n) <= 255).length == 4;
}