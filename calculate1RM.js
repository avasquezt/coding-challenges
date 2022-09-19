function calculate1RM(w, r){
    let e = w * (1 + r / 30);
    let m = (100 * w) / (101.3 - 2.67123 * r);
    let l = w * (r ** 0.1);
    return r ? r == 1 ? w : Math.round(Math.max(e, m, l)) : 0; 
  }