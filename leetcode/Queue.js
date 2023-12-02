class Node{
    val = null;
    next = null;

    constructor(val = null, next = null){
        this.val = val;
        this.next = next;
    }
}

/**
 * Queue Implementation
 */
class Queue{
    head = null;
    tail = null;
    size = 0;

    push(val){
        const node = new Node(val);
        if(!this.size){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    pop(){
        if(this.size){
            const val = this.head.val;
            this.head = this.head.next;
            this.size--;
            if(!this.size) this.tail = null;
            return val;
        }
    }

    peek(){
        return this.head?.val;
    }

    size(){
        return this.size;
    }

}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
console.log(queue);
console.log(queue.peek());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.peek());
console.log(queue);
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.peek());
console.log(queue);