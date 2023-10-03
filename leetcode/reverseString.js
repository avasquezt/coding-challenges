/**
 * Reverses the input string in place
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;
    while(i < j){
        [s[i], s[j]] = [s[j], s[i]];
        i++, j--;
    }
    return s;
};

/**
 * Recursive  
 */
var reverseString = function(s) {
    function reverse(i, j) {
        if (i >= j) return;
        [s[i], s[j]] = [s[j], s[i]];
        reverse(i + 1, j - 1);
    }
    
    reverse(0, s.length - 1);
};