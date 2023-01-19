/**
 * Adds the value of the number elements in the input array and subtracts it from the string elements sum
 * @param {number[]} x 
 * @returns {number}
 */

function divCon(x){
    return x.reduce((acc, n) => acc += n * (typeof n == 'number' ? 1 : -1), 0);
}