function fusc(n){
  if (n < 2) return n % 2;
  if (n % 2 == 0){
    return fusc(n / 2);
  }else{
    return fusc((n - 1) / 2) + fusc(1 + (n - 1) / 2)
  }
}