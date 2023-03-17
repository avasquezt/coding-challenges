/**
 * Trie (Prefix Tree) implementation
 */
var Trie = function() {
    this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let currNode = this.root;
    for(char of word){
        if(!(char in currNode)){
            currNode[char] = {};
        }
        currNode = currNode[char];
    }
    currNode.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let currNode = this.root;
    for(char of word){
        if(!(char in currNode)){
            return false;
        }
        currNode = currNode[char];
    }
    return currNode.isEnd === true;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let currNode = this.root;
    for(char of prefix){
        if(!(char in currNode)){
            return false;
        }
        currNode = currNode[char];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


let e = new Trie();
e.insert('apple');
e.insert('app');
console.log(JSON.stringify(e));