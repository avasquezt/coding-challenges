/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    for(let i = 0, max = 0; i < nums.length; i++){
        if(max < i) return false;
        max = Math.max(i + nums[i], max);
    }
    return true;
};