/**
 * Remove the duplicates from the input array of integers, keeping the last occurrence of each element
 * @param {number[]} arr 
 * @param {set} seen 
 * @returns {number[]}
 */
function solve(arr, seen = new Set()) {
    return arr.reverse().filter(n => seen.has(n) ? false : Boolean(seen.add(n))).reverse();
}