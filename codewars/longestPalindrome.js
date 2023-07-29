/**
 * Calculates the length of the longest palindrome substring in the input text
 * @param {string} s 
 * @returns {number}
 */
function longestPalindrome(s){
    let max = 0;
    for(let i = 0; i < s.length; i++){
      
      // If the current element is not in the middle of the palindrome
      let right = i;
      let left = i - 1;
      let curr = 0;
      while(left >= 0 && right < s.length && s[left] == s[right]){
        curr += 2;
        left--;
        right++;
      }
      max = Math.max(curr, max);
      
      // If the current element is in the middle of the palindrome
      left = i - 1;
      right = i + 1;
      curr = 1;
      while(left >= 0 && right < s.length && s[left] == s[right]){
        curr += 2;
        left--;
        right++;
      }
      max = Math.max(curr, max);
    }
    return max;
  }