/**
 * Returns the words from  the input string that are longer than the required number
 * @param {string} sentence 
 * @param {number} n 
 * @returns {string[]}
 */
function filterLongWords(sentence, n) {
    return sentence.split(' ').filter(word => word.length > n);
}