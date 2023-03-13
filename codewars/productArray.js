/**
 * Maps the value of each element in the input array to the product of the elements excluding its value
 * @param {number[]} numbers 
 * @param {number} prod 
 * @returns {number}
 */
function productArray(numbers, prod = numbers.reduce((e, n) => e *= n, 1)){
    return prod > 1 ? numbers.map(n => prod / n) : 0;
}