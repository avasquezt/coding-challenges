function digits(n) {
  return n ? Math.floor(Math.log10(n)) + 1 : 1;
}