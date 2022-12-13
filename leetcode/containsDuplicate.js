/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Map();
    for(const n of nums){
        if(seen.has(n)){
            return true;
        }
        seen.set(n, true);
    }
    return false;
};