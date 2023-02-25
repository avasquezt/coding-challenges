/**
 * Returns the square numbers in the requested range with even digits
 * @param {number} a 
 * @param {number} b 
 * @returns {number[]}
 */
function evenDigitSquares(a, b) {
    const ans = [];
    for(let i = Math.ceil(Math.sqrt(a)); i <= Math.sqrt(b); i++){
      const n = String(i * i);
      let valid = true;
      for(const char of n){
        if(char % 2){
          valid = false;
        }
      }
      if(valid){
        ans.push(Number(n));
      }
    }
    return ans;
}