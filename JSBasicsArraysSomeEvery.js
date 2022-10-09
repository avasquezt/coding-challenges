function mirrorImage(arr){
    let ans;
    if (arr.slice(1).some((n, i) => [ans = i, String(arr[i]).split('').reverse().join('') === String(n)][1])) return [arr[ans], arr[ans + 1]];
    return [-1, -1];
  }