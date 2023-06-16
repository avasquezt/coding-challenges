/**
 * Counts the number of ocurrences of the character "n" in the input string
 * @param {string} x 
 * @returns {string}
 */
function bump(x){
  return (x.match(/n/g)||[]).length <= 15 ? 'Woohoo!' : 'Car Dead';
}