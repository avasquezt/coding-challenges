/**
 * Finds The maximum difference between the successive elements in the sorted input array
 * @param {number[]} numbers 
 * @returns {number}
 */
function maxGap (numbers){
    return numbers.sort((a,b) => a - b).slice(1).reduce((max, n, i) => Math.max(Math.abs(numbers[i] - n), max), 0);
}