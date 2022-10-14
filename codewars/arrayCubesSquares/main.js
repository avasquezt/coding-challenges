function arrayMadness(a, b) {
  return a.reduce((acc, n) => acc + n ** 2, 0) >  b.reduce((acc, n) => acc + n ** 3, 0);
}