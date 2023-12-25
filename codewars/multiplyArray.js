/**
 * Returns the input array multiplied by the input integer
 * @param {number[]} arr 
 * @returns {Function}
 */
function multiplyAll(arr){
    return (n) => arr.map(a => a * n);
}