/**
 * Calculates the maximum number of consecutive 1's in the input array
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let count = 0;
    for(const n of nums){
        if(n == 1){
            count++;
        }else{
            max = Math.max(max, count);
            count = 0;
        }
    }
    return Math.max(max, count);
};