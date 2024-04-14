/**
 * Checks if the input array is sorted in ascending order
 * @param {number[]} arr 
 * @returns {boolean}
 */
function inAscOrder(arr) {
    return arr.every((n, i) => n >= (arr[i - 1] ?? n));
}