/**
 * Sorts the values in the input array by the values squares
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    let ans = [];
    for(let z = nums.length - 1; z >= 0; z--){
        if(Math.abs(nums[i]) > Math.abs(nums[j])){
            ans[z] = nums[i] ** 2;
            i++;
        }else{
            ans[z] = nums[j] ** 2;
            j--;
        }
    }
    return ans;
};