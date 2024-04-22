/**
 * Sorts the input string vowels to the end of the string
 * @param {string} s 
 * @returns {string}
 */
function sortVowels(s){
    return typeof s === 'string' ? s.replace(/./g, l => 'aeiou'.includes(l.toLowerCase()) ? '|' + l + '\n' : l + '|' + '\n').slice(0, -1) : '';
}