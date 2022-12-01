/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    return s.slice(0, s.length/2).replace(/[^aeiou]/ig, '').length == s.slice(s.length/2).replace(/[^aeiou]/ig, '').length
};

// var halvesAreAlike = function(s) {
//     let count = [0, 0];
//     for(let i = 0; i < s.length; i++){
//         if('aeiou'.includes(s[i].toLowerCase())){
//             count[Math.round(i / s.length)]++;
//         }
//     }
//     return count[0] == count[1];
// };