const sxore = function(n){
  switch (n % 4){
      case 0:
        return n;
      case 1:
        return 1;
      case 2:
        return ++n;
      case 3:
        return 0
  }
}