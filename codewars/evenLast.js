/**
 * Calculates the sum of all the integers that have an even index, multiplied by the integer at the last index
 * @param {number} numbers 
 * @returns {number}
 */
function evenLast(numbers) {
    return numbers.reduce((acc,n,i) => acc + (i % 2 ? 0 : n) * numbers.at(-1), 0);
}