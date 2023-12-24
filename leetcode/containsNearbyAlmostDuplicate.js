/**
 * Checks if there are two numbers in the input array with a difference of valueDiff and a distance of indexDiff
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j <= i + indexDiff; j++) {
            let diff = Math.abs(nums[i] - nums[j]);
            if (diff <= valueDiff) {
                return true; 
            }
        }
    }
    return false;
}