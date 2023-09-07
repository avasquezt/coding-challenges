/**
 * Moves the zeroes in the input array to the end of the array in place
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let firstZero = -1;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] && firstZero != -1){
            nums[firstZero] = nums[i];
            nums[i] = 0;
            firstZero++;
        }else if(nums[i] == 0 && firstZero == -1){
            firstZero = i;
        }
    }
    return nums;
};