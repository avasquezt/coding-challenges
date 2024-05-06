/**
 * Returns the expansion of the input string
 * @param {string} s 
 * @returns {string}
 */
function stringExpansion(s) {
    let curr = [];
    let n = 1;
    let ans = '';
    for(let char of s){
      if(/\d/.test(char)){
        ans += curr.map(e => e.repeat(n)).join('');
        n = Number(char);
        curr = [];
      }else{
        curr.push(char);
      }
    }
    ans += curr.map(e => e.repeat(n)).join('');
    return ans;
}