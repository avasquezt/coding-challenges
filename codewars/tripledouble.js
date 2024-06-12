/**
 * Checks if there is a straight triple of a number at any place in the first input number and also a straight double of the same number in the second one
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
function tripledouble(num1, num2) {
    const n1 = count(num1,3);
    const n2 = count(num2,2);
    return +([...n1].find(n => n2.has(n)) !== undefined);
  }
  
  function count(number, req){
      let c = 1;
      let last = -1;
      let valid;
      const result = new Set();
      while(number > 0){
        const n = number % 10;
        valid = last == n;
        if (valid) c++;
        else c = 1;
        if (c >= req){
          result.add(n);
        }
        last = n;
        number = Math.trunc(number / 10);
      }
      return result;
  }