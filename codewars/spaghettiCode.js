/**
 * Finds the string with the longest path in the input matrix
 * @param {string[][]} plate 
 * @returns {string}
 */
var spaghettiCode = function(plate) {
    let max = -Infinity;
    let ans = '';
    let count;

    for(let i = 0; i < plate.length; i++){
      for(let j = 0; j < plate[0].length; j++){
        const currChar = plate[i][j];
        if(/[A-Z]/.test(currChar)){
          count = 0;
          dfs(i,j,currChar);
          if(count > max){
            max = count;
            ans = currChar;
          }
        }
      }   
    }

    return ans;
    
    function dfs(i, j, char){
      if(i >= 0 && j >= 0 && i < plate.length && j < plate[0].length){
        if(plate[i][j] == char){
          count++;
          plate[i][j] = '';
          dfs(i+1,j,char);
          dfs(i-1,j,char);
          dfs(i,j+1,char);
          dfs(i,j-1,char);
        }
      }
    }
  }