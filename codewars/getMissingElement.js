/**
 * Finds the missing number in the input sequence
 * @param {number[]} superImportantArray 
 * @returns {number}
 */
function getMissingElement(superImportantArray){
//   for(let i = 0; i < 10; i++){
//     if(!superImportantArray.includes(i)) return i;
//   }
  return 45 - superImportantArray.reduce((acc, n) => acc + n);
}