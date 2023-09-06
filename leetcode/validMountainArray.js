/**
 * Checks if the input array is a valid mountain array (increasing in the first part and decreasing in the last)
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let increasing = false;
    let decreasing = false;
    for(let i = 1; i < arr.length; i++){
      if(arr[i] > arr[i-1]){
          increasing = true;
          if(decreasing) return false;
      }else if(arr[i] < arr[i - 1] && increasing){
          decreasing = true;
      }else{
          return false;
      }
    }
    return decreasing;
};