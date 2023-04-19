/**
 * Finds the character with the longest path in the input matrix
 * @param {string[][]} plate 
 * @returns {string}
 */

var spaghettiCode = function(plate) {
    let max = -Infinity;
    let ans = '';
    let count, id;

    for(let i = 0; i < plate.length; i++){
      for(let j = 0; j < plate[0].length; j++){
        const currChar = plate[i][j];
        if(/[A-Z]/.test(currChar)){
          count = 0;
          id = currChar;
          dfs(i,j);
          if(count > max){
            max = count;
            ans = id;
          }
        }
      }   
    }
    
    return ans;
    
    function dfs(i, j){
      if(i >= 0 && j >= 0 && i < plate.length && j < plate[0].length){
        const char = plate[i][j];
        if(/[A-Z]/.test(char)){
          id = char != 'S' ? char : id;
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