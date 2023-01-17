/**
 * Calculates the minimum number of flips to make the input string monotone increasing
 * @param {string} s
 * @return {number}
 */

var minFlipsMonoIncr = function(s) {
    let count1 = 0, ans = 0;
    for(const char of s){
        if(char == 1){
            count1++;
        }else{
            ans = Math.min(ans + 1, count1);
        }
    }
    return ans;
};