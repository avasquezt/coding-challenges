/**
 * Converts the input IPv4 address to a 32 bit number
 * @param {string} ip 
 * @returns {number}
 */
function ipToInt32(ip){
    return parseInt(ip.split('.').map(n => Number(n).toString(2).padStart(8, '0')).join(''), 2);
}