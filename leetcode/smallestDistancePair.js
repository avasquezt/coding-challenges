/**
 * Calculates the kth smallest distance among all the pairs in the input array
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    nums.sort((a, b) => a - b);
    let lo = 0;
    let hi = nums.at(-1) - nums.at(0);
    
    while(lo < hi){
        const mid = lo + ((hi - lo) >>> 1);
        if(countPairs(nums, mid) < k){
            lo = mid + 1;
        }else{
            hi = mid;
        }
    }
    return lo;
};

function countPairs(nums, mid){
    let count = 0;
    let l = 0;
    let r = 1;
    while(r < nums.length){
        if(nums[r] - nums[l] <= mid){
            count += r - l;
            r++;
        }else{
            l++;
        }
    }
    return count;
}