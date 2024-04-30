/**
 * Finds the minimal number of moves required to obtain a strictly increasing sequence from the input array
 * @param {number[]} arr 
 * @returns {number}
 */
function arrayChange(arr) {
    let ans = 0;
    for(let i = 0, r = 0; i < arr.length; i++){
      let n = Math.max(0, arr[i] - arr[i + 1] + r + 1) || 0;
      ans +=  n;
      r = n;
    }
    return ans;
}