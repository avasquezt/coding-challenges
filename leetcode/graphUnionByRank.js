/**
 * Graph class with quick union by rank implementation
 */
class Graph{
    root;
    rank;

    constructor(size){
        this.root = Array.from(Array(size), (_, i) => i);
        this.rank = Array(size).fill(1);
    }

    find(x){
        while(x != this.root[x]){
            x = this.root[x];
        }
        return x;
    }

    union(x, y){
        const idxX = this.find(x);
        const idxY = this.find(y);
        if(idxX != idxY){
            if(this.rank[idxX] < this.rank[idxY]){
                this.root[idxX] = idxY;
            }else if(this.rank[idxX] > this.rank[idxY]){
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


const uf = new Graph(10);
    // 1-2-5-6-7 3-8-9 4
    console.log(JSON.stringify(uf.root));
    console.log(JSON.stringify(uf.rank));
    uf.union(1, 2);
    uf.union(2, 5);
    uf.union(5, 6);
    uf.union(6, 7);
    uf.union(3, 8);
    uf.union(8, 9);
    console.log(uf.connected(1, 5)); // true
    console.log(uf.connected(5, 7)); // true
    console.log(uf.connected(4, 9)); // false
    console.log(JSON.stringify(uf.root));
    console.log(JSON.stringify(uf.rank));
    // 1-2-5-6-7 3-8-9-4
    uf.union(9, 4);
    console.log(JSON.stringify(uf.root));
    console.log(JSON.stringify(uf.rank));
    console.log(uf.connected(4, 9)); // true