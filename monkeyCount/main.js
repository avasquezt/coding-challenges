function monkeyCount(n) {
  return [...Array(n).keys()].map( (_, i) => ++i);
 }