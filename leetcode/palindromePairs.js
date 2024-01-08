/**
 * Finds all the palindrome pairs in the input array
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    const ans = [];
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words.length; j++){
            if( i != j && words[i] + words[j] == (words[i] + words[j]).split('').reverse().join(''))
                ans.push([i,j]);
        }
    }
    return ans;
};