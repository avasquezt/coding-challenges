/**
 * Merges the input strings by adding letters in alternating order
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let index1 = 0;
    let index2 = 0;
    let ans = '';
    while(index1 < word1.length && index2 < word2.length){
        ans += word1[index1++] + word2[index2++]
    }
    return ans.concat(word1.slice(index1)).concat(word2.slice(index2));
};