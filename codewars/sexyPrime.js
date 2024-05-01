/**
 * Checks if the input numbers are sexy primes (prime numbers with a difference of 6)
 * @param {number} x 
 * @param {number} y 
 * @returns 
 */
function sexyPrime(x, y){
    if(!isPrime(x) || !isPrime(y)) return false;
    return Math.abs(x - y) == 6;
}
  
function isPrime(x){
    if(x == 2 || x == 3) return true;
    if(x < 5 || x % 2 == 0 || x % 3 == 0) return false;
    for(let i = 5; i <= Math.sqrt(x); i += 2){
      if(x % i == 0) return false;
    }
    return true;
}