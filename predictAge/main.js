function predictAge(...ages){
  return Math.floor(ages.reduce((acc, n) => acc + (n * n), 0) ** (0.5) / 2);
}