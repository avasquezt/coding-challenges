function digitalRoot(n) {
    while (n > 9){
      n = String(n).split('').reduce((acc, e) => acc + +e, 0);
    }
    return n;
  }