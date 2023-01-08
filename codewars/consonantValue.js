// function solve(s) {
//   return Math.max(...s.split(/[aeiou]/).map(str => str.split('').reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0)));
// };

/**
 * Calculates the highest value of consonant substrings
 * @param {string} s 
 * @returns {number}
 */
function solve(s) {
    let result = 0;
    let tmp = 0;
    for(const char of s){
      if('aeiou'.includes(char)){
        result = Math.max(result, tmp);
        tmp = 0;
      }else{
        tmp += char.charCodeAt(0) - 96;
      }
    }
    return Math.max(result, tmp);
  };