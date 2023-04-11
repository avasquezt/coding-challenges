/**
 * Removes the characters followed by starts from the input string
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const result = [];
    for(const char of s){
        if(char == '*'){
            result.pop();
        }else{
            result.push(char);
        }
    }

    return result.join('');
};