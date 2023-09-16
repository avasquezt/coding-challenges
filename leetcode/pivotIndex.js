/**
 * Finds the index in the input array where the sum of the numbers to the left of the index is equal to the sum to the index's right
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = 0;
    for(const n of nums){
        total += +n;
    }
    let left = 0;
    for(let i = 0; i < nums.length; i++){
        left += nums[i - 1] || 0;
        if(left == total - left - nums[i]){
            return i;
        }
    }
    return -1;
};