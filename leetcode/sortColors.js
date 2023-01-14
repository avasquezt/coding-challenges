/**
 * Sorts the input array using the insert algorithm
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for(let i = 1; i < nums.length; i++){
        let current = i;
        while(current > 0 && nums[current] < nums[current - 1]){
            [nums[current], nums[current - 1]] = [nums[current - 1], nums[current]];
            current--;
        }
    }
};