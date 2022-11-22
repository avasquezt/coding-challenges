function tribonacci(signature,n){
    let seq = signature.slice();
    for(let i = 3; i < n; i++){
      seq[i] = seq[i - 1] + seq[i - 2] + seq[i - 3];
    }
    return seq.slice(0, n);
  }