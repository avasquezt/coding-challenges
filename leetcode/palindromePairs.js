/**
 * Finds all the palindrome pairs in the input array
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    const ans = [];
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words.length; j++){
            if( i != j && words[i] + words[j] == (words[i] + words[j]).split('').reverse().join(''))
                ans.push([i,j]);
        }
    }
    return ans;
};


/**
 * Solution with trie
 */

class Trie{
    data;
    index;
    list;
    
    constructor(){
        this.data = [];
        this.index = -1;
        this.list = [];
    }
    
    add(word, index){
        let curr = this;
        for(let i = word.length - 1; i >= 0; i--){
            const n = word.at(i).charCodeAt(0) - 97;
            if(!curr.data[n]){
                curr.data[n] = new Trie();
            }
            if(isPalindrome(word, 0, i)){
                curr.list.push(index);
            }
            curr = curr.data[n];
        }
        curr.index = index;
        curr.list.push(index);
    }
    
}

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    const trie = new Trie();
    const ans = [];
    words.forEach((word, i) => trie.add(word, i));
    for(let i = 0; i < words.length; i++){
        let cur = trie;
        for(let j = 0; j < words[i].length && cur; j++){
            const n = words[i][j].charCodeAt(0) - 97;
            if(cur.index > -1 && cur.index != i && isPalindrome(words[i], j, words[i].length - 1)){
                ans.push([i, cur.index]);
            }
            cur = cur.data[n];
        }
        if(cur){
            for(const n of cur.list){
                if(n != i) ans.push([i, n]);
            }
        }
        
    }
    return ans;
};

function isPalindrome(word, start = 0, end = word.length - 1){
        for(;start < end; start++, end--){
            if(word[start] != word[end]) return false;
        }
        return true;
}