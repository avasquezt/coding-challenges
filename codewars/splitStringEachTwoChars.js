/**
 * Splits the input string into pairs of two characters
 * @param {string} str 
 * @returns {string[]}
 */
function solution(str){
  const ans =  str.match(/.(.)?/g) || [];
  if(ans.length &&  ans.at(-1).length < 2){
    ans[ans.length - 1] += '_';
  }
  return ans;
}