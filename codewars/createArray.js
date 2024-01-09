/**
 * Returns an array with the requested length
 * @param {number} number 
 * @returns {number[]}
 */
function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number;counter++){
      newArray.push(counter);
    }
    
    return newArray;
}