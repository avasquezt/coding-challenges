/**
 * Converts the input unsigned 32 bit number to a IPv4 address
 * @param {number} int32 
 * @returns {string}
 */
function int32ToIp(int32){
    return int32.toString(2).padStart(32, '0').match(/.{8}/g).map(n => parseInt(n, 2)).join('.');
}