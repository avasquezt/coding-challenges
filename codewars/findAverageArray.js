/**
 * Calculates the average value of the input array
 * @param {number[]} nums 
 * @returns {number}
 */

var findAverage = function (nums) {
    return nums.reduce((acc, n) => acc + n, 0) / nums.length;
}