/**
 * Finds the position of all the start indices of p's anagrams in s
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function(s, p) {

    if(p.length > s.length) return [];

    const chars = Array(26).fill(0);
    for(const char of p){
        chars[char.charCodeAt(0) - 97]++;
    }
    const occurrences = Array(26).fill(0);
    for(let i = 0; i < p.length; i++){
        occurrences[s[i].charCodeAt(0) - 97]++;
    }
    let ans = [];
    if(chars.every((n, i) => n == occurrences[i])) ans.push(0);
    for(let i = p.length; i < s.length; i++){
        occurrences[s[i - p.length].charCodeAt(0) - 97]--;
        occurrences[s[i].charCodeAt(0) - 97]++;
        if(chars.every((n, j) => n == occurrences[j])) ans.push(i - p.length + 1);
    }

    
    return ans;
};

console.log(findAnagrams("abab", 'ab'));
console.log(findAnagrams("cbaebabacd", 'abc'));
console.log(findAnagrams("baa", 'aa'));