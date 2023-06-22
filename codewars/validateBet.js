/**
 * Validates the input string with the given conditions
 * @param {number[]} game 
 * @param {string} text 
 * @returns {number[] | null}
 */
function validateBet(game, text){
  const numbers = text.split(/[ ,]+/g);
  const unique = [...new Set(numbers)];
  if(numbers.length != game[0] || numbers.length != unique.length || numbers.some(e => isNaN(e) || Number(e) < 1 || Number(e) > game[1])){
    return null;
  }
  return numbers.map(Number).sort((a,b) => a - b);
}