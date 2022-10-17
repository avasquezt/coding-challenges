/**
 * @param {string} sentence
 * @return {boolean}
 */
// var checkIfPangram = function(sentence) {
//     for(letter of 'abcdefghijklmnopqrstuvwxyz'){
//         if(!sentence.includes(letter)) return false;
//     }
//     return true;
// };

var checkIfPangram = function(sentence) {
    let seen = new Map();
    for(letter of sentence){
        seen.set(letter, true);
    }
    return seen.size == 26;
};

console.log(checkIfPangram('leetcode'))
console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'))