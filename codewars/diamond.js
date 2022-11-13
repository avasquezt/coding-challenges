function diamond(n){
    if (n % 2 == 0 || n < 1) return null;
    let result = Array(n);
    for(let i = 0; i < n / 2; i++){
      result[i] = '*'.repeat(i * 2 + 1).padStart(n / 2 + i + 1, ' ') + '\n';
      result[n - (i + 1)] = result[i];
    }
    return result.join('');
  }