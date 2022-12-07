function triangle(row) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let res = row;
    while(res.length > 1){
      let aux = res;
      res = '';
      for(let i = 1; i < aux.length; i++){
        res += alphabet[(alphabet.indexOf(aux[i - 1]) + alphabet.indexOf(aux[i]) + 1) % 26];
      }
    }
    return res;
  }
