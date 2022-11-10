/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    let result = [];
    for(const char of s){
        if(result.length && result[result.length - 1] == char){
            result.pop();
        }else{
            result.push(char);
        }
    }
    return result.join('');
};