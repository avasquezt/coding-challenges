/**
 * Finds all the elements in the input array that are non consecutive
 * @param {number[]} arr 
 * @returns {object[]}
 */
function allNonConsecutive (arr) {
    return arr.slice(1).reduce((r, n, i) => n == (1 + arr[i]) ? r : r.concat({i:i + 1, n:n}), []);
}