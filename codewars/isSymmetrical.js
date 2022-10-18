function sc(obj){
    let e = typeof obj == 'number' ? String(obj) : obj;
    for (let i = 0; i < e.length / 2; i++){
      if(e[i] !== e[e.length - 1 - i]) return false
    }
    return true;
}