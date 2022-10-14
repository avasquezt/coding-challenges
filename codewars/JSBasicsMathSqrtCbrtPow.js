function cutCube(volume,n){
    let x = Math.round(Math.cbrt(volume / n));
    return  intRoot(n) && x ** 3 == (volume / n);
  }
  
  function intRoot(n){
    var x = Math.round(Math.cbrt(n));
    return x ** 3 == n;
  }