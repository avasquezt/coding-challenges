/**
 * Calculates the minimum cost of traveling every day in the given list of days
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {

    const cache = Array(days.length).fill();

    function dp(i, n, expiration){
        if(i == days.length){
            return n;
        }else if(expiration > days[i]){
            return dp(i + 1, n, expiration);
        }else if(cache[i]){
            return n + cache[i];
        }else{
            const tmp = Math.min(dp(i + 1, n + costs[0], 0), dp(i + 1, n + costs[1], days[i] + 7), dp(i + 1, n + costs[2], days[i] + 30));
            cache[i] = tmp - n;
            return tmp;
        }
    }

    return dp(0, 0, 0);
};


var mincostTickets = function(days, costs) {
    const n = days[days.length -1];
    const dp = new Array(n+1).fill(0);

    let i = 0;
    for (let day = 1; day <= n; day++) {
        if (day === days[i]) {
            dp[day] = Math.min(dp[day-1] + costs[0], dp[Math.max(0, day-7)] + costs[1], dp[Math.max(0, day-30)] + costs[2]);
            i++;
        } else {
            dp[day] = dp[day-1];
        }
    }
    return dp[n];
};