function isTwinPrime(n){
  return isPrime(n) && (isPrime(n + 2) || isPrime(n - 2))
}

function isPrime(n){
  for(let i = 2, s = Math.sqrt(n); i <= s; i++)
    if(n % i === 0) return false; 
  return n > 1;
}