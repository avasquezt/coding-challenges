/**
 * Finds the duplicates in the input array
 * @param {any[]} arr 
 * @returns {any[]}
 */
function duplicates(arr) {
    const set = new Set();
    const ans = new Set();
    arr.forEach(n => set.has(n) ? ans.add(n) : set.add(n));
    return [...ans];
}