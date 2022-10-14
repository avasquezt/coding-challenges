function mygcd(x,y){
  let n = Math.max(x,y) % Math.min(x,y) === 0 ? Math.min(x,y) : Math.floor(Math.min(x,y) / 2) || 1;
  while ( x % n !== 0 || y % n !== 0){
    n--;
  }
  return n;
}