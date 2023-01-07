/**
 * Calculates the maximum difference between two elements of the input array
 * @param {number[]} list 
 * @returns {number}
 */

function maxDiff(list) {
    if (list.length < 2) return 0;
    let max = -Infinity;
    let min = Infinity;
    for(let i = 0; i < list.length; i++){
      if (list[i] < min){
        min = list[i];
      }else if (list[i] > max){
        max = list[i];
      }
    }
    console.log(min, max);
    return max - min;
  };