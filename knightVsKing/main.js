function knightVsKing(knightPosition, kingPosition) {
  knightPosition[1] = knightPosition[1].toLowerCase().charCodeAt(0) - 96;
  kingPosition[1] = kingPosition[1].toLowerCase().charCodeAt(0) - 96;
  for(let i = -1; i <= 1; i+=2){
    for(let j = -2; j <= 2; j+=4){
      if(knightPosition[0] + i === kingPosition[0] && knightPosition[1] + j === kingPosition[1]){
        return 'Knight';
      }
      if(knightPosition[0] + j === kingPosition[0] && knightPosition[1] + i === kingPosition[1]){
        return 'Knight';
      }
    }
  }
  
  for(let i = -1; i <= 1; i++){
    for(let j = -1; j <= 1; j++){
      if(knightPosition[0] === kingPosition[0] + i && knightPosition[1] === kingPosition[1] + j){
        return 'King';
      }
    }
  }
  
  return 'None';
}
