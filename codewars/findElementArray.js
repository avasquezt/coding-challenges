/**
 * Finds the index of the 'O' in the input array
 * @param {string[]} x 
 * @returns {string|number}
 */
function meeting(x){
    const e = x.indexOf('O');
    return e > -1 ? e : 'None available!';
}