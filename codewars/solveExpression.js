/**
 * Finds the digit that satisfies the input expression
 * @param {string} exp 
 * @returns {number}
 */
function solveExpression(exp) {

    /* 
        ((?<=(^|[-+*=]))-?)?    only match minus '-' preceded by any symbol [+, -, *, =] or at the start of the line
            (?<=(^|[-+*=]))     preceded by any symbol [+, -, *, =] or at the start of the line
            -?                  zero or one dash
        [0-9?]+                 match any sequence of digits and the caracter '?'
    */
    const values = exp.match(/((?<=(^|[-+*=]))-?)?[0-9?]+/g);
    
    /*
        (?<!^)[-+*]             Match the first symbol from [+, -, *] from a position different from the start of the line 
    */
    const operator = exp.match(/(?<!^)[-+*]/)[0];

    
    let i = values.some(n => n.startsWith('?') && n.length > 1 || n.startsWith('-?') && n.length > 2) ? 1 : 0;
    
    for(i; i < 10; i++){
        if(values.every(n => !n.includes(i))){

            // Replace all '?' for the current number and cast to number
            const [op1, op2, result] = values.map(n => Number(n.replace(/\?/g, i)));

            const n = calculate(operator, op1, op2);

            if(result == n) return i;
            console.log(op1, operator, op2, result, n);
        }
    }
    return -1;
}

/**
 * Returns the result of applying the input operator to the given numbers
 * @param {string} operator 
 * @param {number} n1 
 * @param {number} n2 
 * @returns 
 */
function calculate(operator, n1, n2){
    switch(operator){
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
    }
}

// console.log(solveExpression('1+1=?'), 2);
// console.log(solveExpression('1-1=?'), 0);
// console.log(solveExpression('1+-1=?'), 0);
// console.log(solveExpression('123*45?=5?088'), 6);
// console.log(solveExpression('-5?*-1=5?'), 0);
// console.log(solveExpression('19--45=5?'), -1);
// console.log(solveExpression('??*??=302?'), 5);
// console.log(solveExpression('?*11=??'), 2);
// console.log(solveExpression('??*1=??'), 2);
// console.log(solveExpression('-7715?5--484?00=-28?9?5'), 6);
console.log(solveExpression('-?56373--9216=-?47157'), 8);