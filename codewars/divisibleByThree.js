/**
 * Checks if the input number is divisible by three
 * @param {string} str 
 * @returns {boolean}
 */
function divisibleByThree(str){
  const n = str.split('').reduce((acc, e) => acc + Number(e), 0);
  return Number.isInteger(n/3);
}