/**
 * Sorts the input array using the quick sort algorithm
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums){
    quickSort(nums, 0, nums.length - 1);
    return nums;

    function quickSort(arr, lo, hi){
        if(lo < hi){
            const po = partition(arr, lo, hi);
            quickSort(arr, lo, po - 1);
            quickSort(arr, po + 1, hi);
        }
    }

    function partition(arr, lo, hi){
        /* Picks the last element hi as a pivot
         * and returns the index of pivot value in the sorted array 
         */
        const pivot = arr[hi];
        let i = lo;
        for(let j = lo; j < hi; j++){
            if(arr[j] < pivot){
                [arr[j], arr[i]] = [arr[i], arr[j]];
                i++;
            }
        }
        [arr[hi], arr[i]] = [arr[i], arr[hi]];
        return i;
    }
}

console.log(sortArray([9,8,7,6,5,4,3,2,1,0]));
console.log(sortArray([0]));
console.log(sortArray([1]));
console.log(sortArray([0,1,2]));
console.log(sortArray([0,0,1,1,1,2,2]));