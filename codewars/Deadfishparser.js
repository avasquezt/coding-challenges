/**
 * Parses and run Deadfish on the input command
 * @param {string} data 
 * @returns {number[]}
 */
function parse( data ){
    let n = 0;
    let ans = [];
    for(const i of data){
      switch(i){
          case 'i':
            n++;
            break;
          case 'd':
            n--;
            break;
          case 's':
            n *= n;
            break;
          case 'o':
            ans.push(n);
            break;
      }
    }
  return ans;
}