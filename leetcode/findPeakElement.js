/**
 * Finds a peak element (element greater than its neighbors) in the input array
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length == 1) return 0;
    if(nums[0] > nums[1]) return 0;
    if(nums.at(-1) > nums.at(-2)) return nums.length - 1;
    let left = 1;
    let right = nums.length - 1;
    while(left <= right){
        const mid = left + Math.trunc((right - left) / 2);
        if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid  + 1]) return mid;
        else if(nums[mid] < nums[mid - 1]) right = mid - 1;
        else if(nums[mid] < nums[mid + 1]) left = mid + 1;
    }
};