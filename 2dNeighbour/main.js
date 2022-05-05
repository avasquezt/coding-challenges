function get_neighbourhood(type, arr, c){
  console.log(c)
  let result = [];
  if (c[0] < 0 || c[0] >= arr.length || c[1] < 0 || c[1] >= arr[0].length) return result;
  if (type === 'moore'){
    for(let i = -1;i <= 1; i++){
      for(let j = -1; j <= 1; j++){
        if((c[0] + i >= 0 && c[0] + i < arr.length && c[1] + j >= 0 && c[1] + j < arr[0].length) && (i !== 0 || j !== 0)){
          result.push(arr[c[0]+i][c[1]+j]);
        }
      }
    }
  }else if(type === 'von_neumann'){
    for(let i = -1;i <= 1; i++){
      for(let j = -1; j <= 1; j++){
        if((c[0] + i >= 0 && c[0] + i < arr.length && c[1] + j >= 0 && c[1] + j < arr[0].length) && (i !== 0 || j !== 0) && (Math.abs(i) !== Math.abs(j))){
          result.push(arr[c[0]+i][c[1]+j]);
        }
      }
    }
  }
  return result;
} 


matrix = [[0,1,2],[3,4,5],[6,7,8]]

console.log(get_neighbourhood("moore", matrix, [1,1]));
console.log(get_neighbourhood("moore", matrix, [0,0]));
console.log(get_neighbourhood("moore", matrix, [2,2]));
console.log(get_neighbourhood("von_neumann", matrix, [1,1]));

