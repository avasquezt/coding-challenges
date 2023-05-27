/**
 * Returns the expanded form of the input number
 * @param {number} num 
 * @returns {string}
 */
function expandedForm(num) {
  let ans = '';
  let n = num;
  for(let i = 1; i <= Math.ceil(Math.log10(num)); i++){
    let result = n % 10 ** i;
    n -= result;
    if(result){
      ans = result + ' + '  + ans;
    }
  }
  return ans.slice(0, -3);
}