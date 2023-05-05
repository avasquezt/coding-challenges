/**
 * Calculates the number of ocurrences of the most frequent item of the input array
 * @param {number[]} collection 
 * @returns {number}
 */
function mostFrequentItemCount(collection) {
    const count = {};
    let max = 0;
    for(const n of collection){
      count[n] = 1 + (count[n] || 0);
      if(count[n] > max) max = count[n];
    }
    return max;
}