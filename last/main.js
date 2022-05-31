function last(x){
  return x.split(' ').sort((a,b) => a[a.length - 1] < b[b.length - 1] ? -1 : 1);
}