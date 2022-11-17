function averageLength(a) { 
    let n = Math.round(a.reduce((acc, e) => acc + e.length, 0) / a.length);
    return a.map(str => str[0].repeat(n));
  }