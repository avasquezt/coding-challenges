/**
 * Checks if the input arrays have a permutation where every sum of two elements of each array is equal o greater to the requested value
 * @param {number} k 
 * @param {number[]} A 
 * @param {number[]} B 
 * @returns {string}
 */
function twoArrays(k, A, B) {
    // Write your code here
    A.sort((a,b) => b - a);
    B.sort((a,b) => a - b);
    return A.every((_, i) => A[i] + B[i] >= k) ? 'YES' : 'NO';
}