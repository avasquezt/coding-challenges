function amIWilson(p) {
  const fact = n => n === 0 ? 1 : n * fact(n - 1);
  return ((fact(p - 1) + 1)/ p ** 2) % 1 === 0;
}

console.log(amIWilson(5));