function turn(current, target) {
  const directions = ['N', 'E', 'S', 'W'];
  let diff =  directions.indexOf(target) - directions.indexOf(current)
  return diff * (Math.abs(diff) == 3 ? -1 : 1) > 0 ? 'right' : 'left';
}

// function turn(current, target) {
//   return "NESWN".includes(current+target) ? 'right' : 'left';
// }