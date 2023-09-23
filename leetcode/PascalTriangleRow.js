/**
 * Calculates the requested row of Pascal's triangle
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let ans = Array.from(Array(rowIndex + 1)).fill(0);
    ans[0] = 1;
    for(let i = 0; i <= rowIndex; i++){
        for(let j = i; j; j--){
            ans[j] += ans[j - 1];
        }
    }
    return ans;
};

