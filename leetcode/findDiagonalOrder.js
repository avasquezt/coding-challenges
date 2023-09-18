/**
 * Returns the elements of the input matrix in diagonal order
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const m = mat.length - 1;
    const n = mat[0].length - 1;
    let i = 1;
    let x = y = 0;
    let ans = [mat[0][0]];
    while(x < m || y < n){
        x -= i;
        y += i;
        // If in the border
        if(x < 0 || y < 0 || x > m || y > n){
            // If ascending
            if(i == 1){
                x += 1;
                // If in a corner
                if(y > n){
                    x += 1;
                    y -= 1;
                }
            // If descending
            }else if(i == -1){
                y += 1;
                 // If in a corner
                if(x > m){
                    y += 1;
                    x -= 1;
                }
            }
            // Change direction
            i *= -1;
        }
        ans.push(mat[x][y]);
    }
    return ans;
};