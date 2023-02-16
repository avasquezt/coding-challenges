/**
 * Returns the requested largest numbers in the input array
 * @param {number} n 
 * @param {number[]} array 
 * @returns {number[]}
 */
function largest(n, array) {
    // Find the n highest elements in a list
    return array.sort((a, b) => a - b).slice(array.length - n);
}