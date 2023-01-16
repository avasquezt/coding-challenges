/**
 * Calculates the value of the word, based off the sum of the alphabet positions of its characters
 * @param {string} string 
 * @returns {number}
 */

function wordsToMarks(string){
    return string.split('').map(char => char.charCodeAt(0) - 96).reduce((acc, n) => acc += n, 0);
}