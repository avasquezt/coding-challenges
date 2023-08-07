/**
 * Finds the value that occurs in more than half of the elements in the input array
 * @param {number} arr 
 * @returns {number}
 */
function dominator(arr) {
  let count = {}
  let max = 0;
  let n = -1;
  for(const e of arr){
    count[e] = (count[e] || 0) + 1;
    if(count[e] > max){
      max = count[e];
      n = e;
    }
  }
  return max > arr.length / 2 ? n : -1;
}
