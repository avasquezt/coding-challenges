/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//  var groupAnagrams = function(strs) {

//     function mapChars(str){
//         let result = new Map();
//         for(char of str){
//             result.set(char, result.get(char) + 1 || 1);
//         }
//         return result;
//     }

//     function checkAnagram(str1, str2){
//         let charStr1 = new Map();
//         let charStr2 = new Map();
        
//         if(str1.length != str2.length) return false;
        
//         charStr1 = mapChars(str1);
//         charStr2 = mapChars(str2);
    
//         if (charStr1.size != charStr2.size) return false;
        
//         for(let [key, value] of  charStr1){   
//             if(charStr2.get(key) != value) return false;
//         }
//         return true;
//     }
    
//     let anagrams = {};
    
//     strs.forEach(str => {
//         let added = false;
//         for(let e in anagrams){
//             if(checkAnagram(str,e)){
//                 anagrams[e].push(str);
//                 added = true;
//                 console.log(checkAnagram(str,e), str, e, anagrams);
//             }
//         }
//         if (!added) anagrams[str] = [str];
//     });
//     return Object.values(anagrams);
// };

function groupAnagrams(strs){
    let result = new Map();
    strs.forEach(str => {
        let sorted = str.split('').sort().join();
        if (!result.has(sorted)) result.set(sorted,[]);
        result.set[sorted, result.get(sorted).push(str)];
    })
    return [...result.values()];
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));