/**
 * Checks if the braces in the input string are matched with the correct braces
 * @param {string} braces 
 * @returns {boolean}
 */
function validBraces(braces){
    const op = '({[';
    const cl = ')}]';
    let curr = [];
    for(const char of braces){
      if(op.includes(char)){
        curr.push(char);
      }else if(cl.includes(char)){
        let n = cl.indexOf(char);
        if(curr.at(-1) == op.at(n)) curr.pop();
        else return false;
      }
    }
    return curr.length == 0;
  }