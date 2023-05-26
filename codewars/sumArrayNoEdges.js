/**
 * Calculates the sum of the elements in the input array excluding the max and min values
 * @param {number[]} array 
 * @returns {number}
 */
function sumArray(array) {
    if( !array || array.length < 2) return 0;
    let min = Infinity, max = -Infinity, sum = 0;
    for(const n of array){
      min = Math.min(min, n);
      max = Math.max(max, n);
      sum += n;
    }
    return sum - min - max;
}