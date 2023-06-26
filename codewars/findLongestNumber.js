/**
 * Finds the number with the most digits in the input array
 * @param {number[]} array 
 * @returns {number}
 */
function findLongest(array){
  let max = 0;
  let digits = n => Math.floor(Math.log10(n));
  for(const n of array){
    if(digits(n) > digits(max)) max = n;
  }
  return max;
}