function mxdiflg(a1, a2) {
  a1 = a1.map(a => a.length);
  a2 = a2.map(a => a.length);
  a = Math.max(...a1) - Math.min(...a2);
  b = Math.max(...a2) - Math.min(...a1);
  return a1.length == 0 || a2.length == 0 ? -1 : Math.max(a, b);
}