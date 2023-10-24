/**
 * s
 */
class MinHeap{
    heapSize;
    realSize;
    data;

    constructor(heapSize){
        this.heapSize = heapSize;
        this.realSize = 0;
        this.data = [0];
    }

    add(element){
        this.realSize++;
        if(this.realSize > this.heapSize){
            console.log('Heap full');
            this.realSize--;
            return;
        }
        this.data[this.realSize] = element;

        let index = this.realSize;
        let parent = Math.trunc(this.realSize / 2);

        while(parent > 0 && this.data[parent] > this.data[index]){
            [this.data[parent], this.data[index]] = [this.data[index], this.data[parent]];
            index = parent;
            parent = Math.trunc(index / 2);
        }
    }

    peak(){
        return this.data[1];
    }

    pop(){
        if (this.realSize < 1) {
            console.log("Don't have any element!");
            return undefined;
        }
        const removedElement = this.data[1];
        this.data[1] = this.data[this.realSize];
        this.realSize--;

        let index = 1;
        while(index <= Math.trunc(this.realSize / 2)){
            
            const left = index * 2;
            const right = index * 2 + 1;

            if(this.data[left] < this.data[index] || this.data[right] < this.data[index]){
                if(this.data[left] < this.data[right]){
                    [this.data[left], this.data[index]] = [this.data[index], this.data[left]];
                    index = left;
                }else{
                    [this.data[right], this.data[index]] = [this.data[index], this.data[right]];
                    index = right;
                }
            }else{
                break;
            }
        }
        console.log(this.data);
        return removedElement;
    }
}

const heap = new MinHeap(5);
console.log(heap.peak());
heap.add(5);
heap.add(4);
heap.add(3);
heap.add(2);
heap.add(1);
heap.add(6);
console.log(heap);
console.log(heap.peak());

console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap);

heap.add(1);
heap.add(2);
heap.add(3);
console.log(heap);
console.log(heap.peak());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap);