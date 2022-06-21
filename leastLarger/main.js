function leastLarger(a,i) {
  curr = Math.max(...a);
  return a.reduce((acc, n, j, _) => {
    if(n > a[i] && n <= curr){
      curr = n;
      acc = j;
    }
    return acc;
  }, -1);
}