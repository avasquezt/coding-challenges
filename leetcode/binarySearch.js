/**
 * Searches the requested number in the input array using the binary search algorithm
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end){
        const mid = start + Math.floor((end - start) / 2);
        const e = nums[mid];
        if(e == target) return mid;
        if(e < target){
            start = mid + 1;
        }else{
            end = mid - 1;    
        }
    }
    return -1;
};