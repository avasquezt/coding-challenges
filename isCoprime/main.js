function isCoprime(x, y) {
  for(let i = Math.min(x, y); i > 1; i--){
    if (x % i == 0 && y % i == 0){
      return false;
    }
  }
  return true;
}