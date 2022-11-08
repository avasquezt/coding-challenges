/**
 * @param {string} s
 * @return {string}
 */
//  var makeGood = function(s) {
//     function isBadStr(s){
//         for(let i = 0; i < s.length - 1; i++){
//             if(s[i].toLowerCase() == s[i + 1].toLowerCase() && s[i] != s[i + 1]){
//                 return [i, true];
//             }
//         }
//         return [-1, false];
//     }
//     let isBad,pos;
//     [pos, isBad] = isBadStr(s);
//     while(isBad){
//         s = s.slice(0, pos) + s.slice(pos + 2);
//         [pos, isBad] = isBadStr(s);
//     }
//     return s;
// };


var makeGood = function(s) {
    let result = [];
    for(let i = 0; i < s.length; i++){
        if(result.length && result[result.length - 1] != s[i] && result[result.length - 1].toLowerCase() == s[i].toLowerCase()){
            result.pop();
        }else{
            result.push(s[i]);
        }
    }
    return result.join('');
}

console.log(makeGood("leEeetcode"));
console.log(makeGood("abBAcC"));
console.log(makeGood("s"));