/**
 * Calculates the Primordial of the input number
 * @param {number} n 
 * @returns {number}
 */
function numPrimorial(n){
    let ans = 1;
    for(let i = 2; n; i++){
      if(isPrime(i)){ 
        ans *= i;
        n--;
      }
    }
    return ans;
}
  
function isPrime(n){
    if(n == 2 || n == 3) return true;
    if(n % 2 == 0 || n % 3 == 0) return false;
    if(n < 5) return false;
    for(let i = 5; i <= Math.sqrt(n); i+=2){
      if(n % i == 0) return false;
    }
    return true;
}