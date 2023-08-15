/**
 * Converts the input RGB decimal values to a hexadecimal representation
 * @param  {...number} c 
 * @returns {string}
 */
function rgb(...c){
    return c.map(n => Math.min(255, Math.max(0, n)).toString(16).toUpperCase().padStart(2, '0')).join('');
}