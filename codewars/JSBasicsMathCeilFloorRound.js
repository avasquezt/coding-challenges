function roundIt(n){
    let m = String(n).split('.').map(e => e.length);
    return m[0] > m[1] ? Math.floor(n) : m[0] < m[1] ? Math.ceil(n) : Math.round(n);
  }