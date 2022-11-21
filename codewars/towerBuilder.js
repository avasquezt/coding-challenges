function towerBuilder(n) {
    let ans = [];
    for(let i = 0; i < n; i++){
      ans.push(' '.repeat(n - 1 - i) + '*'.repeat(2 * i + 1) + ' '.repeat(n - 1 - i));
    }
    return ans;
  }