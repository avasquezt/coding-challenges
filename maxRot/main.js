function maxRot(n) {
  n = String(n)
  let max = n;
  for(let i = 0; i < n.length; i++){
    n = n.slice(0, i) + n.slice(i + 1) + n[i];
    if (n > max) max = n;
  }
  return +max;
}