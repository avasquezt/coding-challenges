/**
 * Finds the sign of the product of all values in the input array
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    return nums.reduce((e, n) => e *= Math.sign(n), 1);
};