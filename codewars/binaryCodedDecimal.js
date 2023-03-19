/**
 * Converts the input number to a binary coded decimal (BCD)
 * @param {number} number 
 * @returns {string}
 */
function toBcd(number){
    let n = String(Math.abs(number)).split('').map(n => Number(n).toString(2).padStart(4, '0')).join(' ');
    return (number < 0 ? '-' : '') + n;
}