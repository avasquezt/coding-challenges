/**
 * Checks if any arrow in the input array is not damaged
 * @param {Object[]} arrows 
 * @returns {boolean}
 */
function anyArrows(arrows){
    // arrow it
    return arrows.some(({range, damaged}) => !damaged);
}