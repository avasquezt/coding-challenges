function gps(s, x) {
  return x.slice(1).reduce((acc, n, i) => ((x[i + 1] - x[i]) * 3600 / s) > acc ? Math.floor((x[i + 1] - x[i]) * 3600 / s) : acc, 0); 
}
