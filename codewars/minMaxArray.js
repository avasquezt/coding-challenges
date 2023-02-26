/**
 * Returns the minimum and maximum value in the input array
 * @param {number[]} arr 
 * @returns {number[]}
 */

function minMax(arr){
    let min = Infinity;
    let max = -Infinity;
    for(const n of arr){
      if(n < min){
        min = n;
      }
      if(n > max){
        max = n;
      }
    }
    return [min, max];
}