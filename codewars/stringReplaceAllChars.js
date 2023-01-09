/**
 * Replaces all characters in the string with the input char
 * @param {string} text 
 * @param {string} char 
 * @returns {string}
 */

function contamination(text, char){
    return text.replace(/./g, char);
}