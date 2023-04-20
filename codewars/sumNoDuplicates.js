/**
 * Adds the unique numbers in the input list
 * @param {number[]} numList 
 * @returns {number}
 */
function sumNoDuplicates(numList) {
    const seen = {};
    let sum = 0;
    for(const n of numList){
      if(n in seen){
        sum += n * seen[n];
        seen[n] = 0;
      }else{
        sum += n;
        seen[n] = -1;
      }
    }
    return sum;
}