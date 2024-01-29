/**
 * Calculates the sum of the prime-numbered indices in the input array
 * @param {number[]} arr 
 * @returns {number}
 */
function total(arr){
    return arr.reduce((r, n, i) => r + (isPrime(i) ? n : 0), 0);
};
  
function isPrime(n) {
    if(n < 2) return false;
    if(n == 2 || n == 3) return true;
    if(n % 2 == 0 || n % 3 == 0) return false;
    for(let i = 5; i <= Math.sqrt(n); i+=2){
        if(n % i == 0) return false;
    }
    return true;
}