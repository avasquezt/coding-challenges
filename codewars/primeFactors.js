/**
 * Calculates the prime factor decomposition of the input number
 * @param {number} n 
 * @returns {string}
 */
function primeFactors(n){
    const factors = {};
      for(let i = 2; i <= n; i++){
        if(isPrime(i)){
          while(!(n % i)){
            factors[i] = 1 + (factors[i] || 0);
            n /= i;
          }
        }
      }
    return Object.entries(factors).map(e => `(${e[0]}${e[1] > 1 ? '**' + e[1] : ''})`).join('');
  }
  
function isPrime(n){
    if(n < 2 || n == 4) return false;
    if([2,3].includes(n)) return true;
    for(let i = 5; i < Math.sqrt(n); i+=2){
        if(!(n % i)){
        return false;
        }
    }
    return true;
}

/*** */
function primeFactors(n){
    for (var i=2, res="", count; i <= Math.sqrt(n); i++) {
        count=0;
        while (n%i == 0) { count++; n/=i }
        res += count ? "(" + ( count>1 ? i+"**"+count  : i ) +")" : ""
    }
    return res || "("+n+")";
}