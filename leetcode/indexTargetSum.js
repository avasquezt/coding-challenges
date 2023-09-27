/**
 * Finds the index of the numbers that add up to target
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seen = new Map();
    for(let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        if (seen.has(diff)) return [seen.get(diff), i];
        else seen.set(nums[i], i);
    }
    return -1; 
};