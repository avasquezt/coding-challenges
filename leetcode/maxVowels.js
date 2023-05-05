/**
 * Calculates the maximum number of vowels in a substring of the input string with the requested length
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let count = 0;
    let start = 0;
    let end = 0;
    while(end < k){
        if('aeiou'.includes(s[end])) count++;
        end++;
    }

    let max = count;

    while(end < s.length){
        if('aeiou'.includes(s[start])) count--;
        if('aeiou'.includes(s[end])) count++;
        start++;
        end++;
        max = Math.max(max, count);
    }
    
    return max;
};