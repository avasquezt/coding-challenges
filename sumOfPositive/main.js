function positiveSum(arr) {
  return arr.reduce((acum, num) => num > 0 ? acum + num : acum, 0);
}