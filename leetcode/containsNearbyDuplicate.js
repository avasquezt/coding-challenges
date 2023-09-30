/**
 * Checks if there are two elements in the input array with the same value within the requested distance
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    let seen = new Map();
    for(let i = 0; i < nums.length; i++){
        if(seen.has(nums[i])){
            if (Math.abs(i-seen.get(nums[i])) <= k) return true;
        }
        seen.set(nums[i], i);
    }
    return false;
};

var containsNearbyDuplicate = function(nums, k) {
    const window = new Set();
    for(let i = 0; i < nums.length; i++){
        if(i > k) window.delete(nums[i - k - 1]);
        if(window.has(nums[i])) return true;
        window.add(nums[i]);
    }
    return false;
};