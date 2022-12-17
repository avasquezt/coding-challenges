/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let numbers = [];
    for(token of tokens){
        if("+-*/".includes(token)){
            const op2 = numbers.pop();
            const op1 = numbers.pop();
            let result = 0;
            switch(token){
                case '+':
                    result = op1 + op2;
                    break;
                case '-':
                    result = op1 - op2;
                    break;
                case '*':
                    result = op1 * op2;
                    break;
                case '/':
                    result = Math.trunc(op1 / op2);
                    break;
            }
            numbers.push(result);

        }else{
            numbers.push(Number(token));
        }
    }
    return numbers.pop();
};