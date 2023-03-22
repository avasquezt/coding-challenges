/**
 * Determines if the parentheses in the input string are valid
 * @param {string} parenStr 
 * @returns {boolean}
 */
function validParentheses(parenStr) {
    let left = 0;
    for(const char of parenStr){
      if(char == '('){
        left++;
      }else if(char == ')'){
        if(!left){
          return false;
        }
        left--;
      }
    }
    return left == 0;
}