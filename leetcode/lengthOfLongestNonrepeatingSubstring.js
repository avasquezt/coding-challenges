/**
 * Calculates the length of the longest substring without repeating characters
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const window = new Set();
    let left = 0, right = 0;
    let currLength = 0;
    let max = -Infinity;
    while(right < s.length){
        const char = s[right];
        if(window.has(char)){
            max = Math.max(max, currLength);
            while(window.has(char) && left < right){
                window.delete(s[left]);
                left++;
            }
            currLength = right - left;
        }
        window.add(char);
        currLength++;
        right++;
    }
    return Math.max(max, currLength);;
};