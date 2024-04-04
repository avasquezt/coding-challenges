/**
 * Returns lexicographically smallest string that s can be obtained to after using the swaps
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    const set = new Graph(s.length);
    for(const [i, j] of pairs){
        set.union(i, j);
    }
    
    for(let i = 0; i < s.length; i++){
        set.chars[i].sort((a, b) => s[b].localeCompare(s[a]));
    }
    
    let ans = '';
    for(let i = 0; i < s.length; i++){
        ans += s[set.chars[set.find(i)].pop()];
    }
    
    return ans;
};

class Graph{
    root;
    chars;
    rank;
    
    constructor(size){
        this.root = Array.from(Array(size), (_, i) => i);
        this.chars =Array.from(Array(size), (_, i) => [i]);
        this.rank = Array(size).fill(1);
    }
    
    find(x){
        if(x == this.root[x]){
            return x;
        }
        return this.root[x] = this.find(this.root[x]);
    }
    
    union(x, y){
        const indX = this.find(x);
        const indY = this.find(y);
        if(indX != indY){
            if(this.rank[indX] < this.rank[indY]){
                this.root[indX] = indY;
                this.chars[indY] = this.chars[indY].concat(this.chars[indX]);
            }else if(this.rank[indY] < this.rank[indX]){
                this.root[indY] = indX;
                this.chars[indX] = this.chars[indX].concat(this.chars[indY]);
            }else{
                this.root[indY] = indX;
                this.rank[indX]++;
                this.chars[indX] = this.chars[indX].concat(this.chars[indY]);
            }
        }
    }
    
}