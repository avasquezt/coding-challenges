/**
 * Returns a string representing whether an alphabet letter is present in the input string
 * @param {string} string 
 * @returns {string}
 */
function change(string){
    let ans = Array(26).fill(0);
    for(const c of string.toLowerCase()){
      const n = c.charCodeAt() - 97;
      if(n >= 0 && n < 26){
        ans[n] = 1;
      }
    }
    return ans.join('');
}