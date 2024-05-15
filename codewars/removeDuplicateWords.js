/**
 * Removes the duplicated words from the input string
 * @param {string} s 
 * @returns {string}
 */
function removeDuplicateWords (s) {
    return [...new Set(s.split(' '))].join(' ');
}