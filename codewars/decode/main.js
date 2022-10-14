function decode (code, n) {
  n = String(n).split('').map(Number);
  return String.fromCharCode(...code.map((e, i) => e - n[i % n.length] + 96 ));
}
