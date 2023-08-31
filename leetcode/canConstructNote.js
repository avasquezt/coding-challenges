/**
 * Checks if the input note can be constructed by using the available letters
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let avail = new Map();
    for(const char of magazine){
        avail.set(char, (avail.get(char) || 0) + 1);
    }
    for(const char of ransomNote){
        avail.set(char, (avail.get(char) || 0) - 1);
        if(avail.get(char) < 0) return false;
    }
    return true;
};