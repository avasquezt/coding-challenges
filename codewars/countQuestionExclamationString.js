/**
 * Counts the number of question and exclamation marks in the input string and returns the product
 * @param {string} string 
 * @returns {number}
 */
function product (string) {
  let a = 0, b = 0;
  for(const e of string){
    if(e == '!'){
      a++;
    }else if(e == '?'){
      b++;
    }
  }
  return a * b;
}