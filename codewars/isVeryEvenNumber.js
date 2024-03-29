/**
 * Checks if the input number is a "Very Even Number" (its digits sum is even)
 * @param {number} n 
 * @returns {true}
 */
function isVeryEvenNumber(n) {
    while(n > 9){
      n = Math.trunc(n / 10) + n % 10;
    }
    return n % 2 == 0;
}