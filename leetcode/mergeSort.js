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


// Iterative
function sortArray(nums){
    const n = nums.length;
    for(let currSize = 1; currSize < n; currSize *= 2){
        for(let start = 0; start < n; start += 2 * currSize){
            const mid = Math.min(start + currSize - 1, n - 1);
            const end = Math.min(start + 2 * currSize - 1, n - 1);
            merge(nums, start, mid, end);
        }
    }
    
    return nums;
    
    function merge(arr, l, m, r){
        const left = [];
        const right = [];
        
        const n1 = m - l + 1;
        const n2 = r - m;
        
        for(let i = 0; i < n1; i++){
            left.push(arr[l + i]);
        }
        
        for(let i = 0; i < n2; i++){
            right.push(arr[m + 1 + i]);
        }
        
        let i = 0;
        let j = 0;
        while(i < n1 && j < n2){
            if(left[i] < right[j]){
                arr[l++] = left[i++];
            }else{
                arr[l++] = right[j++];
            }
        }
        
        while (i < n1) {
            arr[l++] = left[i++];
        }
        
        while (j < n2) {
            arr[l++] = right[j++];
        }
        
    }
}