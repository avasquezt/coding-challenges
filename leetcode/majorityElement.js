/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let ocurrences = new Map();
    for(n of nums){
        ocurrences.set(n, (ocurrences.get(n) || 0) + 1);
        if(ocurrences.get(n) >= Math.ceil((nums.length + 1) / 2)) return n;
    }
};