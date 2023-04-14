/**
 * Calculates the length of the longest palindrome substring from the input text
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    const memo = Array(s.length).fill().map(e => []);
    return dp(s, 0, s.length - 1, memo);

    function dp(string, i, j, memo){
        if(memo[i][j]){
            return memo[i][j];
        }
        if(i > j){
            return 0;
        }
        if(i == j){
            return 1;
        }
        if(string[i] == string[j]){
            memo[i][j] = 2 + dp(string, i + 1, j - 1, memo);
        }else{
            memo[i][j] = Math.max(dp(string, i + 1, j, memo), dp(string, i, j - 1, memo))
        }
        return memo[i][j];
    }
};