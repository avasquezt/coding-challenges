/**
 * Converts all even indexed characters in each word to upper case
 * @param {string} string 
 * @returns {string}
 */
function toWeirdCase(string){
  let upper = true;
  let result = '';
  for(const char of string){
    if(char == ' '){
      result += char;
      upper = true;
    }else{
      result += upper ? char.toUpperCase() : char.toLowerCase();
      upper = !upper;
    }
  }
  return result;
}