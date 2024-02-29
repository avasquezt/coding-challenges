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
    
    constructor(){
        this.data = [];
        this.index = null;
    }
    
    add(word, index){
        let curr = this;
        for(let i = word.length - 1; i >= 0; i--){
            const n = word.at(i).charCodeAt(0) - 97;
            if(!curr.data[n]){
                curr.data[n] = new Trie();
            }
            curr = curr.data[n];
        }
        curr.index = index;
    }
    
    words(ans = []){
        for(const n in this.data){
            if(n != null){
                this.data[n].words(ans);
            }
        }
        if(this.index != null){
            ans.push(this.index);
        }
        return ans;
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
        let r = -1;
        for(let j = 0; j < words[i]; j++){
            const n = words[i][j].charCodeAt(0) - 97;
            if(cur.data[n]){
                cur = cur.data[n];
            }else{
                r = j;
                break;
            }
        }
        if(r == -1 && cur){
            const matches = cur.words([]);
            matches.forEach(n => {
                if(n != i && isPalindrome(words[i] + words[n])){
                    ans.push([i, n]);
                }   
            })
        }else{
            if(cur.index != null && isPalindrome(words[i].slice(r))){
                ans.push([cur.index, i]);
            }
        }
        
    }
    return ans;
    
    function isPalindrome(word){
        for(let i = 0, n = word.length - 1; i < word.length / 2; i++){
            if(word[i] != word[n - i]) return false;
        }
        return true;
    }
};