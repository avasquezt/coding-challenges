/**
 * Calculates the square and cubic factors of the input number
 * @param {number} n 
 * @returns {number[][]}
 */
function factors(n) {
    const ans = [[], []];
    for(let i = 2; i <= Math.sqrt(n); i++){
      if(n % (i ** 2) == 0){
        ans[0].push(i);
      }
      if(n % (i ** 3) == 0){
        ans[1].push(i);
      }
    }
    return ans;
}