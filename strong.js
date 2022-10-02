function strong(n) {
    return String(n).split('').map(Number).reduce((acc, n) => acc + factorial(n), 0) == n ? 'STRONG!!!!' : 'Not Strong !!';
  }
  
  function factorial(n){
    let ans = 1, m = n;
    while(m > 1){
      ans *= m--;
    }
    return ans;
  }