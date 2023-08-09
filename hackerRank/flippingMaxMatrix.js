/**
 * Calculates the maximum first quadrant sum obtained by flipping the input matrix columns and rows
 * @param {number[][]} matrix 
 * @returns {number}
 */
function flippingMatrix(matrix) {
    let sum = 0;
    const n = matrix.length;
    for(let i = 0; i < n / 2; i++){
        for(let j = 0; j < n / 2; j++){
            const a = Math.max(matrix[i][j], matrix[n - i - 1][j], matrix[i][n - j - 1], matrix[n - i - 1][n - j - 1]);
            sum += a;
        }
    }
    return sum;

}