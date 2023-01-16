/**
 * Counts the number of open doors after n students have entered the school
 * @param {number} n 
 * @returns {number}
 */

function doors(n){
    return Math.trunc(Math.sqrt(n));
}