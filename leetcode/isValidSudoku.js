/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    let seen = new Map();
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9;j++){
            if(board[i][j] != '.'){
                if(seen.has(`row ${i} val ${board[i][j]}`) || seen.has(`column ${j} val ${board[i][j]}`) || seen.has(`block ${Math.floor(i/3)},${Math.floor(j/3)} val ${board[i][j]}`)){
                    return false;
                }else{
                    seen.set(`row ${i} val ${board[i][j]}`, true);
                    seen.set(`column ${j} val ${board[i][j]}`, true);
                    seen.set(`block ${Math.floor(i/3)},${Math.floor(j/3)} val ${board[i][j]}`, true);
                }
            }
        }
    }
   return true;
};

console.log(isValidSudoku(
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]));

console.log(isValidSudoku(
    [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
));

console.log(isValidSudoku(
    [[".",".",".",".","5",".",".","1","."]
    ,[".","4",".","3",".",".",".",".","."]
    ,[".",".",".",".",".","3",".",".","1"]
    ,["8",".",".",".",".",".",".","2","."]
    ,[".",".","2",".","7",".",".",".","."]
    ,[".","1","5",".",".",".",".",".","."]
    ,[".",".",".",".",".","2",".",".","."]
    ,[".","2",".","9",".",".",".",".","."]
    ,[".",".","4",".",".",".",".",".","."]]
))