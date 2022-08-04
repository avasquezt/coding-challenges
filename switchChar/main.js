function switcheroo(x){
  return x.replace(/[ab]/g, char => ({a:'b', b:'a'})[char]);
}