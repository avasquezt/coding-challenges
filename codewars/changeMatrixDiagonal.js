/**
 * Changes the value of the elements in the input matrix diagonal depending on the sign
 * @param {number[][]} array 
 * @returns {number[][]}
 */
function matrix(array) {
    return array.map((n, i) => (n[i] = n[i] >= 0 ? 1 : 0, n));
}