/**
 * Replaces the vowels in the input string with their respective positions within that string
 * @param {string} str 
 * @returns {string}
 */
function vowel2index(str) {
    return str.replace(/[aeiou]/ig, (...args) => args[1] + 1);
}
  