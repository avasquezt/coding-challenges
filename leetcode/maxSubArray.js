/**
 * Calculates the maximum subarray sum
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    let currMax = 0;
    for(const n of nums){
        currMax += n;
        if(max < currMax) max = currMax;
        if(currMax < 0) currMax = 0;
    }
    return max;
};