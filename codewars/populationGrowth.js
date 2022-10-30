function nbYear(p0, percent, aug, p) {
    let t = 0;
    for (let i = p0; i < p; i += Math.floor(i * (percent / 100)) + aug){
      t++;
    }
    return t;
  }