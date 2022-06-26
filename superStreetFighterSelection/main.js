function superStreetFighterSelection(fighters, position, moves){
  let ans = []
  moves.forEach(move => {
    if(move === 'up'){
      position[0] = (fighters[position[0]-1] || [])[position[1]] ? position[0] - 1 : position[0];
    }else if(move === 'down'){
      position[0] = (fighters[position[0]+1] || [])[position[1]] ? position[0] + 1 : position[0];
    }else if(move === 'left'){
      let newPosition;
      do{
        position[1] = (position[1] - 1) < 0 ? fighters[position[0]].length - 1 : position[1] - 1;
      }while(!fighters[position[0]][position[1]]);
    }else if(move === 'right'){
      let newPosition;
      do{
        position[1] = (position[1] + 1) >= fighters[position[0]].length ? 0 : position[1] + 1;
      }while(!fighters[position[0]][position[1]]);
    }
    ans.push(fighters[position[0]][position[1]]);
  })
  return ans;
}
