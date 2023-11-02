/**
 * Finds the k closest integers to x in the array
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        const mid = start + Math.trunc((end - start) / 2);
        if((arr[mid + k] + arr[mid]) / 2 < x)  start = mid + 1;
        else end = mid;
    }
    return arr.slice(start, start + k);
};