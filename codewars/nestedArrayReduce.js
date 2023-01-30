/**
 * Calculates the sum of each input array's nested array multiplied by 20
 * @param {[number[]]} s 
 * @returns {number}
 */

function stairsIn20(s){
    return s.reduce((acc, n) => acc + n.reduce((totalDay, d) => totalDay + d, 0) * 20, 0);
}