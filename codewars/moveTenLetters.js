/**
 * Shifts each letter in the input string forward 10 positions through the alphabet
 * @param {string} s 
 * @returns {string}
 */
function moveTen(s){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return s.replace(/[a-z]/ig, char => alphabet.at((alphabet.indexOf(char) + 10) % 26));
}