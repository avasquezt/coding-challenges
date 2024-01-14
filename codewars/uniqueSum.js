/**
 * Calculates the sum of the unique values in the input array
 * @param {number} lst 
 * @returns {number}
 */
function uniqueSum(lst){
    const seen = new Set();
    let sum = 0;
    lst.forEach(n => {
      sum += seen.has(n) ? 0 : n;
      seen.add(n);
    })
    return lst.length ? sum : null;
}