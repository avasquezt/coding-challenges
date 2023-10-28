/**
 * Finds the target in the input rotated sorted array
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        const mid = left + Math.trunc((right - left) / 2);
        if(nums[mid] == target) return mid;
        if(target > nums[mid]){
            if(nums[mid] >= nums[left] || target <= nums[right]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }else{
            if(nums[mid] <= nums[right] || target >= nums[left]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
    }
    return -1;
};