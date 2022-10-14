function tripleTrouble(...arr){
  return  arr[0].split('').map((n, i) => arr.reduce((acc, m) => acc + m[i],'')).join('');
}