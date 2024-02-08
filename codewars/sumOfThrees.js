/**
 * Returns a string representing the input number as a sum of distinct powers of three, if possible
 * @param {number} n 
 * @returns {string}
 */
function sumOfThrees(n) {
    let ans = '';
    let c = 0;
    while(n){
      const r = n % 3;
      if(r > 1) return 'Impossible';
      if(r) ans = `+3^${c}` + ans;
      n = Math.trunc(n / 3);
      c++;
    }
    return ans.slice(1);
}