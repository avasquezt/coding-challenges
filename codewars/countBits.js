/**
 * Returns the number of bytes equal to one on the binary representation of the input number
 * @param {number} n 
 * @returns {number}
 */
var countBits = function(n) {
    let count = 0;
    for(const char of n.toString(2)){
      if(+char) count++;
    }
    return count;
};