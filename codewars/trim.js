/**
 * Trims the input string to the requested size
 * @param {string} str 
 * @param {number} size 
 * @returns {string}
 */

function trim(str, size) {
    if(str.length > size){
      if(str.length <= 3 || size <= 3){
        return str.slice(0, size) + '...';
      }
      return str.slice(0, size - 3) + '...';
    }else{
      return str;
    }
}
  
console.log(trim('qQAR',3));
console.log(trim('tXXub wk dIiX UT',3));
console.log(trim('Creating kata is fun',14));
console.log(trim('Creating kata is fun',3));