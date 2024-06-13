/**
 * Returns the name of the elevator closest to the called floor
 * @param {number} left 
 * @param {number} right 
 * @param {number} call 
 * @returns {string}
 */
function elevator(left, right, call){
    return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
}