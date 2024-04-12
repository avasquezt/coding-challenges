/**
 * Returns the two biggest elements in the input array
 * @param {number[]} ages 
 * @returns {number[]}
 */
function twoOldestAges(ages){
    let n = -Infinity;
    let m = -Infinity;
    for(const e of ages){
      if(e > n){
        [n, m] = [e, n];
      }else if(e > m){
        m = e;
      }
    }
    return [m, n];
}