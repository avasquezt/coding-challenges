function solution(n){
    let n3 = Math.floor((n - 1) / 3);
    let n5 = Math.floor((n - 1) / 5);
    let n35 = Math.floor((n - 1) / (3 * 5));
    return n > 0 ? (n3 ** 2 + n3) * 3/2 + (n5 ** 2 + n5) * 5/2 - (n35 ** 2 + n35) * (3 * 5)/2 : 0;
  }