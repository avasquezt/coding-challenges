function consecutive(arr) {
  return arr.sort((a,b) => b - a).slice(1).reduce((acc, n, i) => acc + arr[i] - n - 1, 0);
}