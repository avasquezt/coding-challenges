function solve(arr) {
    return arr.length ? arr.reduce((acc, n) => acc * (new Set(n)).size, 1) : 0;
  };