function sc(screws){
    return screws.split('').reduce((acc, n, i) => n === screws[i-1] ? acc += 2 : acc += 7, -6);
  }