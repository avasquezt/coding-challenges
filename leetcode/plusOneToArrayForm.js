/**
 * Adds one to the number represented by the input array digits
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let acum = 1;
    for(let i = digits.length - 1; i >= 0; i--){
        acum += digits[i];
        digits[i] = acum % 10;
        acum = Math.trunc(acum/10);
    }
    return acum ? [acum].concat(digits) : digits;
};