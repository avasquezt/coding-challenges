/**
 * Returns the solution for the input Sudoku puzzle
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    backtrack(board, 0, 0);
    return board;
    
    function backtrack(board, i, j){
        if(i >= 9) return true;
        if(j >= 9) return backtrack(board, i + 1, 0);
        if(board[i][j] != '.') return backtrack(board, i, j + 1);
        for(let c = 1; c <= 9; c++){
            if(isValid(board, i, j, c)){
                board[i][j] = `${c}`;
                if(backtrack(board, i, j + 1)) return true;
                board[i][j] = '.';
            }
        }
        return false;
    }
    
    function isValid(board, row, col, val){
        for(let j = 0; j < 9; j++) if(board[row][j] == val) return false;
        for(let i = 0; i < 9; i++) if(board[i][col] == val) return false;
        for(let i = 0; i < 3; i++)
             for(let j = 0; j < 3; j++)
                 if(board[row - row % 3 + i][col - col % 3 + j] == val) return false;
        return true;
    }
};