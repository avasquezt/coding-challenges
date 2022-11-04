/**
 * @param {string} s
 * @return {string}
 */
//  var reverseVowels = function(s) {
//     let vowels = [];
//     for(let char of s){
//         if('aeiouAEIOU'.includes(char)){
//             vowels.push(char);
//         }
//     }
//     let ans = '';
//     for(let char of s){
//         ans += 'aeiouAEIOU'.includes(char) ? vowels.pop() : char;
//     }
//     return ans;
// };

var reverseVowels = function(s){
    let vowels = 'aeiouAEIOU';
    let leftPointer = 0, rightPointer = s.length - 1;
    s = s.split('');
    while(leftPointer < rightPointer){
        while(leftPointer < rightPointer && !vowels.includes(s[leftPointer])){
            leftPointer++;
        }
        while(rightPointer > leftPointer && !vowels.includes(s[rightPointer])){
            rightPointer--;
        }
        [s[leftPointer], s[rightPointer]] = [s[rightPointer], s[leftPointer]];
        leftPointer++;
        rightPointer--;
    }
    return s.join('');
}

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
