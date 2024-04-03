/**
 * Finds the number connected city groups
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const set = new disjointSet(isConnected.length);
    let n = isConnected.length;
    
    for(let i = 0; i < isConnected.length; i++){
        for(let j = i + 1; j < isConnected.length; j++){
            if(isConnected[i][j] == 1 && set.find(i) != set.find(j)){
                n--;
                set.union(i,j);
            }
        }
    }
    
    return n;
    
};

class disjointSet{
    root;
    rank;
    
    constructor(size){
        this.root = Array.from(Array(size), (_, i) => i);
        this.rank = Array(size).fill(1);
    }
    
    find(x){
        if(x == this.root[x]){
            return x;
        }
        return this.root[x] = this.find(this.root[x]);
    }
    
    union(x, y){
        const idxX = this.find(x);
        const idxY = this.find(y);
        if(idxX != idxY){
            if(this.rank[idxX] < this.rank[idxY]){
                this.root[idxX] = idxY;
            }else if(this.rank[idxY] < this.rank[idxX]){
                this.root[idxY] = idxX;
            }else{
                this.root[idxY] = idxX;
                this.rank[idxX]++;
            }
        }
    }
    
    connected(x, y){
        return this.find(x) == this.find(y);
    }
}