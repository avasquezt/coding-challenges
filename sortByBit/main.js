function sortByBit(arr) {
  const binSum = n => n.toString(2).split('').map(Number).reduce((acc, d) => acc + d);
  return arr.sort((a,b) => binSum(a) - binSum(b) || a - b);
}