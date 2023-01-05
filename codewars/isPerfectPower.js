/**
 * Checks if the input number is a perfect power
 * @param {number} n 
 * @returns {number}
 */

var isPP = function(n){
    let ans = null;
    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++){
        const e = Number((Math.log(n) / Math.log(i)).toPrecision(12));
        if(Number.isInteger(e)){
        return [i, e];
        }
    }
    return ans;
}