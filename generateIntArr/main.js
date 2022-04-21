function generateRange(min, max, step){
  return Array.from({length: Math.floor((max-min)/step + 1)}, (n,i) => min + step * i);
}
