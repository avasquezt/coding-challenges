/**
 * Checks if the input number is a valid Credit Card Number
 * @param {number} n 
 * @returns {boolean}
 */
function validate(n){
    return String(n).split('').reduceRight(([r, i], n) => [r += ((n * i) > 9 ? n * i - 9 : n * i), i = (i * 2) % 3], [0, 1])[0] % 10 == 0;
}