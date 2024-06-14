/**
 * Calculates the number of pairs of gloves in the input array
 * @param {string[]} gloves 
 * @returns {number}
 */
function numberOfPairs(gloves){
    return gloves.reduce(([pairs, seen], e) => [pairs + seen.has(e), seen.delete(e) ? seen : seen.add(e)], [0, new Set()])[0];
}