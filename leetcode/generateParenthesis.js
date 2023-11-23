/**
 * Generates all combinations of n pairs of parentheses
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    backtrack(result, '', n, n);
    return result;
    
    function backtrack(result, curr, left, right){
        if(left > right || left < 0) return result;
        if(left + right == 0){
            result.push(curr);
            return result;
        }
        curr += '(';
        backtrack(result, curr, left - 1, right);
        curr = curr.slice(0, -1);
        curr += ')';
        backtrack(result, curr, left, right - 1);
        curr = curr.slice(0, -1);
    }
};