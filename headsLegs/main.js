function animals(heads, legs){
  Cows = (legs - 2 * heads) / 2;
  Chickens = heads - Cows;
  return (Chickens >= 0 && Cows >= 0 && Number.isInteger(Chickens) ) ? [Chickens, Cows] : 'No solutions';
}

console.log(animals(72,200));
console.log(animals(72,101));