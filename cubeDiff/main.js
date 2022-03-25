function findDifference(a, b) {
  return Math.abs(a.reduce((acc, a) => acc * a, 1) - b.reduce((acc, b) => acc * b, 1))
 }