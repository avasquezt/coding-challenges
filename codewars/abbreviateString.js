/**
 * Abbreviates each word in the input string by the number of characters
 * @param {string} string 
 * @returns {string}
 */

function abbreviate(string) {
    return string.replace(/[a-z]+/ig, word => word.length > 3 ? `${word.at(0)}${word.length - 2}${word.at(-1)}` : word)
}