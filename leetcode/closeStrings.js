/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
 var closeStrings = function(word1, word2) {
    function freq(word){
        let occ = {};
        for(let e of word){
            occ[e] = 1 + (occ[e] || 0);
        }
        return occ;
    }
    let chars1 = freq(word1);
    let chars2 = freq(word2);
    
    return Object.keys(chars1).sort().join('') == Object.keys(chars2).sort().join('') && Object.values(chars1).sort().join('') == Object.values(chars2).sort().join('');
};