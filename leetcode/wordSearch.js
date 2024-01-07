class Trie{
    data;
    word;
    
    constructor(){
        this.data = [];
        this.word = null;
    }
    
    add(word){
        let curr = this;
        for(const char of word){
            const n = char.charCodeAt(0) - 97;
            if(!curr.data[n]){
                curr.data[n] = new Trie();
            }
            curr = curr.data[n];
        }
        curr.word = word;
    }
}

/**
 * Finds the input words in the board
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const trie = new Trie();
    words.forEach(word => trie.add(word));
    const ans = [];
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            ans.push(...check(board, i, j, [], trie));
        }
    }
    
    return ans;
    
    function check(board, i, j, ans, trie){
        if(i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] == '#'){
            return ans;
        }
        const char =  board[i][j];
        const n = char.charCodeAt(0) - 97;
        if(trie.data[n]){
            if(trie.data[n].word){
                ans.push(trie.data[n].word);
                trie.data[n].word = null;
            }
            board[i][j] = '#';
            check(board, i + 1, j, ans, trie.data[n]);
            check(board, i - 1, j, ans, trie.data[n]);
            check(board, i, j + 1, ans, trie.data[n]);
            check(board, i, j - 1, ans, trie.data[n]);
            board[i][j] = char;
        }
        return ans;
    }
};