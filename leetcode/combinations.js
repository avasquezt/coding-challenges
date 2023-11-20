/**
 * Returns all possible combinations of k numbers chosen from the range [1, n]
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    return backTrack(1, n, k, [], [])
    
    function backTrack(i, n, k, ans, curr){
        if(curr.length == k){
            return ans.push(curr.slice());
        }
        for(let c = i; c <= n; c++){
            curr.push(c);
            backTrack(c + 1, n, k, ans, curr);
            curr.pop();
        }
        return ans;
    }
};