/**
 * Returns the string representation of the sum of the input integers
 * @param {string} a 
 * @param {string} b 
 * @returns 
 */
function sumStrings(a,b) { 
    let sum = '';
    let c = 0;
    for(let i = 1; i <= Math.max(a.length, b.length); i++){
      const n = Number(a.at(-i) || 0) + Number(b.at(-i) || 0) + c;
      sum = (n % 10) + sum;
      c = Math.trunc(n / 10);
    }
    return ((c || '') + sum).replace(/^0*/, '');
}