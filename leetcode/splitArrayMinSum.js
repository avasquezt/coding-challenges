/**
 * Splits the input array in k parts minimizing the largest sum of any subarray
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let max = 0; 
    let sum = 0;
    for(const n of nums){
        max = Math.max(max, n);
        sum += n;
    }
    if(k == 1) return sum;
    let lo = max;
    let hi = sum;
    while(lo <= hi){
        const mid = lo + ((hi - lo) >>> 1);
        if(valid(mid, nums, k)){
            hi = mid - 1;
        }else{
            lo = mid + 1;
        }
    }
    return lo;
};

function valid(target, nums, k){
    let count = 1;
    let total = 0;
    for(const n of nums){
        total += n;
        if(total > target){
            total = n;
            count++;
            if(count > k){
                return false;
            }
        }
    }
    return true;
}