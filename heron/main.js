function heron(a, b, c) {
  const s = (a + b + c) / 2;
  console.log(s * (s - a) * (s - b) * (s - c))
  return Math.round((s * (s - a) * (s - b) * (s - c)) ** 0.5);
}