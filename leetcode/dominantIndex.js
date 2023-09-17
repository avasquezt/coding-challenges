/**
 * Finds the index of the largest element in the array that is at least twice as much as every other number
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let maxIndex = secondMaxIndex = -1;
    let max = secondMax = -Infinity;
    for(const i in nums){
        if(nums[i] == max || nums[i] == secondMax) continue;
        if(nums[i] > max){
            secondMax = max;
            secondMaxIndex = maxIndex;
            max = nums[i];
            maxIndex = i;
        }else if(nums[i] > secondMax){
            secondMax = nums[i];
            secondMaxIndex = i;
        }
    }
    return secondMax * 2 <= max ? maxIndex : -1;
};