/**
 * Resolves the input dot equation, and returns the result in dots
 * @param {string} equation 
 * @returns {string}
 */
function dotCalculator (equation) {
    const [n1, op, n2] = equation.split(' ');
    let n;
    switch(op){
        case '+':
            n = n1.length + n2.length;
            break;
        case '-':
            n = n1.length - n2.length;
            break;
        case '*':
            n = n1.length * n2.length;
            break;
        case '//':
            n = n1.length / n2.length;
            break;
    }
    return '.'.repeat(n);
}