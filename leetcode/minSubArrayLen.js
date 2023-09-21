/**
 * Calculates the minimal length of a subarray which sum is greater than or equal to the input target
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let right = 0;
    let min = Infinity;
    let sum = nums[0];
    while(right < nums.length){
        if(sum >= target){
            min = Math.min(min, right - left + 1);
            sum -= nums[left];
            left++;
        }else{
            right++;
            sum += nums[right];
        }
    }
    return min == Infinity ? 0 : min;
};