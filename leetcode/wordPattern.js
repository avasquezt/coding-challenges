/**
 * Checks if the input string matches the requested pattern
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const map = new Map();
    const words = s.split(' ');
    if(pattern.length != words.length) return false;
    for(let i = 0; i < pattern.length; i++){
        if(map.has(pattern[i])){
            if (map.get(pattern[i]) != words[i]) return false;
        }else{
            map.set(pattern[i], words[i]);
        }
    }
    return map.size == new Set(map.values()).size;
};