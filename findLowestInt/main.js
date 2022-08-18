function findLowestInt(k) {
  let ans = 1;
  while ( String(k * ans).split('').sort().join('') !== String((k + 1) * ans).split('').sort().join('')){
    ans += 1;
  }
  return ans;
}