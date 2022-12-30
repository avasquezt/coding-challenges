/**
 * Processes the string, deleting the characters marked with '#'
 * @param {string} s - String to process
 * @returns 
 */
function cleanString(s) {
    let result = [];
    for(const char of s){
        if(char == '#'){
        result.pop();
        }else{
        result.push(char);
        }
    }
    return result.join('');
}