function preFizz(n) {
  return Array.from({length:n}, (n, i) => ++i);
}