/**
 * Checks if each character in the input word has the exact same number of occurrences
 * @param {string} s 
 * @returns {boolean}
 */
function validateWord(s){
    let max = 0;
    let min = '';
    const map = new Map();
    
    for(const char of s.toLowerCase()){
      map.set(char, (map.get(char) || 0) + 1);
      max = Math.max(max, map.get(char));
      min = map.get(min) < map.get(char) ? min : char;
    }
    
    return max == map.get(min);
}