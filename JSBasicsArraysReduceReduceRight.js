function tailAndHead(arr){
    return arr.slice(1).reduce((acc, n, i) => acc * (arr[i] % 10 + Number(n.toString()[0])), 1);
  }