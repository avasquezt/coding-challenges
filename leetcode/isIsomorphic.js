/**
 * Checks if the input strings are isomorphic
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const dict = new Map();
    const seen = new Set();
    for(const i in s){
        const char = s[i];
        const mapping = t[i];
        if(dict.has(char)){
            if(dict.get(char) != mapping) return false;
        }else{
            if(seen.has(mapping)) return false;
            dict.set(char, mapping);
            seen.add(mapping);
        }
    }
    return true;
};