/**
 * WordDictionary implementation
 */
var WordDictionary = function() {
    this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let curr = this.root;
    for(const char of word){
        if(!(char in curr)){
            curr[char] = {};
        }
        curr = curr[char];
    }
    curr.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {

    const search = (chars, node) => {

        if(chars == '') return node.isEnd == true;

        const currChar = chars[0];
        if(currChar == '.'){
            return Object.keys(node).some(e => e != 'isEnd' && search(chars.slice(1), node[e]));
        }
        else if(currChar in node){
            return search(chars.slice(1), node[currChar]);
        }else{
            return false;
        }
    }

    return search(word, this.root);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */


let e = new WordDictionary();
e.addWord('bad');
e.addWord('dad');
e.addWord('mad');
console.log(JSON.stringify(e));
console.log(e.search('pad'));
console.log(e.search('bad'));
console.log(e.search('.ad'));
console.log(e.search('.a.'));
console.log(e.search('..d'));