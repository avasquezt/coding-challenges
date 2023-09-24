/**
 * Checks if any value in the input array appears at least twice
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Set();
    for(const n of nums){
        if(seen.has(n)){
            return true;
        }
        seen.add(n);
    }
    return false;
};