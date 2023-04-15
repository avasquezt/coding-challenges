/**
 * Removes the first n exclamation marks (!) from the input string
 * @param {string} s 
 * @param {number} n 
 * @returns {string}
 */
function remove(s,n){
    return s.replace( /!/g, char => n-- > 0 ? '' : char);
}