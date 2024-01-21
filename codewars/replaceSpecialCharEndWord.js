/**
 * Removes the exclamation sign characters from the end of each word
 * @param {string} string 
 * @returns {string}
 */
function remove (string) {
    return string.replace(/\b!+/g, '');
}