/**
 * Calculates the requested operation and returns the result
 * @param {number} num1 
 * @param {string} operation 
 * @param {number} num2 
 * @returns {number|null}
 */
function calculate(num1, operation, num2) {
    switch(operation){
        case '+':
         return num1 + num2;
        case '-':
         return num1 - num2;
        case '*':
         return num1 * num2;
        case '/':
         return num2 ? num1 / num2 : null;
        default:
         return null;
    } 
}

/**
 * Calculates the requested operation and returns the result
 * @param {number} a 
 * @param {number} b 
 * @param {string} sign 
 * @returns {number|string}
 */
function calculator(a,b,sign){
    if(/^\d+$/.test(a+b) && /\+|\-|\/|\*/.test(sign)){
      return eval(a + sign + b);
    }
    return 'unknown value';
}