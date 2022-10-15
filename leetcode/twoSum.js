/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i = 0, diff = {}; i < nums.length; i++){
        if(diff[target - nums[i]] != undefined){
            return [i, diff[target - nums[i]]];
        }
        diff[nums[i]] = i;
    }
};