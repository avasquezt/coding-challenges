/**
 * Calculates the total land perimeter of the islans in the input graph
 * @param {string[]} arr 
 * @returns {string}
 */

function landPerimeter(arr) {
    let n = 0;
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[0].length; j++){
        if(arr[i][j] == 'X'){
          if(i == 0 || arr[i - 1][j] == 'O'){
            n++;
          }
          if(i == arr.length - 1 || arr[i + 1][j] == 'O'){
            n++;
          }
          if(j == 0 || arr[i][j - 1] == 'O'){
            n++;
          }
          if(j == arr[0].length - 1 || arr[i][j + 1] == 'O'){
            n++;
          }
        }
      }
    }
    return 'Total land perimeter: ' + n;
  
}