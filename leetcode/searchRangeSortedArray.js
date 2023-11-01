/**
 * Finds the starting and ending position of the target value in the input array
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length == 0) return [-1, -1];
    
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        const mid = left + Math.trunc((right - left) / 2);
        if(nums[mid] >= target) right = mid;
        else left = mid + 1;
    }
    
    if (nums[left] != target) return [-1, -1];
    
    const start = left;
    right = nums.length - 1;
    while(left < right){
        const mid = left + Math.ceil((right - left) / 2);
        if(nums[mid] <= target) left = mid;
        else right = mid - 1;
    }
    
    return [start, right];
};

