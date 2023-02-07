/**
 * Finds the Hamming distance between the two input strings
 * @param {string} a 
 * @param {string} b 
 * @returns {number}
 */

function hamming(a,b) {
    let diffs = 0;
    for(const i in a){
      if(a[i] !== b[i]){
        diffs++;
      }
    }
    return diffs;
}