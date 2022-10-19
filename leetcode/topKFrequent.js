/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    let ocurrences = new Map();
    for(let word of words){
        ocurrences.set(word, ocurrences.get(word) + 1|| 1);
    }
    console.log(ocurrences);
    return [...ocurrences.keys()].sort((a,b) => (ocurrences.get(b) - ocurrences.get(a)) || a.localeCompare(b)).slice(0, k);
};

console.log(topKFrequent(["i","love","leetcode","i","love","coding"], 2))