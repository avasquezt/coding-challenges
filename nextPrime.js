function nextPrime(n){
    while (!isPrime(++n)){
    }
    return n;
  }
  
  function isPrime(number) {
      var start = 2;
      while (start <= Math.sqrt(number)) {
          if (number % start++ == 0) return false;
      }
      return number > 1;
  }