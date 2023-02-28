/**
 * Checks if the input number is prime
 * @param {number} num 
 * @returns {boolean}
 */

function isPrime(num) {
    if(num < 2) return false;
    if(num == 2 || num == 3) return true;
    if(num % 2 == 0 || num % 3 == 0) return false;
    for(let i = 5; i <= Math.sqrt(num); i+=2){
      if(num % i == 0) return false;
    }
    return true;
  }
  