/**
 * Finds the first non repeating char in the input string
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const count = new Map();
    for(let i = 0; i < s.length; i++){
        const char = s[i];
        count.set(char, [i, 1 + (count.has(char) ? count.get(char)[1] : 0)]);
    }
    for(const [char, val] of count.entries()){
        if(val[1] == 1) return val[0];
    }
    return -1;
};