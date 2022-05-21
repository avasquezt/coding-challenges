// Return the nth triangular number
function triangular( n ) {
  return n < 1 ? 0 : n % 2 === 0 ? (n / 2) * (n + 1) : Math.ceil(n / 2) * n;
}