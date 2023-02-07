/**
 * Applies the input operator to the given numbers and returns the result 
 * @param {number} a 
 * @param {number} b 
 * @param {string} operator 
 * @returns {number}
 */
function arithmetic(a, b, operator){
    switch(operator){
        case 'add':
          return a + b;
        case 'subtract':
          return a - b;
        case 'multiply':
          return a * b;
        case 'divide':
          return a / b;
    }
}