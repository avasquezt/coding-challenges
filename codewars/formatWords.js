/**
 * Converts the input list into a single comma separated sentence
 * @param {string[]} words 
 * @returns {string}
 */

function formatWords(words){
    if(!words) return '';
    words = words.filter(word => word);
    switch(words.length){
        case 0:
          return '';
        case 1:
          return words[0];
        default:
          return `${words.slice(0, -1).join(', ')} and ${words.at(-1)}`;
    }
}