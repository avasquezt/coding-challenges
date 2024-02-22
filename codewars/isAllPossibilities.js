/**
 * Checks if the input array contains all numbers between 0 and its length
 * @param {number[]} x 
 * @returns {boolean}
 */
function isAllPossibilities(x){
    const elements = new Set(x);
    for(let i = 0; i < x.length; i++){
      if(!elements.has(i)) return false;
    }
    return x.length > 0;
}