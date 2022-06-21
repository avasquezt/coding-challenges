function isSmooth(n) {
  let ans = '';
  while(n % 7 == 0){
    n /= 7;
    ans = 'humble number'
  }
  while(n % 5 == 0){
    n /= 5;
    ans = ans || 'Hamming number'
  }
  while(n % 3 == 0){
    n /= 3;
    ans = ans || '3-smooth'
  }
  while(n % 2 == 0){
    n /= 2;
    ans = ans || 'power of 2'
  }
  return n == 1 ? ans : 'non-smooth'; 
}