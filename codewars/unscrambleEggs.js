/**
 * Eliminates the 'egg' string after each consonant in the input string
 * @param {string} word 
 * @returns {string}
 */
function unscrambleEggs(word){
  return word.replace(/([b-df-hj-np-tv-z])egg/ig, '$1');
}