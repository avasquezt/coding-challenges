/**
 * Fixes the values in the input array and returns a new non-decreasing array
 * @param {number[]} data 
 * @returns {number[]}
 */

function cleanedCounts(data) {
    const ans = [data[0]];
    for(let i = 1; i < data.length; i++){
      if(ans[i - 1] > data[i]){
        ans[i] = data[i] + (ans[i - 1] - data[i]);
      }else{
        ans[i] = data[i];
      }
    }
    return ans
}

function cleanedCounts(a){
    let m = 0
    return a.map(e=>m=Math.max(e,m))
}
  