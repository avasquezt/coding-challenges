/**
 * Counts the number of parenthesis reversals needed to balanced the parenthesis
 * @param {string} string 
 * @returns {number}
 */

function parenthesis(string){
    let left = 0;
    let right = 0;
    for(const char of string){
        if(char == '('){
            left++;
        }else if(char == ')'){
            if(left > 0){
                left--
            }else{
                right++;
            }
        }
    }
    return (left + right) % 2 ? -1 : Math.ceil(left / 2) + Math.ceil(right / 2);
}

console.log(parenthesis(')('));
console.log(parenthesis('(((())'));
console.log(parenthesis('((('));
