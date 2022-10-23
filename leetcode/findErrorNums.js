/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    let seen = new Map();
    let duplicated, missing;
    for(let i = 0; i < nums.length; i++){
        if(seen.has(nums[i])){
            duplicated = nums[i];
        }
        seen.set(nums[i], true);
    }
    for(let i = 1; i <= nums.length; i++){
        if(!seen.has(i)){
            missing = i;
        }
    }
    
    return [duplicated, missing];
};