/**
 * Calculates the maximum point obtainable processing the given questions in the requested order
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    const dp = Array(questions.length).fill(0);
    for(let i = questions.length - 1; i >= 0; i--){
        dp[i] = Math.max(questions[i][0] + (dp[i + 1 + questions[i][1]] || 0), dp[i + 1] || 0);
    }
    return dp[0];
};