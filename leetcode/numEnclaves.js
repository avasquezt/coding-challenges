/**
 * Calculates the number of unconnected land cells in the input matrix
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let n = 0;
    let count;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == 1){
                count = 0;
                n += dp(i, j) ? count : 0;
            }
        }
    }

    function dp(i, j, n){
        if(grid[i][j] == 0){
            return true;
        }

        if(i == 0 || i == grid.length - 1 || j == 0 || j == grid[0].length - 1){
            return false;
        }

        grid[i][j] = 0;
        count++;
        const dp1 = dp(i + 1, j);
        const dp2 = dp(i - 1, j);
        const dp3 = dp(i, j - 1);
        const dp4 = dp(i, j + 1);
        return (dp1 && dp2 && dp3 && dp4);
    }

    return n;
};