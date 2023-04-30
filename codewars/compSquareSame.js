/**
 * Checks if the the elements in the second input array are the elements in the first one squared
 * @param {number[]} array1 
 * @param {number[]} array2 
 * @returns 
 */
function comp(array1, array2){
    if(!array1 || !array2 || array1.length != array2.length) return false
    array2.sort((a,b) => a - b);
    array1.sort((a,b) => a - b);
    for(let i = 0; i < array1.length; i++){
      if(array1[i] ** 2 != array2[i]) return false
    }
     
    return true
}