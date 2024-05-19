/**
 * Doubles every second integer in the input array
 * @param {number[]} a 
 * @returns {number[]}
 */
function doubleEveryOther(a) {
    return a.map((n, i) => n * (i % 2 ? 2 : 1));
}