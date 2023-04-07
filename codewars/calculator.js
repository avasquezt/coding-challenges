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