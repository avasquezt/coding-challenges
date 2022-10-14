function* baumSweet() {
  for(let i = 0; true; i++){
    yield i === 0 ? 1 : i.toString(2).split('1').filter(n => n.length > 0).every(n => n.length % 2 === 0) ? 1 : 0;
  }
}