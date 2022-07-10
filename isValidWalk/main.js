function isValidWalk(walk) {
  //console.log(walk)
  walk = walk.join('');
  console.log(walk);
  return walk.length == 10 && ((walk.match(/n/g)||[]).length == (walk.match(/s/g)||[]).length) &&((walk.match(/e/g)||[]).length == (walk.match(/w/g)||[]).length);
}