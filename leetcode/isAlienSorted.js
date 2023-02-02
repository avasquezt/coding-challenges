/**
 * Checks if the words in the input array are sorted in the order given
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    for(let i = 1; i < words.length; i++){
        const n = Math.min(words[i - 1].length, words[i].length);
        let sameChars = true;
        for(let j = 0; j < n; j++){
            const index1 = order.indexOf(words[i - 1][j]);
            const index2 = order.indexOf(words[i][j]);
            if(index1 > index2) return false;
            if(index1 !== index2) sameChars = false;
            if(index1 < index2) break;
        }
        if(sameChars && words[i - 1].length > words[i].length) return false;
    }
    return true;
};