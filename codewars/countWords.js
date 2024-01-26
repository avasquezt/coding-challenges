/**
 * Counts the words in the input string
 * @param {string} str 
 * @returns {number}
 */
function countWords(str) {
    return str.trim() ? str.trim().split(/\s+/).length : 0;
}

function countWords(str) {
    return (str.match(/\S+/g) || []).length;
}