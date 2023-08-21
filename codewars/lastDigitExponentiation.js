/**
 * Calculates the last digit of the exponentiation between the two input numbers
 * @param {string} str1 
 * @param {string} str2 
 * @returns {number}
 */
var lastDigit = function(str1, str2){ 
    if(Number(str2) == 0) return 1;
    
    const lastDigits = [[0,0,0,0], [1,1,1,1], [2,4,8,6], [3,9,7,1], [4,6,4,6], [5,5,5,5], [6,6,6,6], [7,9,3,1], [8,4,2,6], [9,1,9,1]];
    let last = str1.at(-1);
    
    // Calculate mod 4 of exponent
      let mod = 0;
    
      for (let i = 0; i < str2.length; i++)
          mod = (mod * 10 + Number(str2[i])) % 4;
  
    return lastDigits.at(last).at(mod - 1);
}