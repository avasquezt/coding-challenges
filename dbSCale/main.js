function dBScale(intensity) {
  return 10 * Math.log10(intensity / (10 ** -12))
}

console.log(dBScale(Math.pow(10, -11)))