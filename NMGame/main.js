function game(n,m) {
  if (m <= 2) return 'second';
  return n % 2 === 0 ? 'second' : 'first';
}