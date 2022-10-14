function extraPerfect(n){
  return Array.from(Array(Math.ceil(n / 2)), (_, i) => (i * 2) + 1);
}