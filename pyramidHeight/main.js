function pyramidHeight(n) {
  let i, s = 0
  for(i = 1; s <= n; i++){
    s += i ** 2;
  }
  return (i - 2);
}