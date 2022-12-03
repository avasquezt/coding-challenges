/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    let occ = {};
    for(const char of s){
        occ[char] = 1 +(occ[char]  || 0);
    }
    return s.split('').sort((a, b) => occ[b] - occ[a] || b.localeCompare(a)).join('');
};