/**
 * Returns a string representing a histogram of the input dice value frequencies
 * @param {number[]} results 
 * @returns {string}
 */
function histogram(results) {
    return results.reduceRight((s, n, i) => s + `${i + 1}|${n > 0 ? '#'.repeat(n) + ' '+ n : ''}\n`, '');
}