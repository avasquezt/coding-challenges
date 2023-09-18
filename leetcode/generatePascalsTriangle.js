/**
 * Generates the requested number of rows of Pascal's triangle
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans = [[1]];
    for(let i = 1; i < numRows; i++){
        let curr=[1];
        for(let j = 1; j < i; j++){
             curr.push(ans[i - 1][j - 1] + ans[i - 1][j]);
        }
        curr.push(1);
        ans.push(curr);
    }
    return ans;
};