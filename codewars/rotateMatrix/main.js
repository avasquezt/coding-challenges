var rotateMatrix = arr => {
  let rotated = [];
  for (let i = arr[0].length - 1; i >= 0; i--){
    rotated[arr[0].length - 1  - i] = [];
    for(let j = 0; j < arr.length; j++){
      rotated[arr[0].length - 1 - i].push(arr[j][i]);
    }
  }
  return rotated;
}