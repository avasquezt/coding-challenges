function arrayDiff(a, b) {
  b.forEach(n => a = a.filter(i => i !== n));
  return a;
}