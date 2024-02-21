/**
 * Merges the input strings at the point where the given letter first appears in each word
 * @param {string} string1 
 * @param {string} string2 
 * @param {string} letter 
 * @returns {string}
 */
function stringMerge(string1, string2, letter){
    return string1.slice(0, string1.indexOf(letter)) + string2.slice(string2.indexOf(letter));
}