/**
 * Replaces each element in the input array for the greatest element to its right
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = -1;
    for(let i = arr.length - 1; i >= 0 ; i--){
        [arr[i], max] = [max, Math.max(arr[i], max)];
    }
    return arr;
};