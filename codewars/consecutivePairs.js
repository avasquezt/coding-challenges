/**
 * Counts the number of consecutive pairs in the input array
 * @param {number[]} ar 
 * @returns {number}
 */
function pairs(ar){
    let count = 0;
     for(let i = 0; i < ar.length; i += 2){
       count += Math.abs(ar[i] - ar[i + 1]) == 1 ? 1 : 0;
     }
     return count;
};