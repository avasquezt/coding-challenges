/**
 * Checks if all rotations of the input string are included in the array
 * @param {string} strng 
 * @param {string[]} arr 
 * @returns {boolean}
 */
function containAllRots(strng, arr) {
  for(let i = 0; i < strng.length; i++){
    strng = strng.slice(-1) + strng.slice(0, strng.length - 1);
    if(!arr.includes(strng)) return false;
  }
  return true;
}