/**
 * Calculates the maximum product of two adjacent elements from the input array
 * @param {number[]} array 
 * @returns {number}
 */

function adjacentElementsProduct(array) {
    let prod = -Infinity;
    for(let i = 1; i < array.length; i++){
      prod = Math.max(prod, array[i] * array[i - 1]);
    }
    return prod;
}