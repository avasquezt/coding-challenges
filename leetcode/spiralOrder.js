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


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let v = [0, matrix.length - 1];
    let h = [0, matrix[0].length - 1];
    let i = 1;
    let p = 0;
    const ans = [];
    while(v[0] <= v[1] && h[0] <= h[1]){
        for(let j = h[p]; j >= h[0] && j <= h[1]; j += i){
            ans.push(matrix[v[p]][j]);
        }
        v[p] += i;
        for(let j = v[p]; j >= v[0] && j <= v[1]; j += i){
            ans.push(matrix[j][h[p^1]]);
        }

        i *= -1;
        p ^= 1;
        
        h[p] += i;
    }
    return ans;
};