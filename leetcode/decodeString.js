/**
 * Decodes the input string
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
    return dfs(s)[0];
    
    function dfs(s){
        let str = '';
        while(s.length){
            while(/^[a-z]/.test(s)){
                str += s[0];
                s = s.slice(1);
            }
            let n = '';
            while(/^\d/.test(s)){
                n += s[0];
                s = s.slice(1);
            }
            if(s[0] == '['){
                let char;
                [char, s] = dfs(s.slice(1));
                str += char.repeat(Number(n));
            }
            if(s[0] == ']'){
                return [str, s.slice(1)];
            }
        }
        return [str, ''];
    }
};