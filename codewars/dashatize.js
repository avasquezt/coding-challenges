/**
 * Returns a string with dash'-'marks before and after each odd integer
 * @param {number} num 
 * @returns {string}
 */
function dashatize(num) {
    if(!Number.isInteger(num)) return "NaN";
    let ans = '';
    num = String(Math.abs(num));
    for(let i = 0; i < num.length; i++){
      const n = num[i];
      if(n % 2){
        if(ans && ans[ans.length - 1] != '-'){
          ans += '-';
        }
        ans += n;
        if(i < num.length - 1){
          ans += '-';
        }
      }else{
        ans += n;
      }
      
    }
    return ans;
}