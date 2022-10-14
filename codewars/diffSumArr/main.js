function sumOfDifferences(arr) {
  return arr.sort((a,b) => b - a).slice(1).reduce((acc, n, i) => acc + Math.abs(arr[i] - n) ,0);
}

// return Math.max(...arr) - Math.min(...arr)