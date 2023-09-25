/**
 * Finds the element that appears only once in the input array
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let num = 0;
    for(const n of nums){
        num ^= n;
    }
    return num;
};