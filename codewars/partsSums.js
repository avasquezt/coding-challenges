/**
 * Calculates the sums of the input array parts
 * @param {number[]} ls 
 * @returns {number[]}
 */
function partsSums(ls) {
    return ls.reduceRight((arr, n, i) => (arr[i] = n + arr[i + 1], arr), Array(ls.length + 1).fill(0));
}