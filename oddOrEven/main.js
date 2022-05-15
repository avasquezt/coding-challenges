function oddOrEven(n) {
  if (n / 2 % 1 !== 0) return EITHER;
  if (n /2 % 2 === 0 ) return EVEN;
  if (n /2 % 2 !== 0 )return ODD;
}