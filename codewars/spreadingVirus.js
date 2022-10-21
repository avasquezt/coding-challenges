function sc(apple,n){
    function checkVirus(arr, i, j){
      return apple[i-1]?.[j] == 'V' || arr[i+1]?.[j] == 'V' || arr[i][j-1] == 'V' || arr[i][j+1] == 'V';
    }
    while(n) {
      apple = apple.map((row, i) => row.map((val, j) => checkVirus(apple, i,j) ? 'V' : val));
      n--;
    }
    return apple;
  }