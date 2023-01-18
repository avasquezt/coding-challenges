/**
 * Counts the numbers of digits d used in the writing of all the squared numbers smaller than n
 * @param {number} n
 * @param {number}  d
 * @returns {number}
 */

function nbDig(n, d) {
    let count = 0;
    for(let i = 0; i <= n; i++){
        count += (String( i ** 2).match(new RegExp(d, 'g')) || []).length;
    }
    return count;
}