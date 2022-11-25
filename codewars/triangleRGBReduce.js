function triangle(row) {
    let res = row;
    while(res.length > 1){
      let aux = res;
      res = '';
      for(let i = 1; i < aux.length; i++){
        res += aux[i - 1] == aux[i] ? aux[i] : 'RBG'.replace(aux[i], '').replace(aux[i - 1], '');
      }
    }
    return res;
  }