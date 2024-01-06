class Trie{
    data;
    isEnd;
    
    constructor(){
        this.data = [];
        this.isEnd = false;
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
        curr.isEnd = true;
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
        ans.push(...check(board, i, j, {}, [], trie, ''));
    }
}

return [...new Set(ans)];

function check(board, i, j, visited, ans, trie, word){
    if(i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[`${i},${j}`]){
        return ans;
    }
    const n = board[i][j].charCodeAt(0) - 97;
    word += board[i][j];
    if(trie.data[n]){
        if(trie.data[n].isEnd){
            ans.push(word);
        }
        visited[`${i},${j}`] = true;
        check(board, i + 1, j, visited, ans, trie.data[n], word);
        check(board, i - 1, j, visited, ans, trie.data[n], word);
        check(board, i, j + 1, visited, ans, trie.data[n], word);
        check(board, i, j - 1, visited, ans, trie.data[n], word);
        visited[`${i},${j}`] = false;
    }
    return ans;
}


};