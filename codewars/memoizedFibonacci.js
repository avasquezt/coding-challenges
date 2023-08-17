/**
 * Calculates the requested value of the fibonacci sequence
 * @param {number} n 
 * @param {?object} cache 
 * @returns {number}
 */
function fibonacci(n, cache = {}) {
    if (n in cache){
      return cache[n];
    }
    if (n < 2)
      return n;
    const result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
    cache[n] = result;
    return result;
}