/**
 * Returns the minimum value or index in the input array
 * @param {number[]} arr 
 * @param {string} toReturn 
 * @returns {number}
 */
function min(arr, toReturn) {
    let index = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < arr[index]){
        index = i;
      }
    }
    return toReturn == 'value' ? arr[index] : index;
}