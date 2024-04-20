/**
 * Returns the array elements excluding the elements between the input indexes
 * @param {number[]} items 
 * @param {numb} a 
 * @param {numb} b 
 * @returns {number}
 */
function inverseSlice(items, a, b) {
    return items.slice(0, a).concat(items.slice(b));
}