/**
 * Sorts the input array by puting all the even integers at the beginning of the array
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    for(let i = 0, odd = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0){
            [nums[i], nums[odd]] = [nums[odd], nums[i]];
            odd++;
        }
    }
    return nums;
};