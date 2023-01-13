/**
 * Transposes the input matrix
 * @param {number[][]} matrix 
 * @returns {number[][]}
 */

function transpose(matrix) {
    return matrix[0].map((_, i) => matrix.map(row => row[i]));
}