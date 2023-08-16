/**
 * Finds the first character that is not repeated anywhere in the input string
 * @param {string} s 
 * @returns {string}
 */
function firstNonRepeatingLetter(s) {
    const unique = new Set();
    const seen = new Set();
    console.log(s)
    for(const char of s){
      const lower = char.toLowerCase();
      const upper = char.toUpperCase();
      if(!seen.has(lower) && !seen.has(upper)){
        if(!unique.has(lower) && !unique.has(upper)){
          unique.add(char);
        }else{
          unique.delete(lower);
          unique.delete(upper);
          seen.add(char);
        }
      }
    }
    return unique.values().next().value || '';
}