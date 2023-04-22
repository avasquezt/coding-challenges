/**
 * Calculates the number of arithmetic carries during the calculations with the input numbers
 * @param {string} input 
 * @returns {string}
 */
function solve(input){
    const numbers = input.split('\n');
    let ans = [];
    
    for(const pair of numbers){
      
      const [n1, n2] = pair.split(' ');
      let n = 0;
      
      for(let i = -1, carry = 0; i >= -1 * Math.max(n1.length, n2.length); i--){
        
        carry = ((+n1.at(i) + +n2.at(i) + carry) > 9) ? 1 : 0;
        n += carry;
        
      }
      
      ans.push(n > 0 ? `${n} carry operations` : 'No carry operation');
    }
    
    return ans.join('\n');
  }