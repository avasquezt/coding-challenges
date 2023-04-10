/**
 * Checks if the parenthesis in the input string are valid
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const count = [0,0,0];
    const lastOpen = [];
    for(const char of s){
        const i = '(){}[]'.indexOf(char);
        const n = Math.floor(i / 2);
        if(i % 2){
            if(!count[n] || lastOpen.pop() != n){
                    return false;
            }
            count[n]--;
        }else{
            count[n]++;
            lastOpen.push(n);
        }
    }

    return count.every(e => !e);
};

var isValid = function(s) {
    const lastOpen = [];
    for(const char of s){
        if('({['.includes(char)){
            lastOpen.push(char)
        }else if('({['.indexOf(lastOpen.pop()) !== ')}]'.indexOf(char)){
            return false;
        }
    }
    return lastOpen.length == 0;
};