/**
 * Deletes the elements from the input array with a count grater that the requested number
 * @param {number[]} arr 
 * @param {number} n 
 * @returns {number[]}
 */
function deleteNth(arr,n){
    const count = {};
    let ans = [];
    for(const e of arr){
      count[e] = 1 + (count[e] || 0);
      if(count[e] <= n){
        ans.push(e);
      }
    }
    return ans;
}