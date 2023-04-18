/**
 * Finds the different number in the input array
 * @param {number} numbers 
 * @returns {number}
 */
function stray(numbers) {
    return numbers.find((n, i, arr) => n != arr.at(i - 1) && n != arr.at((i + 1) % arr.length));
}