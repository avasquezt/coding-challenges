function squareDigits(num){
  return Number(String(num).split('').map(n => Number(n) ** 2).join(''));
}