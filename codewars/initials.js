/**
 * Returns the initials of the input name
 * @param {string} n 
 * @returns {string}
 */
function initials(n){
    return n.replace(/(\w)\w+ /gi, '$1.').replace(/\b\w/ig, c => c.toUpperCase());
}