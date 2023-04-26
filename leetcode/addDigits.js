/**
 * Adds the digits of the input number until the result has only one digit
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(!num) return num;
    return num % 9 ? num % 9 : 9;
};

var addDigits = function(num) {
    return 1 + (num - 1) % 9;
};

