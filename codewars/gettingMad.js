/**
 * Calulates the Minimum Absolute Difference between two elements in the input array
 * @param {number[]} array 
 * @returns 
 */
function gettingMad(array) {
    array.sort((a,b) => a - b);
    return array.slice(1).reduce((min, n, i) => Math.min(min, Math.abs(n - array[i])), Infinity);
}