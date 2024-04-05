/**
 * Checks if the first argument n is divisible by all other arguments
 * @param {number} n
 * @param  {...number} nums 
 * @returns {boolean}
 */
function isDivisible(n, ...nums){
    return nums.every(e => n % e == 0);
}