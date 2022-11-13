/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};

var reverseWords = function(s) {
    let result = [];
    let word = '';
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] != ' '){
            word = s[i] + word;
        }else{
            if(word.length){
                result.push(word);
            }
            word = '';
        }
    }
    if(word.length){
        result.push(word);
    }
    return result.join(' ');
}

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));