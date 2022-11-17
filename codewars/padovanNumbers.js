function padovan(n) {
    let a = b = c = 1;
    while (n > 2){
      [a, b, c] = [b, c, a + b];
      n--;
    }
    return c;
}