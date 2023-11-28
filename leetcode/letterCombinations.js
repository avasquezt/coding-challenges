/**
 * Returns all possible letter combinations that the input number could represent
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits || !digits.length) return [];
    
    const letters = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'};
    
    return backtrack(digits, letters, 0, '', []);
    
    function backtrack(digits, letters, i, curr, result){
        if(i == digits.length) return result.push(curr);
        
        for(const e of letters[digits[i]]){
            curr += e;
            backtrack(digits, letters, i + 1, curr, result);
            curr = curr.slice(0, -1);
        }
        return result;
    }
};