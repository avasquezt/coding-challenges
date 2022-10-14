function choreAssignment(chores) {
  let arr = [];
  chores = chores.sort((a, b) => a - b);
  for (let i = 0; i < chores.length / 2; i++){
    arr.push( chores[i] + chores[chores.length - (i + 1)]);
  }
  return arr.sort((a,b) => a - b);
}