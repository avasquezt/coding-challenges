/**
 * Replaces each character with its number of ocurrences
 * @param {string} str - String to replace
 * @param {string} sep - Separator of the output string
 * @returns {string}
 */

function freqSeq(str, sep) {
    const occ = {};
    for(const char of str){
      occ[char] = 1 + (occ[char] || 0);
    }
    return str.split('').map(char => occ[char]).join(sep);
  }
  