/**
 * Searches the requested value in the sorted input matrix
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target, start = [0, 0], end = [matrix.length, matrix[0].length]) {
    let n = Math.trunc((end[0] + start[0]) / 2);
    let m = Math.trunc((end[1] + start[1]) / 2);
    if(matrix[n] != undefined && matrix[n][m] == target) return true;
    if(end[0] - start[0] <= 1 && end[1] - start[1] <= 1) return false;
    
    return searchMatrix(matrix, target, [start[0], m + 1],[n - 1, end[1]]) ||
        searchMatrix(matrix, target, [n + 1, start[1]], [end[0], m - 1]) ||
        (matrix[n] != undefined && matrix[n][m] > target) ? 
            searchMatrix(matrix, target, start, [n, m]) : 
            searchMatrix(matrix, target,  [n, m], end);
};

var searchMatrix = function(matrix, target){
if(!matrix || matrix.length < 1 || matrix[0].length < 1) {
        return false;
    }
    let col = matrix[0].length-1;
    let row = 0;
    while(col >= 0 && row <= matrix.length - 1) {
        if(target == matrix[row][col]) {
            return true;
        } else if(target < matrix[row][col]) {
            col--;
        } else if(target > matrix[row][col]) {
            row++;
        }
    }
    return false;
}