/**
 * Searches the requested value in the sorted input matrix
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target, start = [0, 0], end = [matrix.length - 1, matrix[0].length - 1]) {
    let n = Math.round((end[0] + start[0]) / 2);
    let m = Math.round((end[1] + start[1]) / 2);
    if(matrix[n][m] == target) return true;
    if(end[0] == start[0] && end[1] == start[1]) return false;
    if(matrix[start[0]][start[1]] > target || matrix[end[0]][end[1]] < target) return false;
    
    if(matrix[n][m] > target){
        return n > start[0] && searchMatrix(matrix, target, [start[0], m],[n - 1, end[1]]) ||
            m > start[1] && searchMatrix(matrix, target, [n, start[1]], [end[0], m - 1]) ||
            n > start[0] && m > start[1] && searchMatrix(matrix, target, start, [n - 1, m - 1])
    }else{
        return m < end[1] && searchMatrix(matrix, target, [start[0], m + 1],[n, end[1]]) ||
            n < end[0] && searchMatrix(matrix, target, [n + 1, start[1]], [end[0], m]) ||
            n < end[0] && m < end[1] && searchMatrix(matrix, target, [n + 1, m + 1], end)  
    }
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