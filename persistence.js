function persistence(num) {
    let ans = 0;
    while(String(num).length > 1){
      ans += 1;
      num = String(num).split('').reduce((acc, n) => acc * Number(n));
    }
    return ans;
  }