function reduce(fraction) {
  for (let i = Math.min(...fraction); i > 0; i--){
    if(fraction.every(n => n % i === 0)){
      return (fraction.map(n => n / i));
    }
  }
  return fraction;
}