/**
 * Checks if the input string is a palindrome
 * @param {string} string 
 * @returns {boolean}
 */

function palindrome(string) {
    let start = 0;
    let end = string.length - 1;
    while(start < end){
      
      while(!/([a-z]|\d)/i.test(string[start])) start ++;
      while(!/([a-z]|\d)/i.test(string[end])) end --;
      
      if(string[start].toLowerCase() != string[end].toLowerCase()){
        return false;
      }
      start++;
      end--;
    }
    return true
}