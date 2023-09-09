/**
 * Returns the numbers that don't appear in the input array
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for(let i = 0; i < nums.length; i++){
        const n = Math.abs(nums[i]) - 1;
        if(nums[n] >= 0){
            nums[n] *= -1;
        }
    }
    let ans = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) ans.push(i + 1);
    }
    return ans;
};