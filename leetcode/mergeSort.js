/**
 * Sorts the input array using the merge sort algorithm
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums){
    if(nums.length <= 1) return nums;
    const mid = Math.trunc(nums.length / 2);
    const left = nums.slice(mid);
    const right = nums.slice(0, mid);
    return merge(sortArray(left), sortArray(right));
    
    function merge(left, right){
        const result = [];
        let l = 0;
        let r = 0;
        while(l < left.length && r < right.length){
            if(left[l] < right[r]){
                result.push(left[l++]);
            }else{
                result.push(right[r++]);
            }
        }
        return result.concat(left.slice(l)).concat(right.slice(r));
    }
}