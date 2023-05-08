/**
 * Calculates the sum of the input matrix diagonals
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    for(let i = 0; i < mat.length; i++){
        sum += mat[i][i] + mat[i][mat.length - 1 - i];
    }
    return sum - (mat.length % 2 ? mat.at(mat.length/2).at(mat.length/2) : 0);
};