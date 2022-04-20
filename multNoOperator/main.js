function billboard(name, price = 30){
  return Array.from({length: name.length}).fill(price).reduce((acc,n) => acc + n);
} 