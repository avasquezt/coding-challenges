/**
 * Calculates the number of tuples (indexes in the input arrays) which elements add up zero
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const seen = new Map();
    let count = 0;
    for(const n1 of nums1){
        for(const n2 of nums2){
            seen.set(n1 + n2, (seen.get(n1 + n2) || 0) + 1);
        }
    }
    for(const n3 of nums3){
        for(const n4 of nums4){
            count += seen.get(-(n3 + n4)) || 0;
        }
    }
    return count;
};