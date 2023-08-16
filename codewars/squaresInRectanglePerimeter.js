/**
 * Calculates the perimeter sum of the requested number of squares in a rectangle
 * @param {number} n 
 * @returns {number}
 */
function perimeter(n) {
    let fib = [0, 1];
    let sum = 1;
    for(let i = 0; i < n; i++){
      [fib[0], fib[1]] = [fib[1], fib[0] + fib[1]];
      sum += fib[1];
    }
    return sum * 4;
}