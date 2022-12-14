/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let curr = prev = 0;
    for(n of nums){
        curr = Math.max(prev + n, prev = curr);
    }
    return curr;
};