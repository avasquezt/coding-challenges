/**
 * Graph class with quick union implementation
 */
class Graph{
    root;

    constructor(size){
        this.root = Array.from(Array(size), (_, i) => i);
    }

    find(x){
        while(x != this.root[x]){
            x = this.root[x];
        }
        return x;
    }

    union(x, y){
        const indX = this.find(x);
        const indY = this.find(y);
        if(indX != indY){
            this.root[indY] = indX;
        }
    }

    connected(x, y){
        return this.find(x) == this.find(y);
    }
}

uf = new Graph(10);
// 1-2-5-6-7 3-8-9 4
console.log(JSON.stringify(uf.root))
uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);
console.log(JSON.stringify(uf.root))
console.log(uf.connected(1, 5)); // true
console.log(uf.connected(5, 7)); // true
console.log(uf.connected(4, 9)); // false
// 1-2-5-6-7 3-8-9-4
uf.union(9, 4);
// uf.union(4, 9);
console.log(JSON.stringify(uf.root))
console.log(uf.connected(4, 9)); // true