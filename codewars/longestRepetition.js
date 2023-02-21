/**
 * Finds the char in the input string with the longest consecutive repetition
 * @param {string} s 
 * @returns {[string, number]}
 */

function longestRepetition(s) {
    let max = 0;
    let ans = '';
    let currChar = '';
    let currCount = 0;
    for(const char of s){
      if(currChar == char){
        currCount++;
      }else{
        currChar = char;
        currCount = 1;
      }
      if(currCount > max){
          max = currCount;
          ans = currChar;
      }
    }
    return [ans, max];
}