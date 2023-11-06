/**
 * Finds the repeated number in the input array
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        const mid = left + Math.trunc((right - left) / 2);
        let count = 0;
        for(const n of nums){
            if(+n <= mid){
                count++;
            }
        }
        if(count > mid) right = mid;
        else left = mid + 1;
    }
    return left;
};