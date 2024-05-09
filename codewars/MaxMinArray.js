/**
 * Sorts the input array in max-min order
 * @param {number[]}} arr 
 * @returns {number[]}
 */
function solve(arr){
    arr.sort((a,b) => a - b);
    let ans = [];
    let left = 0, right = arr.length - 1;
    while(left < right){
      ans.push(arr[right--], arr[left++]);
    }
    if(arr.length % 2) ans.push(arr[left]);
    return ans;
}; 