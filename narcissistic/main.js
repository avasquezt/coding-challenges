function narcissistic(value) {
  const n = String(value).length;
  return String(value).split('').map(Number).reduce((acc, digit) => acc + digit ** n, 0) === value;
}
