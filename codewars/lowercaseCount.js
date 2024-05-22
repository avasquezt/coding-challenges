/**
 * Counts the total number of lowercase letters in the input string
 * @param {string} str 
 * @returns {number}
 */
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length;
}