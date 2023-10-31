/**
 * Finds the minimum value in the input sorted rotated array
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    // Edge cases
    if(nums.length == 1) return nums[0];
    if(nums.at(-1) < nums.at(-2)) return nums.at(-1);
    if(nums.at(0) < nums.at(-1)) return nums[0];

    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        const mid = left + Math.trunc((right - left) / 2);
        if(nums[mid] < nums[mid - 1] && nums[mid] < nums[mid + 1]) return nums[mid];
        if(nums[mid - 1] >= nums[0]) left = mid + 1;
        else right = mid;
    }
    return nums[left];
};