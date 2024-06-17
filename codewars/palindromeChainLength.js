/**
 * Calculates the number of special steps needed to obtain a palindrome with the input number
 * @param {number} n 
 * @returns {number}
 */
var palindromeChainLength = function(n) {
    let c = 0;
    while(!isPalindrome(n)){
      n = n + +String(n).split('').reverse('').join('');
      c++;
    }
    return c;
    
    function isPalindrome(n){
      return n == String(n).split('').reverse('').join('');
    }
};