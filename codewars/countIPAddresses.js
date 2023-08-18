/**
 * Returns the number of addresses between the two input IPv4 addresses
 * @param {string} start 
 * @param {string} end 
 * @returns {number}
 */
function ipsBetween(start, end){
    return parseInt(end.split('.').map(toBinary).join(''), 2) - parseInt(start.split('.').map(toBinary).join(''), 2);
}
  
function toBinary(n){
    return Number(n).toString(2).padStart(8, '0');
}