/**
 * Finds index of the target if it is found on the sorted input array, or where it would be if it were inserted in order
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0, end = nums.length - 1;
    let mid;
    while(start <= end){
        mid = Math.round((end + start) / 2);
        if(nums[mid] == target) return mid;
        else if(nums[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return nums[mid] > target ? mid : mid + 1;
};

console.log(searchInsert([1,3,5,6], 5), 'r');
console.log(searchInsert([1,3,5,6], 2), 'r');
console.log(searchInsert([1,3,5,6], 7), 'r');
console.log(searchInsert([1,3,5,6], 4), 'r');
console.log(searchInsert([1], 0), 'r');