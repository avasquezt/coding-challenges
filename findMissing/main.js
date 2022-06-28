var findMissing = function (list) {
  let min = Math.min.apply(null, list);
  let max = Math.max.apply(null, list);
  let total = list.reduce((acc, n) => acc + n);
  let n = list.length + 1;
  let i = Math.ceil((max - min)/ (n - 1));
  return min * n + n * i *((n - 1 )/ 2) - total;
}