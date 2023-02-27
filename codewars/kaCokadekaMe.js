/**
 * Codifies the input string using the Ka cypher
 * @param {string} word 
 * @returns {string}
 */

function kaCokadekaMe(word)
{
  let ans = 'ka';
  let curr = '';
  for(const char of word){
    if('aeiouAEIOU'.includes(char)){
      curr += char;
    }else{
      if(curr){
        ans += curr + 'ka';
        curr = '';
      }
      ans += char;
    }
  }
  
  return ans + curr;
}