/**
 * Calculates the maximum possible sum of the minimum value in each pair of elements in the input array
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;
    let i = 0;
    while(i < nums.length){
        sum += nums[i];
        i += 2;
    }
    return sum;
};