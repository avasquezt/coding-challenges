/**
 * Calculates the number of folds needed so a paper with a thickness of 0.00001 m reaches the required distance
 * @param {number} distance 
 * @returns {number|null}
 */
function foldTo(distance) {
    if(distance < 0) return null;
    return distance < 0.0001 ? 0 : Math.ceil(Math.log2((distance * 10000) || 1));
}