/**
 * Returns the elements of the input matrix in spiral order
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let increment = 1;
    let i = j = 0;
    let n = matrix.length - 1;
    let m = matrix[0].length - 1;
    let ans = [];

    while(i <= m && j <= n){
        // Starting point
        let x = increment > 0 ? i : m;
        let y = increment > 0 ? j : n;
        
        // Horizontal directon
        while(x >= i && x <= m){
            ans.push(matrix[y][x]);
            x += increment;
        }
        x -= increment;
        y += increment;
        
        // Vertical direction
        while(y >= j && y <= n){
            ans.push(matrix[y][x]);
            y += increment;
        }
        
        // Increase decresase the ranges
        if(increment > 0){
            j++;
            m--;
        }else{
            i++;
            n--;
        }

        // Switch direction
        increment *= -1;
    }
    return ans;
};