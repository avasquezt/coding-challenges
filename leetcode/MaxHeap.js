/**
 * Max Heap Implementation
 */
class MaxHeap{
    data;
    maxSize;

    constructor(maxSize){
        this.maxSize = maxSize;
        // save size in data[0];
        this.data = [0];
    }

    add(element){
        this.data[0]++;
        if(this.data[0] > this.maxSize){
            console.log('Heap full');
            this.data[0]--;
            return;
        }
        let index = this.data[0];
        this.data[index] = element;
        let parent = Math.trunc(index / 2);

        while(parent > 0 && this.data[parent] < this.data[index]){
            [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
            index = parent;
            parent = Math.trunc(index / 2);
        }
    }

    peak(){
        return this.data[1];
    }

    pop(){
        if (this.realSize < 1) {
            console.log("Don't have any elements!");
            return undefined;
        }
        const removedElement = this.data[1];
        this.data[1] = this.data[this.data[0]];

        this.data[0]--;

        let index = 1;
        while(index <= Math.floor(this.data[0] / 2)){
            const left = index * 2;
            const right = index * 2 + 1;

            if(this.data[left] > this.data[index] || this.data[right] > this.data[index]){
                if(this.data[left] > this.data[right]){
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
        return removedElement;
    }
}

const heap = new MaxHeap(5);
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

heap.add(4);
heap.add(3);
heap.add(5);
console.log(heap);
console.log(heap.peak());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap);