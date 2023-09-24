/**
 * Reverses each word in the input string
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let curr = [];
    let ans = '';
    for(const char of s){
        if(char != ' '){
            curr.push(char);
        }else{
            while(curr.length) ans += curr.pop();
            ans += char;
        }
    }
    while(curr.length) ans += curr.pop();
    return ans;
};
