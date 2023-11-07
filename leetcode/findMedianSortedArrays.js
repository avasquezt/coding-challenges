/**
 * Finds the median of the input arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const n1 = nums1.length;
    const n2 = nums2.length;
    if(n1 < n2) return findMedianSortedArrays(nums2, nums1);
    
    let left = 0;
    let right = n2 * 2;
    
    while(left <= right){
        const mid2 = left + Math.trunc((right - left) / 2);
        const mid1 = n1 + n2 - mid2;
        
        const l1 = mid1 == 0 ? -Infinity : nums1[Math.trunc((mid1 - 1) / 2)];
        const l2 = mid2 == 0 ? -Infinity : nums2[Math.trunc((mid2 - 1) / 2)];
        const r1 = mid1 == n1 * 2 ? Infinity : nums1[Math.trunc(mid1 / 2)];
        const r2 = mid2 == n2 * 2 ? Infinity : nums2[Math.trunc(mid2 / 2)];
        
        if(l1 > r2) left = mid2 + 1;
        else if(l2 > r1) right = mid2 - 1;
        else return (Math.max(l2, l1) + Math.min(r2, r1)) / 2;
    }
    
    return -1;
};