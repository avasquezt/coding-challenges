function convertFrac(lst){
    let denoms = lst.map(e => e[1]);
    let lcd = Math.min(...denoms);
    let i = 1;
    while(denoms.some(n => lcd * i % n != 0)){
      i++;
    }
    lcd *= i;
    return lst.map(e => `(${e[0] * (lcd / e[1])},${lcd})`).join('');
  }