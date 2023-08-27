/**
 * Calculates the continuous positive integer sequences with sums value equals to the requested number
 * @param {number} n 
 * @returns {number[][]}
 */
function findSequences(n){
    let start = 1;
    let end = 2;
    let result = [];
    while (start < Math.ceil(n / 2)){
      const sum = (start  + end) * (end - start + 1) / 2;
      if(sum == n){
        result.push(Array.from(Array(end - start + 1), (_, i) => start + i));
        start++;
        end++;
      }
      else if(sum > n){
        start++;
      }else{
        end++;
      }
    }
    return result.reverse();
  }