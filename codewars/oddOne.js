/**
 * Finds the index of the first odd number in the input array
 * @param {number[]} arr 
 * @returns {number}
 */
function oddOne(arr) {
    return arr.findIndex(n => n % 2);
}