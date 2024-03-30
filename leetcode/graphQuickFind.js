/**
 * Graph class with quick find implementation
 */
class Graph{
    root;

    constructor(size){
        this.root = Array.from(Array(size), (_, i) => i);
    }

    find(x){
        return root[x];
    }

    union(x, y){
        const indexX = this.find(x);
        const indexY = this.find(y);
        if(indexX != indexY){
            for(let i = 0; i < this.root.length; i++){
                if(this.root[i] == indexY){
                    this.root[i] = indexX;
                }
            }
        }
    }

    connected(x, y){
        return this.find(x) == this.find(y);
    }
}