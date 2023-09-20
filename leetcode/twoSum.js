/**
 * Finds the indexes of two numbers that add up to the target number
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

/**
 * When the input array is sorted
 * O(n) time and O(1) space
 */
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    while(i < j){
        const n = numbers[i] + numbers[j];
        if(n === target) return [i + 1, j + 1];
        if(n > target){
            j--;
        }else{
            i++;
        }
    }
    return -1;
};