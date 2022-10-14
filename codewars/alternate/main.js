function alternate(n, firstValue, secondValue){
  return Array.from(Array(n), ( _, n) => n % 2 === 0 ? firstValue : secondValue);
}