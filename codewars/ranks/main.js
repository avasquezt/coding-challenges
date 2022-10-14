function ranks(arr) {
  let ranked =[...arr].sort((a,b) => b - a);
  return arr.map(n => 1 + ranked.indexOf(n));
}
