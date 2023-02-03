/**
 * Writes a string representing the zigzag pattern of the input string of the requested number of rows
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function(s, numRows) {
    const ans = [];
    let index = 0, step = -1;
    for(const char of s){
        ans[index] = (ans[index] || '') + char;
        if (index == 0 || index == numRows - 1){
            step = -step;
        }
        index += step;
    }
    return ans.join('');
};

console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 4));
console.log(convert('PA', 5));
console.log(convert('PAYPALISHIRING', 1));