function Xbonacci(signature,n){
    let s = signature.slice(0, -1).reduce((acc, n) => acc + n, 0);
    for (let i = signature.length, j = -1; i < n; i++){
      s = s + signature[i - 1] - (signature[j++] || 0);
      signature.push(s);
    }
    return signature.slice(0, n);
  }