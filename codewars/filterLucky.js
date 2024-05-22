/**
 * Returns the elements from the input array that contain the digit 7
 * @param {number[]} x 
 * @returns {number[]}
 */
var filterLucky=x=>{
    return x.filter(n => String(n).includes('7'));
}