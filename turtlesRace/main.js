function race(v1, v2, g) {
  //Total time
  let t = g / (v2 - v1);
  //Time in seconds
  t = t * 3600;
  
  return v2 > v1 ? [Math.floor(t / 3600), Math.floor((t % 3600) / 60), Math.floor((t % 3600) % 60)] : null;
}