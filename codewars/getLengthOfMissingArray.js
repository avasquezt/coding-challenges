/**
 * Returns the length of the missing array so that the input array element length-values are consecutive
 * @param {any[]} arr 
 * @returns {number}
 */
function getLengthOfMissingArray(arr) {
    if(!arr || !arr.length) return 0;
    arr.sort((a, b) => (a && a.length || 0) - (b && b.length || 0));
    for(const i in arr){
      if(!arr[i] || !arr[i].length) return 0;
      if(arr[+i + 1].length - arr[i].length > 1) return arr[i].length + 1;
    }
    return 0;
}
  