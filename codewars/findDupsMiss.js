/**
 * Finds the missing and duplicates values in the input array
 * @param {number[]} arr 
 * @returns {number[]}
 */
function findDupsMiss(arr) {
  let min = Infinity;
  let max = -Infinity;
  let seen = {};
  let dups = new Set();
  for(const n of arr){
    if(n < min) min = n;
    if(n > max) max = n;
    if(n in seen){
      dups.add(n);
    }else{
      seen[n] = true;
    }
  }
  let missing;
  for(let i = min; i < max; i++){
    if(!(i in seen)){ 
      missing = i;
      break;
    }
  }
  return [missing, [...dups].sort((a,b) => a - b)];
}