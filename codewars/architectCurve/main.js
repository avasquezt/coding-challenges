function weight(n, w) {
  return Array.from(Array(n).keys()).reduce((acc, m) => acc + w * ((Math.exp(2) - 3) * Math.exp(-2*m-2) / 4), 0);
}