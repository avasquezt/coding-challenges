/**
 * Calculates the least number of perfect square numbers that sum to n
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = Array(n + 1);
    dp[0] = 0;
    
    for(let i = 1; i <= n; i++){
        dp[i] = i;
        for(let j = 1; j * j <= i; j++){
            dp[i] = Math.min(dp[i], 1 + dp[i - j * j]);
        }
    }
    return dp[n];
};

/**
 * BFS
 */
var numSquares = function(n) {
    const queue = new Queue();
    queue.push(n);
    let steps = 0;
    while(!queue.isEmpty()){
        let size = queue.size();
        steps++;
        while(size--){
            let curr = queue.pop();
            for(let i = 1; i * i <= curr; i++){
                let res = curr - i * i;
                if(res == 0) return steps;
                queue.push(res);
            }
        }
    }
    return 0;
};