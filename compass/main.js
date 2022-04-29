function direction(facing, turn){
  arr = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    return arr[ (((arr.indexOf(facing) + (turn / 45)) % 8 ) + 8)  % 8];
}

console.log(direction('SE', -180));