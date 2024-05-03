/**
 * Reduces the passed integer to a single digit by taking the sum of the binary digits
 * @param {number} n 
 * @returns {number}
 */
function singleDigit(n) {
    if (n < 9) return n;
    let c = 0;
    while(c == 0 || c > 9){
      c = 0;
      while(n > 0){
        c += n & 1;
        n = n >> 1;
      }
      n = c;
    }
    return c;
}