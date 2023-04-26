/**
 * Calculates the maximum sum between two negative numbers in the input array
 * @param {number[]} a 
 * @returns {number}
 */
function maxSumBetweenTwoNegatives(a) {
    let valid = false;
    let max = -1;
    let sum = 0;
    for(const n of a){
      if(n < 0){
        if(valid){
          max = Math.max(max, sum);
        }
        valid = true;
        sum = 0;
      }else if(valid){
          sum += n;
      }
    }
    return max;
}