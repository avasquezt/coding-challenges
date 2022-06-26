function streetFighterSelection(fighters, position, moves){
  const directions = {left:[-1,0], right:[1,0], up:[0,-1], down:[0,1]};
  let ans = []
  moves.forEach(move =>{
    position[1] = position[1] + (fighters[position[1] + directions[move][1]] ? directions[move][1] : 0);
    position[0] = (position[0] + directions[move][0] + fighters[position[1]].length) % fighters[position[1]].length;
    ans.push(fighters[position[1]][position[0]]);
  })
  return ans;
}