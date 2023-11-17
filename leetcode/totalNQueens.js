/**
 * Calculates the number of queens that can be placed on a chessboard without attacking each other
 * @param {number} n - Chessboard size
 * @return {number}
 */
var totalNQueens = function(n) {
    return backtrack(n, 0, 0, new Set());
    
    function backtrack(n, row, count, queens){
        for(let i = 0; i < n; i++){
            if (isValid(row, i, queens)){
                // Place Queen
                queens.add(`${row},${i}`);
                if(row + 1 == n){
                    count++;
                }else{
                    count = backtrack(n, row + 1, count, queens);
                }
                // Remove Queen
                queens.delete(`${row},${i}`);
            }
        }
        return count;
    }
    
    function isValid(row, column, queens){
        for(const queen of queens.values()){
            const [i, j] = queen.split(',');
            // Check same row
            if(row == i) return false;
            // Check same column;
            if(column == j) return false;
            // Check diagonals
            if(Math.abs(column - j) == Math.abs(row - i)) return false;
        }
        return true;
    }
};