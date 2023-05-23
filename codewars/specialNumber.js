/**
 * Checks if the input number's digits only consist 0, 1, 2, 3, 4 or 5
 * @param {number} n 
 * @returns {string}
 */
function specialNumber(n){
  for(const e of String(n)){
    if(!['0','1','2','3','4','5'].includes(e)) return 'NOT!!';
  }
  return 'Special!!';
}