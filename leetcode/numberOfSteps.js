/**
 * Calculates the number of steps to reduce the input number to zero
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let n = 0;
    while(num > 0){
        n += 1 + num % 2;
        num = num >> 1;
    }
    return n && n - 1;
};