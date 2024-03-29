/**
 * Calculates the running sum of the input array
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    return nums.map((n) => sum += n);
};