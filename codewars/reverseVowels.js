/**
 * Reverses the vowels in the input string
 * @param {string} str 
 * @returns {string}
 */
function reverseVowels(str) {
    const vowels = str.match(/[aeiou]/ig);
    let i = -1;
    return str.replace(/[aeiou]/ig, char => vowels.at(i--));
}

function reverseVowels(str) {
    const vowels = str.match(/[aeiou]/ig);
    return str.replace(/[aeiou]/ig, char => vowels.pop());
}