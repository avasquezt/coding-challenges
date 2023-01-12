/**
 * Returns the maximum sum of k elements of ls, less or equal to t
 * @param {number} t - Sum limit
 * @param {number} k - Number of elements to sum
 * @param {number[]} ls - Source array
 * @returns {number}
 */

function chooseBestSum(t, k, ls) {
    function df(i, n, currSum){
        if(currSum > t){
        return null;
        }
        if(n == 0){
        return currSum;
        }
        if(i >= ls.length){
        return null;
        }
        return Math.max(df(i + 1, n, currSum), df(i + 1, n - 1, currSum + ls[i]));
    }
    return df(0, k, 0) || null;
}