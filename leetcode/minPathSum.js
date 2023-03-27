/**
 * Calculates the sum of the path from top left to bottom right in the input grid, which minimizes the sum of all numbers along its path
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const cache = Array.from(Array(grid.length), _ => []);
    function dp(i, j, n){
      if(i == grid.length - 1 && j == grid[0].length - 1){
        return n + grid[i][j];
      }else if(i == grid.length || j == grid[0].length){
        return Infinity;
      }if(cache[i][j]){
        return n + cache[i][j];
      }else{
        let tmp = Math.min(dp(i, j + 1, n + grid[i][j]), dp(i + 1, j, n + grid[i][j]));
        cache[i][j] = tmp - n;
        return tmp;
      }
    }
    return dp(0, 0, 0);
  };