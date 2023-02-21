/**
 * Finds the element that only appears once in the input array
 * @param {number[]} nums
 * @return {number}
 */

var singleNonDuplicate = function(nums) {
    let start = 0, end = nums.length - 1;
    while(start < end){
        let mid = Math.round((end + start) / 2);
        mid -= mid % 2;
        if(nums[mid] == nums[mid + 1]){
            start = mid + 2;
        }else{
            end = mid;
        }
    }
    return nums[start];
};